const path = require('path');
const { merge } = require('webpack-merge');
const sharedWebpackConfig = require('../webpack.shared');
const moduleFederationPlugin = require('../module-federation');
const HtmlWebPackPlugin = require('html-webpack-plugin');

/**
 * @type {import('webpack').Configuration}
 **/
const webpackConfig = {
  entry: './src/externals/index.ts',
  output: {
    path: path.resolve(__dirname, '../../lib/client'),
    filename: '[name].js',
    library: 'myapp',
    libraryTarget: 'umd',
  },
  plugins: [moduleFederationPlugin.client],
};

module.exports = merge(sharedWebpackConfig, webpackConfig);
