module.exports = {
  parser: 'babel-eslint',
  plugins: ['babel', 'eslint-plugin', 'jsx-a11y', 'no-only-tests', 'react', 'react-hooks'],
  extends: [
    'eslint:recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:node/recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended'
  ],
  parserOptions: {
    ecmaVersion: 9,
    ecmaFeatures: {
      jsx: true
    },
    sourceType: 'module'
  },
  ignorePatterns: ['dist/**', 'node_modules', 'build/**', '.eslintrc.js'],
  rules: {
    'node/no-unpublished-import': 0,
    'arrow-body-style': [2, 'as-needed'],
    'arrow-parens': [2, 'as-needed'],
    'arrow-spacing': 2,
    'babel/no-unused-expressions': 2,
    'block-scoped-var': 2,
    'block-spacing': 1,
    'brace-style': [1, '1tbs'],
    'comma-dangle': [2, 'never'],
    'comma-spacing': 2,
    curly: 2,
    'default-case': 2,
    'eslint-plugin/no-deprecated-report-api': 2,
    eqeqeq: 2,
    'func-style': [2, 'declaration', {allowArrowFunctions: true}],
    indent: 0,
    'jsx-quotes': [2, 'prefer-single'],
    'lines-between-class-members': 1,
    'new-cap': [2, {newIsCap: true, capIsNewExceptionPattern: 'cb.apricot.CB'}],
    'no-alert': 2,
    'no-console': 2,
    'no-duplicate-imports': 2,
    'no-empty-function': 2,
    'no-eq-null': 2,
    'no-extend-native': 2,
    'no-implicit-coercion': 1,
    'no-invalid-this': 2,
    'no-lone-blocks': 2,
    'no-multi-spaces': 2,
    'no-multiple-empty-lines': [1, {max: 1, maxBOF: 0, maxEOF: 1}],
    'no-only-tests/no-only-tests': 1,
    'no-proto': 2,
    'no-self-compare': 2,
    'no-shadow': 2,
    'no-shadow-restricted-names': 2,
    'no-throw-literal': 2,
    'no-trailing-spaces': 1,
    'no-unused-expressions': 0,
    'no-useless-computed-key': 2,
    'no-useless-constructor': 2,
    'no-useless-rename': [
      2,
      {
        ignoreDestructuring: false,
        ignoreImport: false,
        ignoreExport: false
      }
    ],
    'no-var': 2,
    'no-useless-return': 2,
    'no-unneeded-ternary': 1,
    'no-whitespace-before-property': 1,
    'object-shorthand': 1,
    'object-curly-spacing': 2,
    'padded-blocks': [0, 'never'],
    'prefer-arrow-callback': 2,
    'prefer-const': 1,
    'prefer-destructuring': 1,
    'prefer-spread': 1,
    'prefer-template': 2,
    quotes: [2, 'single', {allowTemplateLiterals: true}],
    'quote-props': [2, 'as-needed'],
    'react/no-unknown-property': 2,
    'react/button-has-type': 2,
    'react/destructuring-assignment': 2,
    'react/jsx-boolean-value': 1,
    'react/jsx-curly-spacing': 2,
    'react/jsx-equals-spacing': 2,
    'react/jsx-indent': 0,
    'react/jsx-key': 1,
    'react/jsx-no-duplicate-props': 2,
    'react/jsx-tag-spacing': 2,
    'react/jsx-uses-react': 2,
    'react/jsx-wrap-multilines': 2,
    'react/no-access-state-in-setstate': 1,
    'react/no-array-index-key': 0,
    'react/no-children-prop': 1,
    'react/no-deprecated': 2,
    'react/no-did-mount-set-state': 2,
    'react/no-did-update-set-state': 2,
    'react/no-direct-mutation-state': 2,
    'react/no-multi-comp': 0,
    'react/no-typos': 2,
    'react/no-this-in-sfc': 1,
    'react/no-unescaped-entities': 0,
    'react/no-unused-prop-types': 2,
    'react/no-unused-state': 2,
    'react/no-will-update-set-state': 1,
    'react/prefer-es6-class': 2,
    'react/prefer-stateless-function': 2,
    'react/prop-types': 2,
    'react/require-render-return': 1,
    'react/self-closing-comp': 1,
    'react-hooks/rules-of-hooks': 2,
    'react-hooks/exhaustive-deps': 1,
    'require-await': 2,
    'react/react-in-jsx-scope': 0,
    semi: [2, 'always', {omitLastInOneLineBlock: true}],
    'space-before-blocks': 2,
    'space-in-parens': [1, 'never'],
    'switch-colon-spacing': 2,
    'template-curly-spacing': 1,
    'vars-on-top': 2,
    yoda: 2
  },
  env: {
    es6: true,
    browser: true,
    node: true,
    mocha: true
  },
  settings: {
    react: {
      createClass: 'createReactClass',
      pragma: 'React',
      version: '17.0',
      flowVersion: '0.53'
    },
    propWrapperFunctions: ['forbidExtraProps']
  }
};
