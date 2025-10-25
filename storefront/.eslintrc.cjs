module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', 'prettier'],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  rules: {
    semi: ['error', 'never'],
    quotes: ['error', 'single'],
    'max-len': ['error', { code: 100 }],
    'vue/html-indent': ['error', 2],
    'vue/singleline-html-element-content-newline': 'off',
  },
}
