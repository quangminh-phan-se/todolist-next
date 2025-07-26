import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import { globalIgnores } from 'eslint/config';
import unusedImports from 'eslint-plugin-unused-imports';

export default tseslint.config([
  globalIgnores(['.next']),
  {
    files: ['**/*.{js,ts,jsx,tsx}'],
    plugins: {
      'unused-imports': unusedImports
    },
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser
    },
    rules: {
      'react-refresh/only-export-components': 'off',
      'no-empty-pattern': 'off',
      'no-console': ['error', { allow: ['warn', 'error'] }],
      'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: false }]
    }
  }
]);
