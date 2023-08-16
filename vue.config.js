// eslint-disable-next-line
const fs = require('fs')
// eslint-disable-next-line
const path = require('path')

module.exports = {
	publicPath: '',
	configureWebpack: {
		devServer: {
			historyApiFallback: true
		},
		module: {
			rules: []
		}
	},
	chainWebpack: (config) => {
		config.plugin('copy').tap(args => {
			args[0].patterns.push({
				from: path.resolve(__dirname, './node_modules/chartiq/js/thirdparty/'),
				to: path.resolve(__dirname, 'dist/js/thirdparty'),
				toType: 'dir'
			})
			return args
		})
	}
}
