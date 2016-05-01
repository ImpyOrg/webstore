/*eslint no-ignore*/

const OFF = 0;
const WARNING = 1;
const ERROR = 2;

module.exports = {
  parser: 'babel-eslint',
  root: true,

  plugins: [
    'react'
  ],

  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    },
  },

  env: {
    browser: true,
    es6: true,
    node: true
  },

  extends: ["eslint:recommended", "plugin:react/recommended"],

  rules: {
    // Possible Errors <http://eslint.org/docs/rules/#possible-errors>

    // Forked and moved to fb-www/comma-dangle
    'comma-dangle': OFF,
    // equivalent to jshint boss
    'no-cond-assign': OFF,
    // equivalent to jshint devel
    'no-console': ERROR,
    // prohibits things like `while (true)`
    'no-constant-condition': OFF,
    // we need to be able to match these
    'no-control-regex': OFF,
    // equivalent to jshint debug
    'no-debugger': ERROR,
    // equivalent to jshint W004
    'no-dupe-args': ERROR,
    // syntax error in strict mode, almost certainly unintended in any case
    'no-dupe-keys': ERROR,
    // almost certainly a bug
    'no-duplicate-case': WARNING,
    // almost certainly a bug
    'no-empty-character-class': WARNING,
    // would warn on uncommented empty `catch (ex) {}` blocks
    'no-empty': OFF,
    // can cause subtle bugs in IE 8, and we shouldn't do this anyways
    'no-ex-assign': WARNING,
    // we shouldn't do this anyways
    'no-extra-boolean-cast': WARNING,
    // parens may be used to improve clarity, equivalent to jshint W068
    'no-extra-parens': [WARNING, 'functions'],
    // equivalent to jshint W032
    'no-extra-semi': WARNING,
    // a function delaration shouldn't be rewritable
    'no-func-assign': ERROR,
    // babel and es6 allow block-scoped functions
    'no-inner-declarations': OFF,
    // will cause a runtime error
    'no-invalid-regexp': WARNING,
    // disallow non-space or tab whitespace characters
    'no-irregular-whitespace': WARNING,
    // write `if (!(a in b))`, not `if (!a in b)`, equivalent to jshint W007
    'no-negated-in-lhs': ERROR,
    // will cause a runtime error
    'no-obj-calls': ERROR,
    // improves legibility
    'no-regex-spaces': WARNING,
    // equivalent to jshint elision
    'no-sparse-arrays': ERROR,
    // equivalent to jshint W027
    'no-unreachable': ERROR,
    // equivalent to jshint use-isnan
    'use-isnan': ERROR,
    // probably too noisy ATM
    'valid-jsdoc': OFF,
    // equivalent to jshint notypeof
    'valid-typeof': ERROR,
    // we already require semicolons
    'no-unexpected-multiline': OFF,

    'accessor-pairs': OFF,
    'brace-style': [ERROR, '1tbs'],
    'comma-dangle': [OFF, 'always-multiline'],
    'consistent-return': ERROR,
    'dot-location': [ERROR, 'property'],
    'dot-notation': ERROR,
    'eol-last': ERROR,
    'eqeqeq': [ERROR, 'allow-null'],
    'indent': [ERROR, 2, {SwitchCase: 1}],
    'jsx-quotes': [ERROR, 'prefer-double'],
    'no-bitwise': OFF,
    'no-multi-spaces': ERROR,
    'no-restricted-syntax': [ERROR, 'WithStatement'],
    'no-shadow': ERROR,
    'no-unused-expressions': ERROR,
    'no-unused-vars': [ERROR, {args: 'none'}],
    'quotes': [ERROR, 'single', 'avoid-escape'],
    'space-after-keywords': OFF,
    'space-before-function-paren': [ERROR, {anonymous: 'never', named: 'never'}],
    //'space-before-keywords': ERROR,
    'keyword-spacing': OFF,
    'strict': [ERROR, 'global'],

    // React & JSX
    // Our transforms set this automatically
    'react/display-name': OFF,
    'react/jsx-boolean-value': [ERROR, 'always'],
    'react/jsx-no-undef': ERROR,
    // We don't care to do this
    'react/jsx-sort-prop-types': OFF,
    'react/jsx-sort-props': OFF,
    'react/jsx-uses-react': ERROR,
    'react/jsx-uses-vars': ERROR,
    // It's easier to test some things this way
    'react/no-did-mount-set-state': OFF,
    'react/no-did-update-set-state': OFF,
    // We define multiple components in test files
    'react/no-multi-comp': OFF,
    'react/no-unknown-property': OFF,
    // This isn't useful in our test code
    'react/prop-types': OFF,
    'react/react-in-jsx-scope': ERROR,
    'react/self-closing-comp': ERROR,
    // We don't care to do this
    'react/sort-comp': OFF,
    'react/wrap-multilines': [ERROR, {declaration: false, assignment: false}]
  }
};
