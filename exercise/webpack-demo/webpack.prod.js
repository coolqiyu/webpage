const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');
const webpack = require('webpack');

module.exports = merge(common, {
	plugins: [
		new UglifyJSPlugin({
			//为生产环境加一个构建快速的sourcemap，便于调试
			sourceMap: true
		}),
		//定义环境变量
		// new webpack.DefinePlugin({
		// 	'process.env': {
		// 		'NODE_ENV': JSON.stringify('production')
		// 	}
		// })
	]
})