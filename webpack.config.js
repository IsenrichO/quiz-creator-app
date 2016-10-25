const webpack = require('webpack');
const path = require('path');


module.exports = {
  devtool: 'cheap-eval-source-map',
  entry: [
    path.join(__dirname, 'app/app')
  ],
  output: {
    path: path.join(__dirname, 'public'),
    filename: './js/bundle'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        query: {
          presets:['react']
        }
      }
    ]
  },
  devServer: {
    colors: true,
    contentBase: __dirname,
    noInfo: false,
    hot: true,
    inline: true,
    port: 3000,
    host: 'localhost'
  },
  plugins: [
    // new webpack.HotModuleReplacementPlugin()
  ]
};
