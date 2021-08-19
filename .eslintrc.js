module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['@vue/eslint-config-standard', 'plugin:vue/essential','plugin:sonarjs/recommended'],
  plugins: ['vue'],
  rules: {
    // 'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-console': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    camelcase: 'off',
    "max-depth": ['error', 3]
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
