<template>
	<div>
		<div class="col left">
			<AdvancedChartComponent chartId="chart0" symbol="AAPL" />
		</div>
		<div class="col right">
			<AdvancedChartComponent chartId="chart1" symbol="MSFT" />
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import AdvancedChartComponent from '../AdvancedChart/index.vue'

@Component({
	components: {
		AdvancedChartComponent
	}
})
export default class Multi extends Vue {}
</script>

<style lang="scss" scoped>
.left,
.right {
	height: 100%;
	position: absolute;
	width: 50%;
}
.right {
	left: 50%;
}
</style>
