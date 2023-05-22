const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    //这里用 hash 的用途是便于添加缓存。缓存是HTTP协议里规定的。
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development',
      template: 'src/assets/index.html'
    }),
  ],
};