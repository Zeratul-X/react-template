import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

import prettierPlugin from 'eslint-plugin-prettier'
import prettierConfig from 'eslint-config-prettier'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended, prettierConfig],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'react-x': reactX,
      'react-dom': reactDom,
      prettier: prettierPlugin,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      ...reactX.configs['recommended-typescript'].rules,
      ...reactDom.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      // 添加Prettier规则，将格式问题报告为错误
      'prettier/prettier': 'error',
      'no-console': 'off',
      'no-debugger': 'off',
      'max-len': 'off',
      'no-multi-spaces': 'off', // 由Prettier处理
      'no-return-assign': 'off',
      semi: 'off', // 由Prettier处理
      eqeqeq: 'error',
      'jsx-quotes': 'off', // 由Prettier处理
      'import/prefer-default-export': 'off',
      'import/extensions': 'off',
      'import/no-unresolved': 'off',
      'no-multiple-empty-lines': 'off', // 由Prettier处理
      'no-param-reassign': 'off',
      '@typescript-eslint/no-shadow': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/indent': 'off', // 由Prettier处理
      '@typescript-eslint/no-empty-object-type': 'off',
    },
  },
)
