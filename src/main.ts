/**
 * The following are two implementations of charting applications. The first one includes several examples of
 * different types of chart components and is meant to showcase features of the ChartIQ library. It is using routing and will
 * require server support for browser history–based routing.
 *
 * The second one (commented out) is an example of an application based on a single "Advanced Chart" template.
 */
import { createApp } from 'vue'
//import { createApp } from 'vue/dist/vue.esm-bundler.js';
import router from './router'

/**
 * This import is used for automated testing of the chart library. It is not needed
 * for customer projects.
 */
import './testInitialization'

import AppAllTemplates from './App.vue'

const app = createApp(AppAllTemplates)

app.mixin({
	mounted() {
		window.onpopstate = function () {
			location.reload()
		}
	}
})

// Workaround to be able to use the HTML template element in Vue template
app.component('template-placeholder', {
	render(this: any): any {
		return this.$slots.default ? this.$slots.default() : null
	}
})

app.use(router)

app.mount('#app')

/*

import Vue from 'vue'

import AppAdvancedChartOnly from './AppAdvancedChartOnly.vue'

Vue.config.productionTip = false

Vue.config.ignoredElements = [/^cq-.*$/]

// Workaround to be able to use the HTML template element in Vue template
Vue.component('template-placeholder', {
	render: function (createElement) {
		return createElement('template', this.$slots.default)
	}
})

new Vue({
	render: (h) => h(AppAdvancedChartOnly)
}).$mount('#app')

*/
