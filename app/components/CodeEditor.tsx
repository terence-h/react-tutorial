"use client";

import React, { useState, useEffect, useRef, PropsWithChildren } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { vscodeDark, vscodeLight } from '@uiw/codemirror-theme-vscode';
import { dracula } from '@uiw/codemirror-theme-dracula';
import { monokai } from '@uiw/codemirror-theme-monokai';
import { Extension } from '@codemirror/state';
import { linter, Diagnostic } from '@codemirror/lint';
import debounce from 'lodash/debounce';
import { executeCode } from '../utils/executeCode';
import ErrorBoundary from './ErrorBoundary';

interface CodeEditorProps extends PropsWithChildren {
    languages?: Array<'javascript' | 'typescript' | 'jsx' | 'tsx'>;
    initialCode?: string;
    themeOpt?: 'vscode-dark' | 'vscode-light' | 'dracula' | 'monokai';
}

interface LintMessage {
    line: number;
    column: number;
    endLine?: number;
    endColumn?: number;
    message: string;
    severity: 1 | 2;
    ruleId: string | null;
}

interface LintResponse {
    messages: LintMessage[];
    error?: string;
}

/**
 * A customizable code editor component that supports various languages and themes.
 * 
 * @param languages - Optional array of supported languages. Defaults to all if not provided.
 * @param initialCode - Optional initial code to be displayed in the editor.
 * @param themeOpt - Optional theme for the editor; defaults to 'vscode-dark' if not provided.
 * @returns The rendered code editor component.
 * 
 * @example
 * <CodeEditor />
 * 
 * @example
 * <CodeEditor 
 *    languages={["javascript", "typescript", "jsx", "tsx"]}
 *    initialCode="console.log('hello');"
 *    themeOpt="dracula"
 * />
 * 

 */
export default function CodeEditor({ languages, initialCode, themeOpt = 'vscode-dark' }: CodeEditorProps) {
    const [code, setCode] = useState<string>(initialCode ?? '// Write your code here');
    const [language, setLanguage] = useState<'javascript' | 'typescript' | 'jsx' | 'tsx'>(languages?.[0] ?? 'javascript');
    const [output, setOutput] = useState<string | JSX.Element>('');
    const [extensions, setExtensions] = useState<Extension[]>([]);
    const [diagnostics, setDiagnostics] = useState<Diagnostic[]>([]);
    const [theme, setTheme] = useState<'vscode-dark' | 'vscode-light' | 'dracula' | 'monokai'>(themeOpt);

    // Use useRef to store the debounced function
    const debouncedLintCode = useRef(debounce(lintCode, 500)).current;

    // Effect to trigger linting when code or language changes
    useEffect(() => {
        debouncedLintCode(code, language);
    }, [code, language, debouncedLintCode]);

    // Effect to set up language and theme extensions
    useEffect(() => {
        const languageExtension = getLanguageExtension(language);

        setExtensions([
            languageExtension,
            linter(() => diagnostics),
            // Add other extensions like autocompletion if needed
        ]);
    }, [language, diagnostics]);

    async function handleRunCode() {
        const result = executeCode(code, language);
        if (result.output) {
            setOutput(`Output:\n${result.output}`);
        } else if (result.error) {
            setOutput(`Error:\n${result.error}`);
        } else if (result.element) {
            setOutput(result.element);
        } else {
            setOutput('No output');
        }
    };

    // Function to determine the appropriate language extension
    function getLanguageExtension(language: string): Extension {
        switch (language) {
            case 'javascript':
                return javascript({ jsx: false });
            case 'typescript':
                return javascript({ jsx: false, typescript: true });
            case 'jsx':
                return javascript({ jsx: true });
            case 'tsx':
                return javascript({ jsx: true, typescript: true });
            default:
                return javascript();
        }
    };

    // Helper function to calculate character offset based on line and column
    function getCharacterOffset(code: string, line: number, column: number): number {
        const lines = code.split('\n');
        let offset = 0;
        for (let i = 0; i < line - 1; i++) {
            offset += lines[i].length + 1; // +1 for the newline character
        }
        return offset + (column - 1);
    };

    // Function to perform linting
    async function lintCode(code: string, language: string) {
        if (!code.trim()) {
            // If code is empty, clear diagnostics
            setDiagnostics([]);
            return;
        }

        try {
            const response = await fetch('/api/lint', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    code,
                    language,
                }),
            });

            if (!response.ok) {
                // Handle non-2xx HTTP responses
                const errorData = await response.json();
                console.error('Linting error:', errorData.error);
                setDiagnostics([]);
                return;
            }

            const data: LintResponse = await response.json();
            const { messages } = data;

            const cmDiagnostics: Diagnostic[] = messages.map((msg: LintMessage) => ({
                from: msg.line && msg.column
                    ? getCharacterOffset(code, msg.line, msg.column)
                    : 0,
                to: msg.endLine && msg.endColumn
                    ? getCharacterOffset(code, msg.endLine, msg.endColumn)
                    : msg.line && msg.column
                        ? getCharacterOffset(code, msg.line, msg.column) + 1
                        : 0,
                severity: msg.severity === 2 ? 'error' : 'warning',
                message: msg.message,
                source: msg.ruleId || 'eslint',
            }));

            setDiagnostics(cmDiagnostics);
        } catch (error) {
            console.error('Linting error:', error);
            setDiagnostics([]);
        }
    };

    // Function to get the theme extension
    function getThemeExtension() {
        switch (theme) {
            case 'vscode-dark':
                return vscodeDark;
            case 'vscode-light':
                return vscodeLight;
            case 'dracula':
                return dracula;
            case 'monokai':
                return monokai;
            default:
                return vscodeDark;
        }
    };

    function getLanguageName(lang: string): string {
        switch (lang) {
            case 'javascript':
                return "JavaScript";
            case 'typescript':
                return "TypeScript";
            case 'jsx':
                return "React (JSX)";
            case 'tsx':
                return "React (TSX)";
            default:
                return "JavaScript";
        }
    }

    return (
        <div className="p-5">
            <div className="flex flex-col md:flex-row items-center space-y-3 md:space-x-4 md:space-y-0 mb-4">
                <select
                    className="bg-background border border-gray-300 rounded px-2 py-1 md:px-3 md:py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={language}
                    onChange={(e) =>
                        setLanguage(e.target.value as 'javascript' | 'typescript' | 'jsx' | 'tsx')
                    }
                >
                    {languages?.map(lang => {
                        return <option key={lang} value={lang}>{getLanguageName(lang)}</option>
                    })}
                    {(!languages) && (
                        <>
                            <option value="javascript">JavaScript</option>
                            <option value="typescript">TypeScript</option>
                            <option value="jsx">React (JSX)</option>
                            <option value="tsx">React (TSX)</option>
                        </>
                    )}
                </select>
                <select
                    className="bg-background border border-gray-300 rounded px-2 py-1 md:px-3 md:py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={theme}
                    onChange={(e) =>
                        setTheme(e.target.value as 'vscode-dark' | 'vscode-light' | 'dracula' | 'monokai')
                    }
                >
                    <option value="vscode-dark">VSCode Dark</option>
                    <option value="vscode-light">VSCode Light</option>
                    <option value="dracula">Dracula</option>
                    <option value="monokai">Monokai</option>
                </select>
                <button
                    onClick={handleRunCode}
                    className="bg-blue-500 text-white px-3 py-1 md:px-4 md:py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Run Code
                </button>
            </div>
            <CodeMirror
                value={code}
                height="400px"
                extensions={extensions}
                theme={getThemeExtension()}
                onChange={setCode}
            />
            <div className="mt-1">
                <h2 className="text-xl font-semibold mb-2">Output:</h2>
                {typeof output === 'string' ? (
                    <pre className="bg-background p-4 rounded whitespace-pre-wrap border-2">
                        {output}
                    </pre>
                ) : (
                    <ErrorBoundary><div className='dark:bg-white dark:text-black'>{output}</div></ErrorBoundary>
                )}
            </div>
        </div>
    );
}