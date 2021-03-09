<template>
	<AdvancedChartWrapper :symbol="'IBM'" :restore="false" />
</template>

<style lang="scss">
@import '../node_modules/chartiq/css/normalize.css';
@import '../node_modules/chartiq/css/page-defaults.css';
@import '../node_modules/chartiq/css/stx-chart.css'; // Chart API
@import '../node_modules/chartiq/css/chartiq.css'; // Chart UI
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
