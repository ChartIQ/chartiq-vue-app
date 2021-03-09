<template>
	<AdvancedChartComponent
		:config="config"
		:chartInitialized="chartInitialized"
	/>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import AdvancedChartComponent from './AdvancedChartComponent.vue'
import { getCustomConfig } from './resources' // ChartIQ library resources

// @ts-ignore
import { CIQ } from 'chartiq/js/componentUI' // Required for types in chartInitialized

const exampleFeedback = true // set example feedback to see console log

@Component({
	components: {
		AdvancedChartComponent
	}
})
export default class AdvancedWrapper extends Vue {
	@Prop({ type: String, default: '' }) symbol!: string
	@Prop({ type: String, default: '_advanced-chart' }) chartId!: string
	@Prop({ type: Boolean, default: true }) restore!: boolean

	@Prop({ type: Function, default: ({}) => {} }) onChartReady!: Function

	config: any

	constructor() {
		super()

		const { symbol, chartId, onChartReady, restore } = this
		this.config = getCustomConfig({ symbol, chartId, onChartReady, restore })
	}

	chartInitialized({
		chartEngine,
		uiContext,
		config
	}: {
		chartEngine: CIQ.ChartEngine
		uiContext: CIQ.UI.Context
		config: any
	}) {
		// Methods for capturing state changes in chart engine and UI
		if (exampleFeedback) {
			// Channel subscribe
			const { channels } = config
			const channelSubscribe = CIQ.UI.BaseComponent.prototype.channelSubscribe
			channelSubscribe(
				channels.breakpoint,
				(value: any) => {
					console.log('channels.breakpoint', value)
				},
				chartEngine
			)

			// Create layout listener, see parameters at https://documentation.chartiq.com/global.html#layoutEventListener
			uiContext.stx.addEventListener('layout', ({ layout }: any) => {
				console.log('layout changed', layout)
			})
		}
		// Simulate L2 data using https://documentation.chartiq.com/CIQ.ChartEngine.html#updateCurrentMarketData
		// Requires import 'chartiq/examples/feeds/L2_simulator'
		// CIQ.simulateL2({ stx: this.state.stx, onInterval: 1000, onTrade: true })
	}
}
</script>
