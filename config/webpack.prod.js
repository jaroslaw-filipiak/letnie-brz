const webpack = require('webpack');
const baseConfig = require('./webpack.common.js');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

// common part for production and dev
const { cssLoaders } = require('./util');

// configure Optimization
const configureOptimization = () => {
  return {
    minimize: true,
    minimizer: [new TerserPlugin()]
  }
}

// configure MiniCssExtract
const configureMiniCssExtract = () => {
  return {
    filename: 'vendor/css/[name].css',
    chunkFilename: 'vendor/css/[name].css',
  }
}

// configure Service Worker
const configureSW = () => {
  return {
    clientsClaim: true,
    skipWaiting: true,
    directoryIndex: 'index.html',
    offlineGoogleAnalytics: true
  }
}

// configure Copy
const configureCopy = () => {
  return {
    patterns: [
      {
        from: 'sources/assets/',
        to: 'assets/'
      },
      {
        from: 'sources/images/',
        to: 'images/',
        // blocking file copying by plugin webpack will
        // do it for you and rename it with a hash
        globOptions: {
          // ignore: ['**.svg']
        }
      },
    ]
  }
};

module.exports = merge(baseConfig, {
  mode: 'production',
  target: 'browserslist',
  module: {
    rules: [
      {
        test: /\.(css|sass|scss)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // set path for images
              // this setting is compatible with windows
              // changes the path to the file, in our case svg
              publicPath: '../../',
            },
          },
          ...cssLoaders
        ],
      },
    ],
  },
  optimization: configureOptimization(),
  plugins: [
    // when we run the production build then 
    // the docs folder is cleared
    new CleanWebpackPlugin({
      dry: false,
      verbose: true
    }),

    // we extract scss files from js and create
    // separate files for individual pages
    new MiniCssExtractPlugin(
      configureMiniCssExtract()
    ),

    // we create a service-worker for our data
    new WorkboxPlugin.GenerateSW(
      configureSW()
    ),

    // we copy all necessary graphic files
    // and assets to build folder
    new CopyWebpackPlugin(
      configureCopy()
    ),

    // Visualization of the size of js files
    // new BundleAnalyzerPlugin({
    //   openAnalyzer: true
    // }),
  ]
});