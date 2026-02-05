import js from '@eslint/js'
import vue from 'eslint-plugin-vue'
import typescript from '@vue/eslint-config-typescript'
import prettierConfig from '@vue/eslint-config-prettier'

export default [
  js.configs.recommended,
  ...typescript(),
  ...(Array.isArray(prettierConfig) ? prettierConfig : [prettierConfig]),
  // eslint-plugin-vue 10 flat config
  ...vue.configs['flat/essential'],
  {
    files: ['**/*.vue'],
    rules: {
      'vue/multi-word-component-names': 'off',
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
