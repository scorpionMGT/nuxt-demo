import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginVue from 'eslint-plugin-vue';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,ts,vue}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  {
    files: ['**/*.vue'],
    languageOptions: { parserOptions: { parser: tseslint.parser } },
  },
  {
    rules: {
      'prefer-const': 'error',
      indent: ['error', 2], // 缩进使用 2 个空格
      'linebreak-style': ['error', 'unix'], // 使用 Unix 风格的换行符
      quotes: ['error', 'single'], // 使用单引号
      semi: ['error', 'never'], // 语句末尾不加分号
    },
  },
  {
    ignores: [
      '.husky/',
      '.nuxt/',
      '.output/',
      'node_modules/',
      '.cz-config.js',
      'package-lock.json',
      '.gitignore',
      '.prettierrc.js',
      'tsconfig.json',
      'commitlint.config.js',
    ],
  },
];
