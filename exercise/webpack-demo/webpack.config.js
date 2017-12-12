const path = require('path');
module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [
			{
				// 处理css文件
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader'					
				]	
			}
		]
	}
};