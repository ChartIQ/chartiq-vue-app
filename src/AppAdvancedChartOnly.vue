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
import { defineComponent } from 'vue'
import AdvancedChartWrapper from './containers/AdvancedChart/index.vue'

export default defineComponent({
	components: {
		AdvancedChartWrapper
	}
})
</script>
