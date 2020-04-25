const {
  override,
  addBabelPlugins,
} = require('customize-cra');
const path = require('path');

module.exports = override(
  ...addBabelPlugins(
    [
      'react-remove-properties',
      { properties: ['data-test'] },
    ],
    ['module-resolver', {
      root: ['./src/'],
      alias: {
        common: 'common',
      },
    }],
    '@babel/plugin-proposal-nullish-coalescing-operator',
    '@babel/plugin-proposal-optional-chaining',
  ),
);
