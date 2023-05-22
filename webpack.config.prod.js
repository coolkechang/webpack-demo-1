//生产（production）环境下使用这个文件。
//主要是区别引入CSS的方式，这里是利用插件提取CSS文件。


const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const base = require('./webpack.config.base.js')

module.exports = {
  ...base,
  //...base表示继承webpack.config.base.js中的属性。下面添加的表示要覆盖原有的属性
  mode: 'production',
  plugins: [
    ...base.plugins,
    new MiniCssExtractPlugin({
      // 类似于 webpackOptions.output 中的选项
      // 所有选项都是可选的
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css',
      ignoreOrder: false, // Enable to remove warnings about conflicting order
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "../",
            },
          },
          "css-loader",
        ],
      },
    ],
  },
};