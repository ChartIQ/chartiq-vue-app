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
import EmojiPopover from 'chartiq/js/thirdparty/emoji-popover.es'

// @ts-ignore
import getDefaultConfig from 'chartiq/js/defaultConfiguration'

// Plugins

// Crypto, L2 Heat Map, Market Depth,
// import 'chartiq/plugins/activetrader/cryptoiq'

// ScriptIQ
// import 'chartiq/plugins/scriptiq/scriptiq'

// SignalIQ
import 'chartiq/plugins/signaliq/signaliqDialog'
import 'chartiq/plugins/signaliq/signaliq-marker'
import 'chartiq/plugins/signaliq/signaliq-paintbar'

// import 'chartiq/plugins/studybrowser'

// TFC plugin
import 'chartiq/plugins/tfc/tfc-loader'
import 'chartiq/plugins/tfc/tfc-demo' /* if using demo account class */

// Time Span Events
// import 'chartiq/plugins/timespanevent/timespanevent'
// import 'chartiq/plugins/timespanevent/examples/timeSpanEventSample' /* if using sample */

// Trading Central: Technical Insights
// import 'chartiq/plugins/technicalinsights/components'

// Trading Central: Technical Views
// import 'chartiq/plugins/technicalviews/components'

// Visual Earnings
// import 'chartiq/plugins/visualearnings/visualearnings'

//  Uncomment the following for the L2 simulator (required for the crypto sample and MarketDepth addOn)
// import 'chartiq/examples/feeds/L2_simulator' /* for use with cryptoiq */
// @ts-ignore
import getLicenseKey from 'keyDir/key'
getLicenseKey(CIQ)

function getConfig() {
	const config = getDefaultConfig({
		quoteFeed,
		// forecastQuoteFeed, // uncomment to enable forecast quote feed simulator
		markerFeed: marker.MarkersSample,
		scrollStyle: PerfectScrollbar,
		emojiPicker: EmojiPopover
	})

	config.menuStudiesConfig.excludedStudies = {
		...config.menuStudiesConfig.excludedStudies,
		...{ DoM: true }
	}

	// Select only plugin configurations that needs to be active for this chart
	const {
		/* eslint-disable */
		marketDepth,
		signalIQ,
		technicalInsights,
		tfc,
		timeSpanEventPanel,
		visualEarnings
		/* eslint-enable */
	} = config.plugins
	config.plugins = {
		// marketDepth,
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
		//	token: ""
		// 	// use for dynamic plugin load
		//  // @ts-ignore // ignore since load isn't defined in ts definition
		// 	// load() {
		// 	//	return import('chartiq/plugins/technicalinsights/components')
		// 	// }
		// },
		// tfc,
		// timeSpanEventPanel,
		// visualEarnings
		signalIQ
	}

	// Inject Drawing Tools menu item
	config.menus.preferences.content = [
		...config.menus.preferences.content,
		{ type: 'separator' },
		{ type: 'heading', label: 'Preferences' },
		{
			type: 'item',
			label: 'Drawing Tools',
			tap: 'Layout.openPreferences',
			value: 'drawingTools'
		}
	]

	return config
}

export { CIQ, getConfig }
