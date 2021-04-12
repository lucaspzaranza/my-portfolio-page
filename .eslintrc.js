module.exports = {
  extends: ['airbnb', 'prettier'],
  plugins: ['prettier'],
  env: {
    browser: true,
    es6: true,
  },
  rules: {
    'import/no-extraneous-dependencies': 'off',
    'prettier/prettier': 'off',
    'no-console': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-filename-extension': 'off', // disable if necessary
    'react/static-property-placement': 'off', // disable if necessary
    'react/jsx-props-no-spreading': 'off', // disable if necessary
    'react/require-default-props': 'off',
    'spaced-comment' : 'off',
    'no-unused-vars': 'off',
    'import/order': 'off',
    'react/jsx-closing-bracket-location': 'off',
    'react/jsx-closing-tag-location': 'off',
    'react/jsx-indent': 'off',
    'react/jsx-tag-spacing': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'jsx-a11y/alt-text': 'off',
    'global-require': 'off',
    'react/jsx-first-prop-new-line': 'off',
    'react/jsx-indent-props': 'off',
    'react/jsx-max-props-per-line': 'off',
  },
  parser: 'babel-eslint',
};
