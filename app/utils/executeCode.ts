import React from 'react';
import ReactDOM from 'react-dom';
import * as Babel from '@babel/standalone';

interface ExecutionResult {
    output?: string;
    error?: string;
    element?: JSX.Element;
}

// Preprocess function to handle import and export statements
function preprocessCode(code: string): { transformedCode: string; exportedComponentName: string | null } {
    let exportedComponentName: string | null = null;

    // 1. Handle default imports: import React from 'react';
    const importDefaultRegex = /^import\s+React\s+from\s+['"]react['"];?/gm;
    code = code.replace(importDefaultRegex, '// React is globally available');

    // 2. Handle named imports: import { useState } from 'react';
    const importNamedRegex = /^import\s+\{\s*([^}]+)\s*\}\s+from\s+['"]react['"];?/gm;
    code = code.replace(importNamedRegex, (match, p1) => `const { ${p1} } = React;`);

    // 3. Handle combined imports: import React, { useState } from 'react';
    const importCombinedRegex = /^import\s+React\s*,\s*\{\s*([^}]+)\s*\}\s+from\s+['"]react['"];?/gm;
    code = code.replace(importCombinedRegex, (match, p1) => `const { ${p1} } = React;`);

    // 4. Handle export default function/class declarations
    const exportDefaultDeclarationRegex = /^export\s+default\s+(function|class)\s+(\w+)/gm;
    code = code.replace(exportDefaultDeclarationRegex, (match, p1, p2) => {
        exportedComponentName = p2;
        return `${p1} ${p2}`;
    });

    // 5. Handle export default identifiers: export default App;
    const exportDefaultRegex = /^export\s+default\s+(\w+);?/gm;
    code = code.replace(exportDefaultRegex, (match, p1) => {
        exportedComponentName = p1;
        return '';
    });

    // 6. Append assignment to window for the exported component
    if (exportedComponentName) {
        code += `\nwindow.__ExportedComponent = ${exportedComponentName};`;
    }

    return { transformedCode: code, exportedComponentName };
};

export function executeCode(code: string, language: string): ExecutionResult {
    try {
        if (language === 'jsx' || language === 'tsx') {
            // Preprocess the code
            const { transformedCode } = preprocessCode(code); // exportedComponentName

            // Determine the appropriate presets based on the language
            const presets = language === 'tsx' ? ['typescript', 'react'] : ['react'];

            // Transpile JSX/TSX to JavaScript
            const transpiled = Babel.transform(transformedCode, {
                presets: presets,
                filename: language === 'tsx' ? 'App.tsx' : 'App.jsx',
                sourceType: 'script', // Treat the code as a script, not a module
            });

            if (!transpiled || !transpiled.code) {
                throw new Error('Transpilation failed');
            }

            // Execute the transpiled code
            // eslint-disable-next-line no-new-func
            new Function('React', 'ReactDOM', transpiled.code)(React, ReactDOM);

            // Retrieve the exported component
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const Component = (window as any).__ExportedComponent;

            if (!Component) {
                throw new Error('The exported component was not found.');
            }

            // Return the React element
            return { element: React.createElement(Component) };
        } else {
            // For JavaScript/TypeScript, evaluate the code and capture console.log outputs
            let output = '';
            const originalConsoleLog = console.log;
            console.log = (...args: string[]) => { // : any[]
                output += args.join(' ') + '\n';
            };

            try {
                let evalCode = code;
                if (language === 'typescript') {
                    // Transpile TypeScript to JavaScript
                    const transpiled = Babel.transform(code, {
                        presets: ['typescript'],
                        filename: 'file.ts',
                        sourceType: 'script',
                    });

                    if (!transpiled || !transpiled.code) {
                        throw new Error('TypeScript transpilation failed');
                    }

                    evalCode = transpiled.code;
                }

                // eslint-disable-next-line no-new-func
                new Function(evalCode)();
            } finally {
                // Restore console.log
                console.log = originalConsoleLog;
            }

            return { output: output.trim() };
        }
    } catch (error: unknown) {
        return { error: (error as Error)?.message };
    }
    // catch (error: any) {
    //     return { error: error.message };
    // }
};
