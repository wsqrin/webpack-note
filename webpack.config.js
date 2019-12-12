let path = require('path')

// 打包的目录
console.log(path.resolve('dist'));

module.exports = {
  mode: 'development', // 模式
  entry: './src/index.js', // 入口文件
  output: { // 输入
    filename: 'bundle.js', // 打包后的文件名
    path: path.resolve('dist') // 打包路径：通过resolve保证为绝对路径
  }
}