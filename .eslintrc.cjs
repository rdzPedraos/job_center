module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:react-hooks/recommended',
    ],
    overrides: [],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react'],
    rules: {
        //'react-refresh/only-export-components': 'warn',
        'no-unused-vars': 'warn',

        indent: ['error', 4, { MemberExpression: 1 }],
        'linebreak-style': ['error', 'windows'],
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
    },
    globals: {
        route: 'readonly',
    },
};
