# webpack 安装

- 安装本地的 webpack
  > yarn add webpack webpack-cli -D

## webpack 可以进行 0 配置

- 打包工具 ->输出后的结果（js 模块）
- 打包（支持我们的 JS 进行模块化）

## 手动配置 webpack

- 默认配置文件的名字->webpack.config.js
- webpack 是 node 写出来的，使用的是 node 的写法

```
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
```
