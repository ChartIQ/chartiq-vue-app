<template>
	<div id="home">
		<h2>ChartIQ Vue Application</h2>

		<p class="description">
			The chartiq-vue-app project is a toolkit of Vue components that you can use to create
			complete charting applications. (Select the application names below to see examples.)
		</p>

		<ul class="top-level">
			<li>
				<h3>
					<router-link to="/technical-analysis">Advanced Chart</router-link>
				</h3>
				<p>
					A full-featured chart with an extensive user interface. Advanced Chart is the
					equivalent of ChartIQ's <i>technical-analysis-chart.html</i> advanced template.
				</p>
			</li>
			<li>
				<h3>
					<router-link to="/multi-chart">Multi-Chart</router-link>
				</h3>
				<p>
					Two advanced chart components side by side in the same document.
				</p>
			</li>
			<li>
				<h3
					v-if="ActiveTraderWorkstationEnabled === false"
					class="disabled-link"
					style="color: #999; margin-bottom: 0"
				>
					Active Trader
				</h3>
				<p
					v-if="ActiveTraderWorkstationEnabled === false"
					class="disabled-link"
					style="font-size: 0.70rem; margin-top: 0; margin-bottom: 0.70rem">
					(To enable this link, uncomment all lines following the
						<code>// Enable ActiveTraderWorkstation</code> comment in the
						<i>router/index.ts</i> file.)
				</p>
				<h3 v-if="ActiveTraderWorkstationEnabled === true">
					<router-link to="/active-trader">Active Trader</router-link>
				</h3>
				<p>
					The advanced chart component enhanced with the following plug-ins:
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
					<router-link to="/custom-chart">Custom Chart</router-link>
				</h3>
				<p>Native Vue components integrated with ChartIQ web components.</p>
			</li>
			<li>
				<h3>
					<router-link to="/hello-world">Hello World</router-link>
				</h3>
				<p>
					A basic chart with no user interface. A great starting point for using the
					ChartIQ API in Vue.
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
