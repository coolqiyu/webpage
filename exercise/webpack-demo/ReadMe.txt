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