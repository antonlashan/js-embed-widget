// eslint-disable-next-line no-undef
module.exports = {
  env: {
    browser: true,
    node: true,
    es2020: true,
  },
  plugins: ['prettier', 'simple-import-sort', 'import'],
  extends: ['eslint:recommended', 'prettier'],
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': 1,
    'simple-import-sort/sort': 'error',
    'sort-imports': 'off',
    'import/order': 'off',
    'import/no-cycle': [2],
    'prefer-const': ['error', { destructuring: 'all' }],
    'no-var': 'error',
    'func-style': ['error', 'expression'],
    'no-console': 1,
    eqeqeq: [1, 'always'],
  },
};
