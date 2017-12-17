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
treeshaking: 是一个术语，通常用于描述移除js上下文中的未引用代码
12. 开发环境与生产环境分离：common.js通用的配置，dev.js用于开发，prod.js用于生产
webpack-merge可以方便地合并配置
package.json中start用于开发，build用于生产
13. 代码分离是 webpack 中最引人注目的特性之一。此特性能够把代码分离到不同的 bundle 中，然后可以按需加载或并行加载这些文件。代码分离可以用于获取更小的 bundle，以及控制资源加载优先级，如果使用合理，会极大影响加载时间。
有三种常用的代码分离方法：
入口起点：使用 entry 配置手动地分离代码。
防止重复：使用 CommonsChunkPlugin 去重和分离 chunk。
动态导入：通过模块的内联函数调用来分离代码。
代码分离只是把一部分代码分开，但是加载这个包并不需要用户的交互，也就是每次加载页面的时候都会请求它，这样还是会对性能产生影响。下面的懒加载就是当交互时有需要才加载
14. 懒加载或者按需加载，是一种很好的优化网页或应用的方式。这种方式实际上是先把你的代码在一些逻辑断点处分离，然后在一些代码块中完成某些操作后，立即引用或即将引用另外一些新的代码块。这样加快了应用的初始加载速度，减轻了它的总体体积，因为某些代码块可能永远不会被加载。
懒加载是基于上面的代码分离
15. 缓存：通过缓存确保webpack编译生成的文件能被客户端缓存，优化后能请求新的
通过使用 output.filename 进行文件名替换，可以确保浏览器获取到修改后的文件。[hash] 替换可以用于在文件名中包含一个构建相关(build-specific)的 hash，但是更好的方式是使用 [chunkhash] 替换，在文件名中包含一个 chunk 相关(chunk-specific)的哈希。
三个模块什么时候更新：
main bundle 会随着自身的新增内容的修改，而发生变化。
vendor bundle 会随着自身的 module.id 的修改，而发生变化。这个不是我们预期的
runtime bundle 会因为当前包含一个新模块的引用，而发生变化
16. provideplugin: 定义了一个变量和对应的package，就通过访问一个该变量来获取package包（通过插件来提供package）。如果这个变量在某个模块中被使用，那么webpack将在最终bundle中引入对应的package
17. 不同环境下的this指向不同。可以通过在webpack.config.js中配置imports-loader来写this的指向
18. shim 是一个库(library)，它将一个新的 API 引入到一个旧的环境中，而且仅靠旧的环境中已有的手段实现
19. TypeScript是js的超集，为其增加了类型系统，但可以编译为普通的js代码
20. 构建/编译性能优化
* loaders要应用于最少数的模块中，在配置中加上include来指定
* loader/plugin也有启动时间，所以要尽量少使用不同工具
* DllPlugin会对更新少的代码进行单独编译，这会改善引用程序的编译速度 
* 减少编译的整体大小，保持chunks小巧。包括：使用更少/小的库，多页面应用中使用commonschunksplugin，多页面中以async使用commonschunksplugin，移除不用的代码，只编译当前开发部分的代码
* 持久化缓存：通过cache-loader启用。用package.json中的postinstall来清除缓存目录
* 在内存中编译，而不写入磁盘。使用以下工具：webpack-dev-server, webpack-host-middleware, webpack-dev-middleware
* 开发环境避免在生产环境下才会用到的工具，比如压缩代码等
* 生产环境不要加入不需要的配置和工具











