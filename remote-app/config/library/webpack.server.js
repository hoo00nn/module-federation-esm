const path = require('path');
const { merge } = require('webpack-merge');
const sharedWebpackConfig = require('../webpack.shared');
const moduleFederationPlugin = require('../module-federation');

/**
 * @type {import('webpack').Configuration}
 **/
const webpackConfig = {
  name: 'server',
  target: false,
  entry: './src/externals/index.ts',
  output: {
    path: path.resolve(__dirname, '../../lib/server'),
    filename: '[name].js',
    libraryTarget: 'commonjs-module',
    library: 'myapp',
    libraryTarget: 'umd',
  },
  plugins: [...moduleFederationPlugin.server],
};

module.exports = merge(sharedWebpackConfig, webpackConfig);
