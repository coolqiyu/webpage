var path = require('path');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'webpack-number.js',
		//通过指定library属性来暴露library，使得它能兼容不同的环境
		//如CommonJS, AMD，Nodejs等中使用
		library: 'webpackNumbers',
		//指定暴露的方式
		libraryTarget: 'umd'
	},
	//配置externals
	//意味着你的 library 需要一个名为 lodash 的依赖，这个依赖在用户的环境中必须存在且可用
	externals: {
		lodash: {
			commonjs: 'lodash',
			commonjs2: 'lodash',
			amd: 'lodash',
			root: '_'
		}
	}
	//如果这个libray中会调用多个第三方的依赖，因此externals中需要写多个
	//无法直接写目录地址，需要一个个写或用正则来指定这些依赖
	// externals: [
	// 	'library/one',
	// 	'library/two',
	// 	/^library\/.+$/
	// ]
}