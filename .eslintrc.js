module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'playwright'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:playwright/recommended',
    'prettier',
  ],
  env: {
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    'playwright/no-skipped-test': 'warn',
    'playwright/valid-expect': 'error',
    'playwright/expect-expect': 'error',
    'playwright/no-conditional-expect': 'off', // Disable the problematic rule temporarily ('error' -> 'off')
  },
  ignorePatterns: ['node_modules/', 'playwright-report/', 'test-results/'],
};
