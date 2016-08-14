var path = require('path');
var webpack = require('webpack');

var config = {
  entry: {
    app: ['./app.js']
  },
  output: {
    path: __dirname,
    filename: '[name].bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.html$/,
        loader: 'raw'
    }]
  }
}

module.exports = config;
