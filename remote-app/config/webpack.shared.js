const path = require('path');

/**
 * @type {import('webpack').Configuration}
 **/
const webpackConfig = {
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
    alias: {
      '@': path.resolve(__dirname, '../src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        type: 'javascript/auto',
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(js|ts)x?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      // CSS Modules
      {
        test: /\.module\.scss$/i,
        use: [
          'isomorphic-style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              esModule: false,
              modules: {
                localIdentName: '[local]__[hash:base64:7]',
                namedExport: false,
                exportLocalsConvention: 'as-is',
              },
            },
          },
          'sass-loader',
          'postcss-loader',
        ],
      },
      // Global CSS
      {
        test: /\.scss|css$/i,
        exclude: /\.module\.scss$/i,
        use: [
          'isomorphic-style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              esModule: false,
            },
          },
          'sass-loader',
          'postcss-loader',
        ],
      },
      {
        test: /\.(woff|woff2|png|jpe?g|gif|ico|webp)/,
        use: [
          {
            loader: 'url-loader',
          },
        ],
      },
    ],
  },
};

module.exports = webpackConfig;
