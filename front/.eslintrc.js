
// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  extends: [
    'airbnb-base',
    'plugin:vue/essential'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      'js': 'never',
      'vue': 'never',
      'jsx': 'never'
    }],
    // allow optionalDependencies
    'import/no-extraneous-dependencies': ['error', {
      'optionalDependencies': ['test/unit/index.js']
    }],
    'import/prefer-default-export': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-console': process.env.NODE_ENV === 'production' ? 1 : 0,
    'comma-dangle': 0,
    'indent': 0,
    'dot-notation': 0,
    'object-curly-spacing': 0,
    'object-curly-newline': 0,
    'no-new': 0,
    'no-prototype-builtins': 0,
    'arrow-parens': 0,
    'no-param-reassign': 0,
    'no-confusing-arrow': 0,
    'no-bitwise': 0,
    'no-plusplus': 0,
    'no-multi-assign': 0,
    'prefer-destructuring': 0,
    'vue/no-parsing-error': [2, {"x-invalid-end-tag": false}],
    'no-restricted-globals': 0,
    'function-paren-newline': 0
  }
};
