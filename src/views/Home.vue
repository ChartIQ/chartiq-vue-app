<template>
	<div id="home">
		<h2>ChartIQ Vue Application</h2>

		<p class="description">
			The chartiq-vue-app project is a toolkit of Vue components. The following
			components create complete charting applications: (Select the component
			names to see the applications.)
		</p>

		<ul class="top-level">
			<li>
				<h3>
					<router-link to="/technical-analysis">AdvancedChart</router-link>
				</h3>
				<p>
					Creates a chart with a full-featured user interface.
					AdvancedChartComponent is the equivalent of ChartIQ's
					technical-analysis-chart.html advanced template.
				</p>
			</li>
			<li>
				<h3>
					<router-link to="/multi-chart">MultiChart</router-link>
				</h3>
				<p>
					Displays two advanced chart components side by side in the same
					document.
				</p>
			</li>
			<li>
				<h3
					v-if="ActiveTraderWorkstationEnabled === false"
					class="disabled-link"
					style="color: #999"
				>
					ActiveTraderWorkstation
					<div>
						(to enable link, uncomment all lines in src direcotry following the
						// Enable ActiveTraderWorkstation)
					</div>
				</h3>
				<h3 v-if="ActiveTraderWorkstationEnabled === true">
					<router-link to="/active-trader">ActiveTraderWorkstation</router-link>
				</h3>
				<p>
					Features the advanced chart component enhanced with the following
					plug-ins:
				</p>
				<ul>
					<li>Trade From Chart</li>
					<li>Order Book</li>
					<li>Trade Book</li>
					<li>Market Depth Chart</li>
				</ul>
			</li>
			<li>
				<h3>
					<router-link to="/custom-chart">CustomChart</router-link>
				</h3>
				<p>Integrates native Vue components with ChartIQ web components.</p>
			</li>
			<li>
				<h3>
					<router-link to="/hello-world">HelloWorld</router-link>
				</h3>
				<p>
					Creates a basic chart with no user interface as a starting point for
					using the ChartIQ API in Vue.
				</p>
			</li>
		</ul>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class Home extends Vue {
	get ActiveTraderWorkstationEnabled(): boolean {
		return (
			this.$router.options.routes?.find(r => r.path === '/active-trader') !==
			undefined
		)
	}
}
</script>

<style lang="scss" scoped>
#home {
	margin: 40px auto;
	display: block;
	font-size: 0.85rem;
	line-height: 1.4;
	width: 600px;
	max-width: 80%;
	user-select: text;
}

h2 {
	margin: 24px 0 4px;
	color: #666;
	font-size: 1.15rem;
}

p {
	margin: 4px 0;
}

h3 {
	margin: 32px 0 8px;
	color: #222;
	font-weight: 500;
}

.top-level {
	margin: 0;
	padding: 0;
	list-style: none;
}

ul {
	a {
		font-weight: 400;
		color: rgb(27, 102, 216);
		text-decoration: none;
		display: inline-block;
		margin-left: 0px;
	}

	ul {
		padding-left: 16px;
		list-style-type: disc;
	}
}

i {
	white-space: nowrap;
}

h3.disabled-link div {
	font-size: 0.8em;
	padding-left: 6p;
	font-weight: normal;
}
</style>
