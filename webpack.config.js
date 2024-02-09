const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  module: {
    rules:[
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'bable-loader',
        },
      },
    ],
  },
  
  plugins: [
    new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: 'index.html'
    }),
  ]
};