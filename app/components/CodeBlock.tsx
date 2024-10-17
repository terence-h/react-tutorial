"use client";

import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus, vs, dracula, xonokai } from 'react-syntax-highlighter/dist/esm/styles/prism';
import useLocalStorage from '../hooks/useLocalStorage';

interface CodeBlockProps {
    code: string;
    language: string;
}

export default function CodeBlock({ code, language }: CodeBlockProps) {
    const [theme] = useLocalStorage<string>('codeTheme', 'vs-dark');

    function getThemeExtension() {
        switch (theme) {
            case 'vscode-dark':
                return vscDarkPlus;
            case 'vscode-light':
                return vs;
            case 'dracula':
                return dracula;
            case 'monokai':
                return xonokai;
            default:
                return vscDarkPlus;
        }
    };

    return (
        // dark:bg-slate-700 rounded-lg p-3
        <div className="w-full overflow-x-auto">
            <SyntaxHighlighter
                language={language}
                style={getThemeExtension()}
                customStyle={{
                    // background: 'transparent',
                    padding: 5,
                    margin: 0,
                    fontSize: '1rem', // Tailwind's text-base
                }}
                showLineNumbers
                wrapLines
            >
                {code}
            </SyntaxHighlighter>
        </div>
    );
};