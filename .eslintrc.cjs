// .eslintrc.cjs
module.exports = {
  env: {
    es2021: true,
    node: true,
    'jest/globals': true,
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  overrides: [],
  parserOptions: {
    ecmaFeatures: { jsx: false },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['prettier', 'jest'],
  rules: {
    semi: ['error', 'always'],
    'prettier/prettier': 'error',
    quotes: ['error', 'single', { allowTemplateLiterals: true }],
  },
  settings: {},
  ignorePatterns: ['node_modules/'],
};
