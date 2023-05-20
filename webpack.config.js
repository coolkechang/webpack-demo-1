const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    //这里用 hash 的用途是便于添加缓存。缓存是HTTP协议里规定的。
  },
  plugins: [new HtmlWebpackPlugin({
    title: '学习webpack',
    template: 'src/assets/index.html'
  })],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
        //如果发现.css结尾的文件名。"css-loader"会把文件内容读到JS里面，"style-loader"将其变成style标签放到head里面
      },
    ],
  },
};
