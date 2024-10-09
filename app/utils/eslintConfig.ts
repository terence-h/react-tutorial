// ./app/utils/eslintConfig.ts
export const eslintConfig = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    plugins: ['@typescript-eslint', 'react'],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
    ],
    env: {
        browser: true, // Recognize browser globals like 'window' and 'console'
        node: true,    // Recognize Node.js globals
        es6: true,     // Enable ES6 features
    },
    rules: {
        "react/react-in-jsx-scope": "off",
        // semi: ['error', 'always'],
        // quotes: ['error', 'single'],
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
};