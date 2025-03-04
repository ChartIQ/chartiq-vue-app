// eslint-disable-next-line
const fs = require('fs')
// eslint-disable-next-line
const path = require('path')

const npmDir = path.join(__dirname, "node_modules", "@chartiq", "core");
const tarDir = path.join(__dirname, "node_modules", "chartiq", "js");
const isNpm = fs.existsSync(npmDir);
const isTar = !isNpm && fs.existsSync(tarDir);
const chartiqDir = path.join(isNpm ? npmDir : isTar ? tarDir : __dirname, "../");
const coreDir = isNpm ? npmDir : chartiqDir;
const resolvedPaths = [
	path.join(chartiqDir, "technical-analysis"),
	path.join(coreDir),
	path.join(chartiqDir, "component-ui"),
	path.join(chartiqDir, "web-components"),
	path.join(chartiqDir, "active-trader"),
	path.join(chartiqDir, "crossplot"),			 
	path.join(chartiqDir, "gonogo"),
	path.join(chartiqDir, "institutional"),
	path.join(chartiqDir, "scriptiq"),
	path.join(chartiqDir, "trading-central"),
	path.join(chartiqDir, "visual-earnings"),
	path.join(chartiqDir)
];
const keyFileDir = process.env.KEY_FILE_DIR;
if (isNpm && !keyFileDir)
	console.log(
		"Environment variable 'KEY_FILE_DIR' not set; you'll need to override or not use alias 'keyDir' when importing keyfile."
	);

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
				from: path.resolve(__dirname, coreDir, 'js/thirdparty'),
				to: path.resolve(__dirname, 'dist/js/thirdparty'),
				toType: 'dir'
			})
			return args
		})
	},
	configureWebpack: {
		resolve: {
			alias: {
				keyDir: path.resolve(isNpm ? keyFileDir : chartiqDir),
				chartiq: resolvedPaths
			}
		}
	}
}
