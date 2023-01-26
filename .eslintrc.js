// @ts-check
const { defineConfig } = require('eslint-define-config')

const ignores = ['index']

module.exports = defineConfig({
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:vue/vue3-strongly-recommended',
    'standard-with-typescript',
    'plugin:jsonc/recommended-with-jsonc',
    './.eslintrc-auto-import.json'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json'],
    createDefaultProgram: true
  },
  plugins: [
    'vue'
  ],
  rules: {
    'vue/multi-word-component-names': [2, {
      ignores
    }],
    'no-multiple-empty-lines': [2, {
      max: 1,
      maxEOF: 0
    }],
    'space-infix-ops': [0]
  }
})
