const { defineConfig } = require('eslint-define-config')

const ignores = ['index']

module.exports = defineConfig({
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'standard-with-typescript',
    'plugin:jsonc/recommended-with-jsonc',
    './.eslintrc-auto-import.json'
  ],
  overrides: [
    {
      files: [
        '*.vue'
      ],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser'
      }
    }
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
    }]
  }
})
