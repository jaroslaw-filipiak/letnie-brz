const path = require('path');
const webpack = require('webpack');
const baseConfig = require('./webpack.common.js');
const { merge } = require('webpack-merge');

// common part for production and dev
const { cssLoaders } = require('./util');

// Configure Dev Server
const configureDevServer = () => {
  return {
    contentBase: path.resolve(__dirname, '../sources'),
    open: true,
    port: 3000,
    liveReload: true,
    hot: true,
    publicPath: '/',
    stats: 'errors-only',
    inline: true,
    watchContentBase: true,
  };
};

module.exports = merge(baseConfig, {
  // This option controls if and
  // how source maps are generated
  devtool: 'eval-source-map',

  // Providing the mode configuration option tells
  // webpack to use its built-in optimizations accordingly
  mode: 'development',

  // https://webpack.js.org/configuration/target/#root
  target: 'web',
  devServer: configureDevServer(),
  module: {
    rules: [
      {
        test: /\.(css|sass|scss)$/,
        use: [
          'style-loader',
          ...cssLoaders
        ],
      },
    ],
  },
  plugins: [
   
  ]
});