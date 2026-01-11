import js from '@eslint/js'
import vue from 'eslint-plugin-vue'
import vueParser from 'vue-eslint-parser'
import typescript from '@vue/eslint-config-typescript'
import prettierConfig from '@vue/eslint-config-prettier'

export default [
  js.configs.recommended,
  ...typescript(),
  ...(Array.isArray(prettierConfig) ? prettierConfig : [prettierConfig]),
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueParser,
      ecmaVersion: 'latest',
    },
    plugins: {
      vue,
    },
    processor: vue.processors['.vue'],
    rules: {
      ...vue.configs['vue3-essential'].rules,
      'vue/multi-word-component-names': 'off',
      'vue/no-multiple-template-root': 'off',
    },
  },
  {
    files: ['**/*.{js,mjs,cjs,ts}'],
    languageOptions: {
      ecmaVersion: 'latest',
    },
  },
  {
    ignores: ['node_modules/**', 'dist/**', '*.config.js', '.eslintrc.cjs'],
  },
]
