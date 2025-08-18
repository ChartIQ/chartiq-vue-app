<template>
	<AdvancedChartComponent
		:config="config"
		:resources="resources"
		:chartInitialized="initialized"
		:symbol="symbol"
	>
		<slot />
	</AdvancedChartComponent>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AdvancedChartComponent from './AdvancedChartComponent.vue'
import { CIQ } from 'chartiq/js/standard'
import quoteFeedSimulator from 'chartiq/examples/feeds/quoteFeedSimulator'
// @ts-ignore
import PerfectScrollbar from 'chartiq/js/thirdparty/perfect-scrollbar.esm.js'
// @ts-ignore
import EmojiPopover from 'chartiq/js/thirdparty/emoji-popover.es.js'
import marker from 'chartiq/examples/markers/markersSample'

export default defineComponent({
	components: {
		AdvancedChartComponent
	},
	props: {
		config: Object,
		resources: Object,
		chartInitialized: Function,
		symbol: String
	},
	setup(props) {
		const exampleResources = {
			quoteFeed: quoteFeedSimulator,
			markerFeed: marker.MarkersSample,
			scrollStyle: PerfectScrollbar,
			emojiPicker: EmojiPopover
		}

		const getExampleConfig = () => ({
			chartId: '_coreChart',
			// @ts-ignore
			initialSymbol: props.symbol || {
				symbol: 'AAPL',
				name: 'Apple Inc',
				exchDisp: 'NASDAQ'
			},
			onChartReady: () => {}
		})
		const config = { ...getExampleConfig() }
		// @ts-ignore
		const resources = { ...exampleResources, ...props.resources }

		const defaultChartInitialized = ({ chartEngine }: { chartEngine: any }) => {
			Object.assign(window, { stx: chartEngine, CIQ })
		}

		const initialized = props.chartInitialized || defaultChartInitialized

		return {
			// eslint-disable-next-line vue/no-dupe-keys
			config,
			// eslint-disable-next-line vue/no-dupe-keys
			resources,
			initialized
		}
	}
})
</script>
