1. 工程功能：创建一个名为webpack-numbers的小library
2. library的打包目标：
不打包 lodash（依赖的第三方模块），而是使用 externals 来 require 用户加载好的 lodash。
设置 library 的名称为 webpack-numbers.
将 library 暴露为一个名为 webpackNumbers的变量。
能够访问其他 Node.js 中的 library。
此外，用户应该能够通过以下方式访问 library：
ES2015 模块。例如 import webpackNumbers from 'webpack-numbers'。
CommonJS 模块。例如 require('webpack-numbers').
全局变量，当通过 script 脚本引入时
3. external属性
打包library时在package.json中指定该属性（library依赖的第三方），这样在打包时就会将它排除。当用户要使用该library时，需要在用户的工程中使用peerDependencies来指定该插件的依赖
4. libraryTarget，指定暴露的目标属性，可以以不同的方式使用library
遍历：作为一个全局变量，通过 script 标签来访问（libraryTarget:'var'）。默认值。
this：通过 this 对象访问（libraryTarget:'this'）。
window：通过 window 对象访问，在浏览器中（libraryTarget:'window'）。
UMD：在 AMD 或 CommonJS 的 require 之后可访问（libraryTarget:'umd'）。
5.在package.json中使用main字段，指定生成bundle的文件路径。main字段是一个模块id，是程序的主入口。如果包名为foo，当用户安装并用require('foo')使用时，主模块exports出的对象就会被返回。一般来说，只有一个主script。
https://docs.npmjs.com/files/package.json#main
然后，可以发布到npm上。https://docs.npmjs.com/getting-started/publishing-npm-packages


peerDependencies：https://nodejs.org/en/blog/npm/peer-dependencies/================
1. 如果包依赖request v2和some-other-library，但是some-other-library依赖request v1，就会有
|———request@2.12.0
|___some-other-libray@1.2.3
   |
  |___request@1.9.9
2. 如果一个插件包需要和另一个host包一起使用，即使它并不是直接使用那个host包。更重要的是插件需要和特定版本的host包一起使用。
插件的依赖管理：
* 有些插件并不真正依赖于它的host包，所以即使把host包作为依赖，也不会被使用到。因此，可以将让插件使用一个可兼容的host包
* 即使有些插件有直接依赖，但是由于host包提供了功能api，那么在package.json中定义插件的依赖，也会导致依赖树上有多个host包的拷贝。
比如wiston-mail 0.2.3在依赖中标明需要winston 0.5.x。而作为开发人员，你想要最新的包，因此，你在依赖中标明
{
  "dependencies": {
    "winston": "0.6.2",
    "winston-mail": "0.2.3"
  }
}
这样，就会出现如下依赖树：
├── winston@0.6.2
└─┬ winston-mail@0.2.3
  └── winston@0.5.11
有两个winston，这并不是我们想要的。
解决方案：peer dependencies
它的意思是：当作为v1.2.x版本host包的插件时，该插件才可以使用。因此，如果要使用该插件，请确保有一个可兼容的host包。这个关系就是peer dependencies