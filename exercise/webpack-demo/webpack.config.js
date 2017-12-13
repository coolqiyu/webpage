const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	// entry: './src/index.js',
	entry: {
		app: './src/index.js',
		print: './src/print.js'
	},
	output: {
		// filename: 'bundle.js',
		// 分离入口，生成多个bundle，用[name]
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/'
	},
	//loaders
	module: {
		rules: [
			{
				// 处理css文件
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader'					
				]	
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: [
					'file-loader'
				]
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				use: [
					'file-loader'
				]
			},
			{
				test: /\.xml$/,
				use: [
					'xml-loader'
				]
			}
		]
	},
	// 将编译后的代码映射回原始源代码
	// 不用的话，发生错误只会显示bundle中的代码
	devtool: 'inline-source-map',
	//告诉webpack-dev-server在哪寻找文件，dist下的文件作为可访问的
	devServer: {
		contentBase: './dist'
	},
	plugins: [
		// 在html中自动更新对output的js的引用，动态更新html中的bundle
		new HtmlWebpackPlugin({
			title: 'Output Management'
		}),
		// 会清理dist文件夹下没有被用到的文件
		new CleanWebpackPlugin(['dist'])
	],
	
};