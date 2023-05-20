const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    //这里用 hash 的用途是便于添加缓存。缓存是HTTP协议里规定的。
  },
};