// eslint-disable-next-line
const fs = require('fs')
// eslint-disable-next-line
const path = require('path')
const webpack = require('webpack')

const npmDir = path.join(__dirname, 'node_modules', '@chartiq', 'core')
const tarDir = path.join(__dirname, 'node_modules', 'chartiq', 'js')
const isNpm = fs.existsSync(npmDir)
const isTar = !isNpm && fs.existsSync(tarDir)
const chartiqDir = path.join(isNpm ? npmDir : isTar ? tarDir : __dirname, '../')
const coreDir = isNpm ? npmDir : chartiqDir
const resolvedPaths = [
	path.join(chartiqDir, 'technical-analysis'),
	path.join(coreDir),
	path.join(chartiqDir, 'component-ui'),
	path.join(chartiqDir, 'web-components'),
	path.join(chartiqDir, 'active-trader'),
	path.join(chartiqDir, 'crossplot'),
	path.join(chartiqDir, 'gonogo'),
	path.join(chartiqDir, 'institutional'),
	path.join(chartiqDir, 'scriptiq'),
	path.join(chartiqDir, 'trading-central'),
	path.join(chartiqDir, 'visual-earnings'),
	path.join(chartiqDir, 'chart2music'),
	path.join(chartiqDir)
]
const keyFileDir = process.env.KEY_FILE_DIR
if (isNpm && !keyFileDir)
	console.log(
		"Environment variable 'KEY_FILE_DIR' not set; you'll need to override or not use alias 'keyDir' when importing keyfile."
	)

module.exports = {
	publicPath: '',
	configureWebpack: {
		devtool: 'source-map',
		devServer: {
			historyApiFallback: true
		},
		resolve: {
			alias: {
				keyDir: path.resolve(isNpm ? keyFileDir : chartiqDir),
				chartiq: resolvedPaths
			}
		},
		module: {
			rules: []
		},
		// To avoid warnings Feature flag __VUE_PROD_HYDRATION_MISMATCH_DETAILS__ is not explicitly defined. You are running the esm-bundler build of Vue,
		// which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.
		plugins: [
			new webpack.DefinePlugin({
				__VUE_PROD_HYDRATION_MISMATCH_DETAILS__: JSON.stringify(false)
			})
		]
	},
	chainWebpack: (config) => {
		config.module
			.rule('vue')
			.use('vue-loader')
			.loader('vue-loader')
			.tap((options) => {
				options.compilerOptions = {
					...options.compilerOptions,
					isCustomElement: (tag) => {
						return tag.startsWith('cq-')
					}
				}
				return options
			})
		config.plugin('copy').tap((args) => {
			args[0].patterns.push({
				from: path.resolve(__dirname, coreDir, 'js/thirdparty'),
				to: path.resolve(__dirname, 'dist/js/thirdparty'),
				toType: 'dir'
			})
			return args
		})
	}
}
