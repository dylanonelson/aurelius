var path = require('path');
var webpack = require('webpack');
var SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: {
    index: './src/index.js',
  },
  module: {
    rules: [{
      exclude: /node_modules/,
      test: /\.js$/,
      use: ['babel-loader'],
    }, {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader',
      ],
    }, {
      test: /\.html$|\.json$/,
      use: [{
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
        },
      }],
    }, {
      enforce: 'pre',
      include: /src/,
      test: /\.js?$/,
      use: [{
        loader: 'eslint-loader',
        options: {
          fix: true,
        },
      }],
    }],
  },
  plugins: [
    new SWPrecacheWebpackPlugin({
      cacheId: 'aurelius',
      fileName: './dist/service-worker.js',
      staticFileGlobs: ['dist/**/*.{js,html,css,png,jpg,gif}'],
      stripPrefix: 'dist',
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      }
    }),
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  resolve: {
    modules: [
      path.join(__dirname, 'src'),
      'node_modules',
    ],
  }
}
