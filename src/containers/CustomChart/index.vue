<template>
	<div id="Custom">
		<div class="custom-chart-info">
			<h2>Custom chart</h2>

			<div>
				...is a customization of the Advanced Chart component template,
				featuring the addition of:
				<ul>
					<li>
						A dialog box implemented in Vue to add
						<a
							href="https://documentation.chartiq.com/tutorial-Navigation.html#drawing_palette_keyboard_shortcuts"
							target="shortcuts"
							>keystroke shortcuts</a
						>
						to the chart drawing tools and display information about the tools.
						<br /><span class="instruction"
							>Select Drawing Tools from the Preferences (cog wheel) menu.</span
						>
					</li>
				</ul>
			</div>
		</div>
		<div class="chart-wrapper">
			<CustomChartComponent />
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import CustomChartComponent from './CustomChartComponent.vue'

@Component({
	components: {
		CustomChartComponent
	}
})
export default class Custom extends Vue {}
</script>

<style lang="scss" scoped>
.custom-chart-info {
	user-select: text;
	padding: 8px 14px;
	font-size: 0.8rem;
	line-height: 1.5;
	display: flex;
	color: #000;

	h2 {
		font: 600 1.2rem Helvetica, sans-serif;
		text-transform: uppercase;
		letter-spacing: 6px;
		margin: 0 14px 8px 3px;
		white-space: nowrap;
		color: #398dff;
	}

	ul {
		margin: 0;
		padding: 0px 16px;
	}

	li {
		margin-top: 4px;
	}

	div {
		width: 65%;
	}

	.instruction {
		font-style: italic;
	}
}

.chart-wrapper {
	position: relative;
	margin: 10px;
	height: 65vh;
}
</style>
