// Required imports from chartiq for advanced chart

// @ts-ignore
import { CIQ } from 'chartiq/js/chartiq'
// @ts-ignore
import 'chartiq/js/advanced'

import 'chartiq/js/addOns'
import 'chartiq/js/components'

// Symbol mapping to market definition
import 'chartiq/examples/markets/marketDefinitionsSample'
import 'chartiq/examples/markets/marketSymbologySample'

import 'chartiq/examples/feeds/symbolLookupChartIQ'

import 'chartiq/examples/translations/translationSample'

// Event Markers
// @ts-ignore
import marker from 'chartiq/examples/markers/markersSample.js'
import 'chartiq/examples/markers/tradeAnalyticsSample'
import 'chartiq/examples/markers/videoSample'

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

import 'chartiq/plugins/studybrowser'

// Trading Central: Technical Insights
// import 'chartiq/plugins/technicalinsights/components'

// TFC plugin
import 'chartiq/plugins/tfc/tfc-loader'
import 'chartiq/plugins/tfc/tfc-demo' /* if using demo account class */

// Time Span Events
// import 'chartiq/plugins/timespanevent/timespanevent'
// import 'chartiq/plugins/timespanevent/examples/timeSpanEventSample' /* if using sample */

// Trading Central: Analyst Views
// import 'chartiq/plugins/analystviews/components'

// Visual Earnings
// import 'chartiq/plugins/visualearnings/visualearnings'

//  Uncomment the following for the L2 simulator (required for the crypto sample and MarketDepth addOn)
// import 'chartiq/examples/feeds/L2_simulator' /* for use with cryptoiq */

function getConfig() {
	const config = getDefaultConfig({
		quoteFeed,
		// forecastQuoteFeed, // uncomment to enable forecast quote feed simulator
		markerFeed: marker.MarkersSample,
		scrollStyle: PerfectScrollbar,
		emojiPicker: EmojiPopover
	})

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
		signalIQ
		// technicalInsights: {
		// 	...technicalInsights,
		// 	uid: ''
		// },
		// tfc,
		// timeSpanEventPanel,
		// visualEarnings
	}

	return config
}

export { CIQ, getConfig }
