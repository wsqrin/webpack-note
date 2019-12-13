const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin'); // JS压缩，需要设置为生产环境
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin'); // css打包
// 打包的目录
console.log(path.resolve('dist'));

module.exports = {
  // devServer: {
  //   port: 3000,
  //   progress: true, // 打包进度条
  //   contentBase: './build', // 运行服务的目录--默认会打开目录下的index.html文件
  //   compress: true, // 自动压缩代码
  //   open: true // 启动服务时-自动打开浏览器
  // },
  //development
  mode: 'production', // 模式
  entry: './src/index.js', // 入口文件
  output: { // 输入
    filename: 'bundle.[hash:8].js', // 打包后的文件名--[hash:8]每次打包都生成新的文件，指定8位
    path: path.resolve(__dirname, 'build') // 打包路径：通过resolve保证为绝对路径
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true, // 是否缓存
        parallel: true, // 是否并发打包
        sourceMap: true
      }),
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // 指定打包文件
      filename: 'index.html', // 打包后生成的文件名
      minify: {
        removeAttributeQuotes: true, // 删除index.html中多余的双引号
        collapseWhitespace: true, // 折叠空白行
      },
      hash: true, // hash文件名
    }),
    new MiniCssExtractPlugin({
      filename: 'main.css'
    }),
    new OptimizeCssAssetsPlugin()
  ],
  module: {
    rules: [
      // loader特点： 
      // 1.希望单一
      // 2.字符串只用一个loader
      // 3.多个loader需要[]
      // 4.loader默认从右向左执行,从下到上执行
      // -----------------------------------
      // css-loader 接续 @import 语法
      // style-loader 把css插入head的标签中
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader, // 将CSS提取到单独的文件中。它为每个包含CSS的JS文件创建一个CSS文件
          'css-loader',
          'postcss-loader', // 注意要在css-loader之后
        ]
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader', // css前缀
          'less-loader'
        ]
      }
    ]
  },
}