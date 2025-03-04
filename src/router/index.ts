import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/technical-analysis',
		name: 'Technical Analysis',
		component: () =>
			import(
				/* webpackChunkName: "technical-analysis" */ '../containers/AdvancedChart/index.vue'
			),
		// Pick up properties from the query string and pass it to AdvancedChart component
		props: (route) => ({
			symbol: route.query.symbol,
			restore: route.query.restore !== 'false'
		})
	},
	// Enable ActiveTraderWorkstation
	// {
	//	path: '/active-trader',
	//	name: 'Active Trader',
	//	component: () =>
	//		import(
	//			/* webpackChunkName: "active-trader" */ '../containers/ActiveTraderWorkstation/index.vue'
	//		)
	// },
	{
		path: '/custom-chart',
		name: 'Custom Chart',
		component: () =>
			import(
				/* webpackChunkName: "custom-chart" */ '../containers/CustomChart/index.vue'
			)
	},
	{
		path: '/hello-world',
		name: 'Hello World',
		component: () =>
			import(
				/* webpackChunkName: "hello-world" */ '../containers/HelloWorld/index.vue'
			)
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.VUE_APP_BASE_URL || '/',
	routes
})

export default router
