export default [
  {
    languageOptions: {
    parser: 'vue-eslint-parser',
    parserOptions: {
      parser: '@typescript-eslint/parser',
      ecmaVersion: 2020,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true
      }
    },
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended'
  ],
  rules: {
      "no-unused-vars": "error",
      "no-undef": "error"
  },
  ignores: ["node_modules/", ".nuxt/", ".output/", ".husky/", ".gitignore", ".cz-config.js", ".prettierrc.js", "commitlint.config.js", "package.json", "pnpm-lock.yaml"]
  }
];