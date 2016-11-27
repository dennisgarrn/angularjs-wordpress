let webpack = require('webpack');

module.exports = {
  entry: `${__dirname}/src/app.js`,
  output: {
    path: `${__dirname}/angularjsdg-theme`,
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      sourceMap: true,
    })
  ],
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
      }
    ]
  }
}
