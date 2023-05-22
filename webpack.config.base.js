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
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              implementation: require("dart-sass")
            }
          },
        ],
      },
      {
        test: /\.less$/i,
        use: [
          "style-loader",
          "css-loader",
          "less-loader",
        ],
      },
      {
        test: /\.stylus$/i,
        use: [
          "style-loader",
          "css-loader",
          "stylus-loader",
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        use: ["file-loader"],
        //file-loader 作用是将文件变成文件路径
      },
    ],
  },
};