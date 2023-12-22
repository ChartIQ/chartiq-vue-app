<template>
	<cq-context ref="container">
		<cq-chart-instructions role="contentinfo"></cq-chart-instructions>

		<!--  Begin Navbar -->
		<div class="ciq-nav full-screen-hide" role="navigation">
			<!-- enables the more button when in break-sm mode -->
			<div class="sidenav-toggle ciq-toggles">
				<cq-toggle
					class="ciq-sidenav"
					member="sidenav"
					toggles="sidenavOn,sidenavOff"
					toggle-classes="active,"
					reader="More Options"
					tooltip="More"
					icon="morenav"
				></cq-toggle>
			</div>

			<cq-toggle
				class="ciq-lookup-icon"
				config="symbolsearch"
				reader="Symbol Search"
				tooltip="Symbol Search"
				icon="search"
				help-id="search_symbol_lookup"
			></cq-toggle>
			<cq-toggle
				class="ciq-comparison-icon"
				config="symbolsearch"
				reader="Add Comparison"
				tooltip="Add Comparison"
				icon="compare"
				help-id="add_comparison"
				comparison="true"
			></cq-toggle>

			<!-- any entry in this div will be shown in the side navigation bar in break-sm mode -->
			<cq-side-nav cq-on="sidenavOn">
				<div class="icon-toggles ciq-toggles">
					<cq-toggle
						class="ciq-draw"
						member="drawing"
						reader="Draw"
						tooltip="Draw"
						icon="draw"
						help-id="drawing_tools_toggle"
					></cq-toggle>
					<cq-toggle
						class="ciq-CH"
						config="crosshair"
						reader="Crosshair"
						tooltip="Crosshair (Alt + \)"
						icon="crosshair"
					></cq-toggle>
					<cq-menu
						class="nav-dropdown toggle-options"
						reader="Crosshair Options"
						config="crosshair"
					></cq-menu>
					<cq-toggle
						class="ciq-HU"
						feature="tooltip"
						config="info"
						reader="Info"
						tooltip="Info"
						icon="info"
					></cq-toggle>
					<cq-menu
						feature="tooltip"
						class="nav-dropdown toggle-options"
						reader="Info Options"
						config="info"
					></cq-menu>
					<cq-toggle
						class="ciq-DT"
						feature="tableview"
						member="tableView"
						reader="Table View"
						tooltip="Table View"
						icon="tableview"
					></cq-toggle>
				</div>
			</cq-side-nav>

			<div class="ciq-menu-section">
				<div class="ciq-dropdowns">
					<cq-menu
						class="nav-dropdown ciq-display"
						reader="Display"
						config="display"
						binding="Layout.chartType"
						icon
						help-id="display_dropdown"
						tooltip
					></cq-menu>
					<cq-menu
						class="nav-dropdown ciq-period"
						reader="Periodicity"
						config="period"
						text
						binding="Layout.periodicity"
					></cq-menu>
					<cq-menu
						class="nav-dropdown ciq-views alignright-md alignright-sm"
						config="views"
						text="Views"
						icon="views"
						responsive
						tooltip="Views"
					></cq-menu>
					<cq-menu
						class="nav-dropdown ciq-studies alignright"
						cq-focus="input"
						config="studies"
						text="Studies"
						icon="studies"
						responsive
						tooltip="Studies"
					></cq-menu>
					<cq-menu
						class="nav-dropdown ciq-markers alignright"
						config="markers"
						text="Events"
						icon="events"
						responsive
						tooltip="Events"
					></cq-menu>
					<cq-menu
						class="nav-dropdown ciq-preferences alignright"
						reader="Preferences"
						config="preferences"
						icon="preferences"
						tooltip="Preferences"
					></cq-menu>
				</div>
				<div class="ciq-toggles"></div>
			</div>
		</div>
		<!-- End Navbar -->

		<div class="ciq-chart-area" role="main">
			<div class="ciq-chart">
				<cq-message-toaster
					default-display-time="10"
					default-transition="slide"
					default-position="top"
				></cq-message-toaster>

				<cq-palette-dock>
					<div class="palette-dock-container">
						<cq-drawing-palette
							class="palette-drawing grid palette-hide"
							docked="true"
							orientation="vertical"
							min-height="300"
							cq-drawing-edit="none"
							cq-keystroke-claim
						></cq-drawing-palette>
						<cq-drawing-settings
							class="palette-settings"
							docked="true"
							hide="true"
							orientation="horizontal"
							min-height="40"
							cq-drawing-edit="none"
						></cq-drawing-settings>
					</div>
				</cq-palette-dock>

				<div class="chartContainer">
					<!-- tooltip markup is required only if addon tooltip is used and customization is required -->
					<table class="hu-tooltip">
						<caption>
							Tooltip
						</caption>
						<tbody>
							<tr hu-tooltip-field="" class="hu-tooltip-sr-only">
								<th>Field</th>
								<th>Value</th>
							</tr>
							<tr hu-tooltip-field="DT">
								<td class="hu-tooltip-name">Date/Time</td>
								<td class="hu-tooltip-value"></td>
							</tr>
							<tr hu-tooltip-field="Close">
								<td class="hu-tooltip-name"></td>
								<td class="hu-tooltip-value"></td>
							</tr>
						</tbody>
					</table>

					<cq-chart-title
						cq-marker
						cq-browser-tab
						cq-activate-symbol-search-on-click
					></cq-chart-title>

					<!-- Full-screen icons -->
					<cq-marker class="chart-control-group full-screen-show">
						<cq-toggle
							class="ciq-lookup-icon"
							config="symbolsearch"
							reader="Symbol Search"
							tooltip="Symbol Search"
							icon="search"
							help-id="search_symbol_lookup"
						></cq-toggle>
						<cq-toggle
							class="ciq-comparison-icon"
							config="symbolsearch"
							reader="Add Comparison"
							tooltip="Add Comparison"
							icon="compare"
							help-id="add_comparison"
							comparison="true"
						></cq-toggle>
						<cq-toggle
							class="ciq-draw"
							member="drawing"
							reader="Draw"
							icon="draw"
							tooltip="Draw"
							help-id="drawing_tools_toggle"
						></cq-toggle>
						<cq-toggle
							class="ciq-CH"
							config="crosshair"
							reader="Crosshair"
							icon="crosshair"
							tooltip="Crosshair (Alt + \)"
						></cq-toggle>
						<cq-toggle
							class="ciq-DT"
							feature="tableview"
							member="tableView"
							reader="Table View"
							icon="tableview"
							tooltip="Table View"
						></cq-toggle>
						<cq-menu
							class="nav-dropdown ciq-period full-screen"
							config="period"
							text
							binding="Layout.periodicity"
						></cq-menu>
					</cq-marker>

					<cq-study-legend
						class="hovershow"
						marker-label="Signals"
						filter="signal"
						cq-marker
					></cq-study-legend>
					<cq-study-legend
						class="hovershow"
						marker-label="Plots"
						clone-to-panel
						filter="panel"
						button-remove="true"
						series="true"
						cq-marker
					></cq-study-legend>

					<cq-loader></cq-loader>
				</div>
			</div>
		</div>

		<!-- Markers/Events -->
		<cq-abstract-marker cq-type="helicopter"></cq-abstract-marker>

		<!-- Attribution component -->
		<cq-attribution></cq-attribution>

		<!-- Begin Footer -->
		<div role="complementary" class="ciq-footer full-screen-hide">
			<cq-share-button
				class="ciq-share-button bottom"
				reader="Share Chart"
				icon="share"
				tooltip="Share"
			></cq-share-button>
			<cq-toggle
				feature="shortcuts"
				member="session.shortcuts"
				class="ciq-shortcut-button bottom"
				stxtap="Layout.showShortcuts()"
				reader="Toggle Shortcut Legend"
				icon="shortcuts"
				tooltip="Shortcuts"
			></cq-toggle>
			<cq-toggle
				feature="help"
				member="session.help"
				class="ciq-help-button bottom"
				stxtap="Layout.toggleHelp()"
				reader="Toggle Interactive Help"
				icon="help"
				tooltip="Interactive Help"
			></cq-toggle>
			<cq-show-range
				config="range"
				role="group"
				aria-labelledby="label_showRange"
			></cq-show-range>
		</div>
		<!-- End Footer -->

		<cq-dialogs>
			<cq-dialog>
				<cq-drawing-context></cq-drawing-context>
			</cq-dialog>

			<cq-dialog>
				<cq-study-context></cq-study-context>
			</cq-dialog>
		</cq-dialogs>

		<cq-side-panel></cq-side-panel>

		<ShortcutDialogComponent
			v-if="dialog == 'drawingTools'"
			:getDrawingTools="getDrawingTools"
			:setDrawingToolShortcuts="setDrawingToolShortcuts"
			:closeDialog="closeDialog"
		/>
	</cq-context>
</template>

<style lang="scss">
cq-dialog {
	top: 0;
}
</style>

<script lang="ts">
import { Component, Prop, Provide, Ref, Vue } from 'vue-property-decorator'
// @ts-ignore
import { CIQ } from 'chartiq/js/componentUI'
import { getConfig } from './resources' // ChartIQ library resources
import ShortcutDialogComponent from './ShortcutDialog.vue'

@Component({
	components: {
		ShortcutDialogComponent
	}
})
export default class CustomChartComponent extends Vue {
	@Prop({ default: () => getConfig() }) config!: any
	@Prop({ type: String, default: '' }) symbol!: string
	@Prop({ type: String, default: '_custom-chart' }) chartId!: string
	@Prop({ type: Function, default: ({}) => {} }) chartInitialized!: Function

	@Ref('container') container!: HTMLElement

	@Provide() dialog = ''
	drawingToolDetails = {
		elliottwave: `
      The Elliott Wave Theory was developed by Ralph Nelson Elliott to describe...
    `.trim()
	}

	stx: CIQ.ChartEngine | undefined
	uiContext: CIQ.UI.Context | undefined
	private store = new CIQ.NameValueStore()
	private symbolStorageName = 'recentSymbols'
	private shortcutStorageName = 'customDrawingToolShortcuts'

	mounted() {
		const config = this.config
		config.chartId = this.chartId
		config.initialSymbol = this.symbol || {
			symbol: 'AAPL',
			name: 'Apple Inc',
			exchDisp: 'NASDAQ'
		}

		// Delay the call to createChartAndUI so any other AdvancedChart components on the page
		// have a chance to call portalizeContextDialogs
		window.setTimeout(() => {
			this.createChartAndUI(config)
		}, 0)
	}

	beforeDestroy() {
		// Destroy the ChartEngine instance when unloading the component.
		// This will stop internal processes such as quotefeed polling.
		this.stx?.destroy()
	}

	async createChartAndUI(config: any) {
		const chart = new CIQ.UI.Chart()
		const container = this.container

		const uiContext = chart.createChartAndUI({
			container,
			config
		})
		this.uiContext = uiContext
		this.stx = uiContext.stx

		await this.updateCustomization(config)

		await this.postInit(container)
	}

	postInit(container: HTMLElement) {
		this.addPreferencesHelper()
		portalizeContextDialogs(container)

		const isForecasting = (symbol: string) => /_fcst$/.test(symbol)
		this.stx?.addEventListener(
			'symbolChange',
			({ symbol, symbolObject, action }: { [x: string]: any }) => {
				if (
					!isForecasting(symbol) &&
					(action === 'master' || action === 'add-series')
				) {
					this.updateSymbolStore(symbol, symbolObject)
				}
			}
		)
	}

	async updateCustomization(config: any): Promise<void> {
		// currently only tool shortcuts are customized locally
		const shortcuts = await this.getValue(this.shortcutStorageName)
		if (!shortcuts || !Object.keys(shortcuts).length) {
			return
		}
		config.drawingTools.forEach((item: any) => {
			item.shortcut = shortcuts[item.tool] || ''
		})
	}

	async updateSymbolStore(symbol: string, { name = '', exchDisp = '' } = {}) {
		const list = await this.getRecentSymbols()
		const count = ((list[symbol] && list[symbol].count) || 0) + 1
		list[symbol] = { symbol, name, exchDisp, count, last: +new Date() }
		return this.updateRecentSymbols(list)
	}

	@Provide() getRecentSymbols(): Promise<
		Record<
			string,
			{
				symbol: string
				name: string
				exchDisp: string
				last: number
				count: number
			}
		>
	> {
		return this.getValue(this.symbolStorageName)
	}

	updateRecentSymbols(value: any) {
		return this.setValue(this.symbolStorageName, value)
	}

	getValue(name: string): Promise<any> {
		return new Promise((resolve, reject) => {
			this.store.get(name, (err: any, value: any) => {
				if (err) return reject(err)
				resolve(value || {})
			})
		})
	}

	setValue(name: string, value: any): Promise<any> {
		return new Promise((resolve, reject) => {
			this.store.set(name, value, (err: any) => {
				if (err) return reject(err)
				resolve(value)
			})
		})
	}

	addPreferencesHelper() {
		const layoutHelper = this.uiContext?.getAdvertised('Layout')
		layoutHelper.openPreferences = (node: any, type: any) =>
			this.openDialog(type)
	}

	@Provide() getDrawingTools(): {
		label: string
		tool: string
		shortcut: string
		detail: string
	}[] {
		const { drawingToolDetails: details } = this

		return this.uiContext?.config.drawingTools.map(
			({ label, shortcut, tool }: { [x: string]: any }) => {
				return {
					label,
					tool,
					shortcut: shortcut || '',
					// @ts-ignore
					detail: details[tool]
				}
			}
		)
	}

	@Provide() setDrawingToolShortcuts(shortcuts: any) {
		if (!this.uiContext) return
		const { config, topNode } = this.uiContext

		config.drawingTools.forEach((item: any) => {
			item.shortcut = shortcuts[item.tool]
		})

		this.setValue(this.shortcutStorageName, shortcuts)

		rebuildDrawingPalette(topNode)
	}

	@Provide() openDialog(name: string) {
		this.dialog = name
	}

	closeDialog() {
		this.dialog = ''
	}
}

/**
 * For applications that have more then one chart, keep single dialog of the same type
 * and move it outside context node to be shared by all chart components
 */
function portalizeContextDialogs(container: HTMLElement) {
	container.querySelectorAll('cq-dialog').forEach((dialog) => {
		dialog.remove()
		if (!dialogPortalized(dialog)) {
			document.body.appendChild(dialog)
		}
	})
}

function dialogPortalized(el: Element) {
	if (!el.firstChild) {
		throw new Error('Element has no children')
	}

	const tag = el.firstChild.nodeName.toLowerCase()
	return Array.from(document.querySelectorAll(tag)).some(
		(el) => !el.closest('cq-context')
	)
}

function rebuildDrawingPalette(el: HTMLElement) {
	const qs = (path: string) => el.querySelector(path) as Element
	const container = qs('.palette-dock-container')
	const palette = qs('cq-drawing-palette')
	const newPalette = document.createElement('cq-drawing-palette')

	newPalette.className = palette.className
	newPalette.setAttribute('docked', palette.getAttribute('docked') as string)
	newPalette.setAttribute(
		'orientation',
		palette.getAttribute('orientation') as string
	)
	newPalette.setAttribute(
		'min-height',
		palette.getAttribute('min-height') as string
	)
	const noOp = () => {}
	// @ts-ignore
	palette.keyStroke = palette.handleMessage = noOp
	palette.remove()

	container.appendChild(newPalette)
}
</script>
