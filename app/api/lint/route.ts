// ./app/api/lint/route.ts
import 'eslint-plugin-react'; // Ensure the plugin is bundled
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { ESLint } from 'eslint';
import { eslintConfig } from '@/app/utils/eslintConfig';
import { eslintConfig_js } from '@/app/utils/eslintConfig-js';

interface LintRequestBody {
    code: string;
    language: 'javascript' | 'typescript' | 'jsx' | 'tsx';
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

export async function POST(request: NextRequest) {
    try {
        const { code, language } = (await request.json()) as LintRequestBody;

        if (typeof code !== 'string' || typeof language !== 'string') {
            return NextResponse.json({ error: 'Invalid input types.' }, { status: 400 });
        }

        const isTypeScript = language === 'typescript' || language === 'tsx';

        // Initialize ESLint
        const eslint = new ESLint({
            baseConfig: isTypeScript ? eslintConfig : eslintConfig_js,
            useEslintrc: false, // Prevent ESLint from using external config files
            // Optionally, specify extensions based on language
            extensions: isTypeScript ? ['.ts', '.tsx'] : ['.js', '.jsx'],
        });

        // Determine file extension based on language
        const fileExtension = isTypeScript ? 'tsx' : 'jsx';

        // Run ESLint
        const results = await eslint.lintText(code, { filePath: `file.${fileExtension}` });

        const messages: LintMessage[] = results[0]?.messages || [];

        return NextResponse.json({ messages }, { status: 200 });
    } catch (error: unknown) {
        console.error('ESLint Server Error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}