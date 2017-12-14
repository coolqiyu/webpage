1. 从https://doc.webpack-china.org/guides/getting-started/#-开始练习

2. 步骤中记录的注意点
1. 对于大多数项目，我们建议本地安装。（全局安装：npm install --global webpack）。不推荐全局安装 webpack。这会将您项目中的 webpack 锁定到指定版本，并且在使用不同的 webpack 版本的项目中，可能会导致构建失败。
2. 隐式依赖的缺点：
无法立即体现，脚本执行依赖于外部
如果依赖不存在，或顺序错误，则程序无法正常执行
如果依赖引入但未使用，则会有无用代码
=>使用webpack来管理脚本
3. 调整结构
源代码src与分发代码dist分开。“源”代码是用于书写和编辑的代码。“分发”代码是构建优化后的“输出”目录，最终将在浏览器中加载
源代码html中依赖的js也要改成是优化后的
4. webpack命令默认是使用webpack.config.js配置
5. webpack会动态打包所有依赖项。因为模块可以明确表述依赖，所以未被使用的就不会被打包
6. 处理css文件时，style-loader需在css-loader前
7. 如果我们更改了一个入口的起点，甚至添加了一个新的名称，生成的包将被重命名在一个构建中，但index.html仍会引用旧的名字，我们用HtmlWebpackPlugin来解决问题。使用这个插件后，当修改bundle的名称后，会自动在index.html中引用新的bundle
8. source map: 为了更容易地追踪错误和警告，JavaScript 提供了 source map 功能，将编译后的代码映射回原始源代码
9. 每次要编译代码时，手动运行 npm run build 就会变得很麻烦。
webpack 中有几个不同的选项，可以帮助你在代码发生变化后自动编译代码：
* webpack's Watch Mode观察者模式：在packge.json中使用watch，当保存文件时就会触发编译，需手动刷新页面
* webpack-dev-server：简单的web服务器，可实时重新加载，保存文件会自动编译，且自动刷新（打开）页面（localhost:8080）
* webpack-dev-middleware：中间件容器，需借助express。通过localhost访问，需手动刷新
10. HMR: 运行时可以更新模块，无需完全刷新
module.hot 当执行保存文件时，console中会自动输出更新的信息
这个和上面的重新编译有什么区别呢？？？？
怎么实现hmr呢？在css中会自动，但js就要每个都写一下module.hot吗？
11. 问题：/* unused harmony export square */在一个模块中未使用的函数也会build到bundle中
解决：使用uglifyjs-webpack-plugin来删除未引用代码，执行tree-shaking
当一个工具不能保证某些特定的代码路径(path)不会导致副作用(side-effects)时，即使你确信它不应该存在生成的 bundle 中，但这个代码仍然会保留
12. 开发环境与生产环境分离：common.js通用的配置，dev.js用于开发，prod.js用于生产
webpack-merge可以方便地合并配置
package.json中start用于开发，build用于生产
13. 代码分离是 webpack 中最引人注目的特性之一。此特性能够把代码分离到不同的 bundle 中，然后可以按需加载或并行加载这些文件。代码分离可以用于获取更小的 bundle，以及控制资源加载优先级，如果使用合理，会极大影响加载时间。
有三种常用的代码分离方法：
入口起点：使用 entry 配置手动地分离代码。
防止重复：使用 CommonsChunkPlugin 去重和分离 chunk。
动态导入：通过模块的内联函数调用来分离代码。

















