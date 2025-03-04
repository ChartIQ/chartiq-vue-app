// Required imports from chartiq for advanced chart

// @ts-ignore
import { CIQ } from 'chartiq/js/chartiq'
// @ts-ignore
import 'chartiq/js/advanced'

import 'chartiq/js/addOns'
import 'chartiq/js/components'

import 'chartiq/examples/feeds/symbolLookupChartIQ'

import 'chartiq/examples/translations/translationSample'

// Event Markers
// @ts-ignore
import marker from 'chartiq/examples/markers/markersSample.js'
import 'chartiq/examples/markers/tradeAnalyticsSample'
import 'chartiq/examples/markers/videoSample'

// Symbol mapping to market definition
import 'chartiq/examples/markets/marketDefinitionsSample'
import 'chartiq/examples/markets/marketSymbologySample'
import 'chartiq/examples/markets/timezones.js'

import 'chartiq/js/extras/svgcharts/piechart.js'

// import 'chartiq/examples/help/helpContent.js'

// @ts-ignore
import quoteFeed from 'chartiq/examples/feeds/quoteFeedSimulator.js'

// Uncomment the following for the forecasting simulator (required for the forecasting sample).
// @ts-ignore
// import forecastQuoteFeed from 'chartiq/examples/feeds/quoteFeedForecastSimulator.js'

// @ts-ignore
import PerfectScrollbar from 'chartiq/js/thirdparty/perfect-scrollbar.esm.js'

// @ts-ignore
import EmojiPopover from 'chartiq/js/thirdparty/emoji-popover.es' // required for SignalIQ

// @ts-ignore
import defaultConfig from 'chartiq/js/defaultConfiguration'

// Plugins

// Crypto, L2 Heat Map, Market Depth,
// Important Note. Uncomment the corresponding configuration object below when enabling this plugin.
// import 'chartiq/plugins/activetrader/cryptoiq'

// ScriptIQ
// import 'chartiq/plugins/scriptiq/scriptiq'

// SignalIQ
import 'chartiq/plugins/signaliq/signaliqDialog'
import 'chartiq/plugins/signaliq/signaliq-marker'
import 'chartiq/plugins/signaliq/signaliq-paintbar'

import 'chartiq/plugins/studybrowser'

// Trading Central: Technical Insights
// import 'chartiq/plugins/technicalinsights/components'

// TFC plugin
// Important Note. Uncomment the corresponding configuration object below when enabling this plugin.
// import 'chartiq/plugins/tfc/tfc-loader'
// import 'chartiq/plugins/tfc/tfc-demo' /* if using demo account class */

// Time Span Events
// Important Note. Uncomment the corresponding configuration object below when enabling this plugin.
// import 'chartiq/plugins/timespanevent/timespanevent'
// import 'chartiq/plugins/timespanevent/examples/timeSpanEventSample' /* if using sample */

// Trading Central: Technical Views
// import 'chartiq/plugins/technicalviews/components'

// Visual Earnings
// Important Note. Uncomment the corresponding configuration object below when enabling this plugin.
// import 'chartiq/plugins/visualearnings/visualearnings'

// Uncomment the following for the L2 simulator (required for the crypto sample and MarketDepth addOn)
// import 'chartiq/examples/feeds/L2_simulator' /* for use with cryptoiq */

// @ts-ignore
import getLicenseKey from 'keyDir/key'
getLicenseKey(CIQ)

// Creates a complete customised configuration object
function getConfig() {
	return defaultConfig({
		quoteFeed,
		// forecastQuoteFeed, // uncomment to enable forecast quote feed simulator
		markerFeed: marker.MarkersSample,
		scrollStyle: PerfectScrollbar,
		emojiPicker: EmojiPopover
	})
}

// Creates a complete customised configuration object
function getCustomConfig({
	chartId,
	symbol,
	restore,
	onChartReady
}: {
	chartId?: string
	symbol?: string | { symbol: string; name?: string; exchDisp?: string }
	restore?: boolean
	onChartReady?: (stx: CIQ.ChartEngine) => {}
} = {}) {
	const config = getConfig()

	// Update chart configuration by modifying default configuration
	config.chartId = chartId || '_advanced-chart'
	config.initialSymbol = symbol || {
		symbol: 'AAPL',
		name: 'Apple Inc',
		exchDisp: 'NASDAQ'
	}
	if (typeof restore == 'boolean') config.restore = restore

	// config.quoteFeeds[0].behavior.refreshInterval = 0; // disables quotefeed refresh
	if (onChartReady) config.onChartReady = onChartReady

	config.menuStudiesConfig.excludedStudies = {
		...config.menuStudiesConfig.excludedStudies,
		...{ DoM: true }
	}

	// Select only plugin configurations that needs to be active for this chart
	const {
		/* eslint-disable */
		marketDepth,
		signalIQ,
		studyBrowser,
		crossSection,
		technicalInsights,
		technicalViews,
		tfc,
		timeSpanEventPanel,
		visualEarnings
		/* eslint-enable */
	} = config.plugins
	config.plugins = {
		// marketDepth,
		signalIQ,
		studyBrowser
		// timeSpanEventPanel,
		// visualEarnings
		// technicalViews: {
		//	container: "",
		//	moduleName: "",
		//	channel: "",
		//	toggleMarkup: "",
		//	partner: 0,
		//	...technicalViews,
		//	token: ""
		//  // use for dynamic plugin load
		//  // @ts-ignore // ignore since load isn't defined in ts definition
		// 	// load() {
		// 	//	return import('chartiq/plugins/technicalviews/components')
		// 	// }
		// },
		// technicalInsights: {
		//	container: "",
		//	moduleName: "",
		//	lang: "en",
		//	channel: "",
		//	toggleMarkup: "",
		//	...technicalInsights,
		//	token: "",
		// 	// use for dynamic plugin load
		//  // @ts-ignore // ignore since load isn't defined in ts definition
		// 	// load() {
		//	//	return import('chartiq/plugins/technicalinsights/components')
		//	// }
		// },
		// tfc: {
		// 	...tfc,
		// 	// use for dynamic plugin load
		//  // @ts-ignore // ignore since load isn't defined in ts definition
		// 	// load() {
		// 	//	return Promise.all([
		// 	//		import('chartiq/plugins/tfc/tfc-loader'),
		// 	//		import('chartiq/plugins/tfc/tfc-demo')
		// 	//	])
		// 	// }
		// }
	}

	// Enable / disable addOns
	// config.enabledAddOns.tooltip = false
	// config.enabledAddOns.continuousZoom = true

	return config
}

export { CIQ, getConfig, getCustomConfig }
