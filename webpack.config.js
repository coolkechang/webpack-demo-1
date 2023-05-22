//开发环境下使用这个文件。
//主要是区别引入CSS的方式，这里是利用JS生成style



const base = require('./webpack.config.base.js')

module.exports = {
  ...base,
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
  module: {
    rules: [
      ...base.module.rules,
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
        //如果发现.css结尾的文件名。"css-loader"会把文件内容读到JS里面，"style-loader"将其变成style标签放到head里面
      },
    ],
  },
};
