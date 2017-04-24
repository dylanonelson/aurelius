var path = require('path');
var webpack = require('webpack');
var SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: {
    index: './src/index.js',
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }, {
      test: /\.css$/,
      loader: 'style!css'
    }, {
      test: /\.html$|\.json$/,
      loader: 'file-loader?name=[name].[ext]',
    }],
    preLoaders: [
      {
        test: /\.js?$/,
        loader: 'eslint?{fix:true}',
        include: /src/,
      }
    ]
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
    root: path.resolve('./src')
  }
}
