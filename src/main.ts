/**
 * The following are two implementations of charting applications. The first one includes several examples of
 * different types of chart components and it meant to showcase features of the ChartIQ library. It is using routing and will
 * require server support for browser history based routing.
 *
 * The second one (commented out) is an example of an application based on a single "Advanced Chart" template.
 */
import Vue from 'vue'
import router from './router'

import AppAllTemplates from './App.vue'

Vue.config.productionTip = false

Vue.config.ignoredElements = [/^cq-.*$/]

// Workaround to be able to use the HTML template element in Vue template
Vue.component('template-placeholder', {
	render: function(createElement) {
		return createElement('template', this.$slots.default)
	}
})

new Vue({
	router,
	render: h => h(AppAllTemplates)
}).$mount('#app')

/*

import Vue from 'vue'

import AppAdvancedChartOnly from './AppAdvancedChartOnly.vue'

Vue.config.productionTip = false

Vue.config.ignoredElements = [/^cq-.*$/]

// Workaround to be able to use the HTML template element in Vue template
Vue.component('template-placeholder', {
	render: function(createElement) {
		return createElement('template', this.$slots.default)
	}
})

new Vue({
	render: h => h(AppAdvancedChartOnly)
}).$mount('#app')

*/
