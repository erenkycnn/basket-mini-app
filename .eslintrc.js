module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:vue/vue3-essential'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  plugins: ['vue'],
  rules: {
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
    'no-console': 'off',
    'no-unused-vars': 'off',
    'no-undef': 'off',
    'no-multi-spaces': 'off',
    'no-prototype-builtins': 'off',
    'no-constant-condition': 'off',
    'no-irregular-whitespace': 'off',
    'no-async-promise-executor': 'off',
    'no-empty': 'off',
    'max-len': ['error', { code: 90 }],
    'vue/multi-word-component-names': 'off',
  },
};
