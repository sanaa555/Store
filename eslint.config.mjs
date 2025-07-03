import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import { defineConfig } from 'eslint/config';
import prettier from 'eslint-plugin-prettier';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
    plugins: {
      js,
      prettier,
    },
    extends: [
      'js/recommended',
    ],
    rules: {
      'no-console': '0',
      'no-var': 'error',
      'prefer-const': 'error',
      'semi': ['error', 'always'],
      'prettier/prettier': 'error', 
    }
  },
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      }
    }
  },
  ...tseslint.configs.recommended
]);