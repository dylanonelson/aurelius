var path = require('path');
var webpack = require('webpack');
var SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');

var config = {
  devtool: 'source-map',
  entry: {
    index: './src/index.js',
  },
  module: {
    rules: [{
      exclude: /node_modules/,
      test: /\.jsx?$/,
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
      test: /\.jsx?$/,
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
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development',
    }),
    // Don't bundle moment locales beyond en
    new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en/),
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

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(new UglifyJSPlugin());
}

module.exports = config;
