const path = require('path');
const { merge } = require('webpack-merge');
const sharedWebpackConfig = require('../webpack.shared');
const moduleFederationPlugin = require('../module-federation');
const HtmlWebPackPlugin = require('html-webpack-plugin');

/**
 * @type {import('webpack').Configuration}
 **/
const webpackConfig = {
  output: {
    path: path.resolve(__dirname, '../../dist'),
  },
  plugins: [
    moduleFederationPlugin.client,
    new HtmlWebPackPlugin({
      template: './src/index.html',
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, '../../dist'),
    },
    hot: true,
    host: '0.0.0.0',
    port: 3004,
    compress: true,
    historyApiFallback: true,
  },
};

module.exports = merge(sharedWebpackConfig, webpackConfig);