<template>
	<AdvancedChartWrapper :symbol="'IBM'" :restore="false" />
</template>

<style lang="scss">
@import 'chartiq/css/normalize.css';
@import 'chartiq/css/page-defaults.css';
@import 'chartiq/css/stx-chart.css'; // Chart API
@import 'chartiq/css/chartiq.css'; // Chart UI
</style>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import AdvancedChartWrapper from './containers/AdvancedChart/index.vue'

@Component({
	components: {
		AdvancedChartWrapper
	}
})
export default class App extends Vue {}
</script>
