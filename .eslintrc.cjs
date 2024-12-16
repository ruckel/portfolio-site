module.exports = {
  extends: ['proste/reactTS', 'proste/vitest', 'prettier'],
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: '.',
    warnOnUnsupportedTypeScriptVersion: true,
  },
  overrides: [
    {
      files: ['cypress/**', 'cypress.config.ts'],
      plugins: ['cypress'],
      parserOptions: {
        project: './cypress/tsconfig.json',
        tsconfigRootDir: __dirname,
        warnOnUnsupportedTypeScriptVersion: true,
      },
      env: {
        'cypress/globals': true,
      },
    },
  ],
  rules: {
    'array-callback-return': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'no-unused-expressions': 'off',
    'no-unused-vars': 'off',
    'no-empty-pattern': 'off',
    'no-console': 'off',
  },
}
