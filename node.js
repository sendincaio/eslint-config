module.exports = {
    env: {
        es2021: true,
        node: true,
    },
    extends: ['standard', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint', 'simple-import-sort'],
    rules: {
        'simple-import-sort/imports': 'error',
        'prettier/prettier': [
            'error',
            {
                printWidth: 120,
                tabWidth: 4,
                singleQuote: true,
                trailingComma: 'all',
                arrowParens: 'always',
                semi: false,
            },
        ],
    },
    settings: {
        'import/parsers': {
            [require.resolve('@typescript-eslint/parser')]: ['.ts', '.tsx', '.d.ts'],
        },
    },
}
