import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
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
		// Pick up properties from the query string and pass them to the AdvancedChart component
		props: (route: any) => ({
			symbol: route.query.symbol
		})
	},
	// Enable ActiveTraderWorkstation
	// {
	// 	path: '/active-trader',
	// 	name: 'Active Trader',
	// 	component: () =>
	// 		import(
	// 			/* webpackChunkName: "active-trader" */ '../containers/ActiveTraderWorkstation/index.vue'
	// 		)
	// },
	{
		path: '/multi-chart',
		name: 'Multi Chart',
		component: () =>
			import(
				/* webpackChunkName: "multi-chart" */ '../containers/MultiChart/index.vue'
			)
	},
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

const router = createRouter({
	history: createWebHistory(),
	routes
})

export default router
