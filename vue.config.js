// eslint-disable-next-line
const fs = require('fs')
// eslint-disable-next-line
const path = require('path')

module.exports = {
	publicPath: "",
	configureWebpack: {
		module: {
			rules: [
				/* import.meta support for webpack 4 */
				{
					test: /\.js$/,
					loader: require.resolve('@open-wc/webpack-import-meta-loader')
				}
			]
		}
	},
	chainWebpack: config => {
		config.plugin('copy').tap(args => {
			args[0].push({
				from: path.resolve(__dirname, './node_modules/chartiq/js/thirdparty/'),
				to: path.resolve(__dirname, 'dist/js/thirdparty'),
				toType: 'dir'
			})
			return args
		})
		config.module
			.rule('images')
			/* ChartIQ using cur files so it is important to add file support to config */
			.test(/\.(png|jpe?g|gif|webp|cur)(\?.*)?$/)
			.use('url-loader')
			.tap(options => {
				return options
			})
	}
}
