var path = require('path');
var SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');

module.exports = {
  devServer: {
    contentBase: 'dist',
    inline: true,
    port: 1104
  },
  devtool: 'source-map',
  entry: './src/index.js',
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    },{
      test: /\.css$/,
      loader: 'style!css'
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
    })
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    root: path.resolve('./src')
  }
}
