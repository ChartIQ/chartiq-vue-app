<template>
	<div id="RecentSymbols" ref="host">
		<slot></slot>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Ref, Vue } from 'vue-property-decorator'

@Component({})
export default class RecentSymbolsComponent extends Vue {
	@Prop({ type: Number, default: 1 }) count!: number // how many lookup components needs to connect
	@Prop(Function) getRecentSymbols!: Function

	@Ref('host') hostElement!: HTMLElement

	mounted() {
		const el = this.hostElement
		// eslint-disable-next-line
		const self = this

		function lookupAvailable(cb: (...args: any[]) => void) {
			let cnt = 0
			const callback = (mutationsList: any[], observer: any) => {
				for (const { target } of mutationsList) {
					if (target.nodeName.toLowerCase() === 'cq-lookup') {
						cnt += 1
						if (cnt === self.count) observer.disconnect() // found all elements
						cb(target.parentElement)
					}
				}
			}
			const observer = new MutationObserver(callback)
			const config = { attributes: false, childList: true, subtree: true }
			observer.observe(el, config)
		}

		// START
		lookupAvailable(createRecentTab)

		function createRecentTab(el: Element) {
			const qs = el.querySelector.bind(el)
			const lookupComponent = qs('cq-lookup') as Element & { [x: string]: any }
			const input = qs('cq-lookup-input input') as HTMLInputElement
			const lookupFilters = qs('cq-lookup-filters') as Element
			const allTabs = lookupFilters.querySelector('cq-filter') as Element
			let recentTab: HTMLElement

			let init = false

			input.addEventListener('focus', () => {
				const hasRecentTab = /recent/i.test(lookupFilters.textContent as string)

				if (!hasRecentTab) {
					recentTab = document.createElement('cq-filter')
					recentTab.innerHTML = 'RECENT'
					lookupFilters.insertBefore(recentTab, allTabs)
				}

				recentTab.addEventListener('click', showRecent)

				showRecent()

				if (init) return
				input.addEventListener('keyup', handleChange)
				input.addEventListener('input', handleChange)

				init = true
			})

			function handleChange() {
				if (!input.value) {
					showRecent()
				} else {
					unsetRecent()
				}
			}

			function showRecent() {
				lookupFilters
					.querySelectorAll('cq-filter')
					.forEach(tab => activate(tab, false))
				activate(recentTab)

				self
					.getRecentSymbols()
					.then((list: any[]) =>
						Object.values(list).map(({ symbol, name, exchDisp }) => ({
							display: [symbol, name, exchDisp],
							data: { symbol, name, exchDisp }
						}))
					)
					.then((list: any[]) => {
						lookupComponent.resultList.empty()
						lookupComponent.results(list)
					})
			}

			function unsetRecent() {
				if (recentTab.classList.contains('true')) {
					activate(recentTab, false)
					activate(allTabs)
				}
			}

			function activate(el: Element, value = true) {
				el.classList[value ? 'add' : 'remove']('true')
			}
		}
	}
}
</script>

<style lang="scss" scoped></style>
