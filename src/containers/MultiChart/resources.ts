import { CIQ } from 'chartiq/js/standard'
import 'chartiq/js/addOns'
// @ts-ignore
import quoteFeed from 'chartiq/examples/feeds/quoteFeedSimulator'
import getDefaultConfig from 'chartiq/js/defaultConfiguration'

// @ts-ignore
import getLicenseKey from 'keyDir/key'
getLicenseKey(CIQ)

// Define a type for resources object
interface Resources {
	quoteFeed?: any
}

// Creates a complete customised configuration object
function getConfig(resources: Resources = {}): any {
	if (!resources.quoteFeed && resources.quoteFeed !== null) {
		resources.quoteFeed = quoteFeed
	}
	return getDefaultConfig(resources)
}

// Creates a complete customised configuration object
interface CustomConfigParams {
	chartId?: string
	symbol?: {
		symbol: string
		name: string
		exchDisp: string
	}
	onChartReady?: Function
	resources?: Resources
}

function getCustomConfig({
	chartId,
	symbol,
	onChartReady,
	resources
}: CustomConfigParams = {}): any {
	const config = getConfig(resources)

	config.chartId = chartId || '_multi-chart'
	config.initialSymbol = symbol || {
		symbol: 'AAPL',
		name: 'Apple Inc',
		exchDisp: 'NASDAQ'
	}

	config.onChartReady = onChartReady

	// Disable crossSection plugins by default
	// It can throw errors if when loaded with time series charts.
	config.plugins.crossSection = null

	return config
}

export { getConfig, getCustomConfig }
