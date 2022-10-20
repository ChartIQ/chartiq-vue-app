<template>
	<cq-context ref="container">
		<cq-color-picker></cq-color-picker>

		<cq-chart-instructions role="contentinfo"></cq-chart-instructions>

		<div class="ciq-nav full-screen-hide" role="navigation">
			<!-- enables the more button when in break-sm mode -->
			<div class="sidenav-toggle ciq-toggles">
				<cq-toggle
					class="ciq-sidenav"
					cq-member="sidenav"
					cq-toggles="sidenavOn,sidenavOff"
					cq-toggle-classes="active,"
					keyboard-navigation="false"
					><span></span>
					<cq-tooltip>More</cq-tooltip>
				</cq-toggle>
			</div>

			<cq-menu class="ciq-search">
				<RecentSymbolsComponent :getRecentSymbols="getRecentSymbols">
					<cq-lookup
						cq-keystroke-claim
						cq-uppercase
						role="search"
						aria-labelledby="mainSymbol"
						label-name="mainSymbol"
						label-text="Main Symbol"
						class="hide-label"
					>
					</cq-lookup>
				</RecentSymbolsComponent>
			</cq-menu>

			<!-- any entry in this div will be shown in the side navigation bar in break-sm mode -->
			<cq-side-nav cq-on="sidenavOn">
				<div class="icon-toggles ciq-toggles">
					<cq-toggle class="ciq-draw" cq-member="drawing">
						<cq-help help-id="drawing_tools_toggle"></cq-help>
						<span></span><cq-tooltip>Draw</cq-tooltip>
					</cq-toggle>
					<cq-info-toggle-dropdown>
						<cq-toggle class="ciq-CH" cq-member="crosshair">
							<span></span>
							<cq-tooltip>Crosshair (Alt + \)</cq-tooltip>
						</cq-toggle>

						<cq-menu class="ciq-menu toggle-options collapse">
							<span></span>
							<cq-menu-dropdown>
								<cq-item cq-member="crosshair"
									>Hide Heads-Up Display<span class="ciq-radio"
										><span></span></span
								></cq-item>
								<cq-item cq-member="headsUp-static"
									>Show Heads-Up Display<span class="ciq-radio"
										><span></span></span
								></cq-item>
							</cq-menu-dropdown>
						</cq-menu>
					</cq-info-toggle-dropdown>

					<cq-info-toggle-dropdown>
						<cq-toggle class="ciq-HU" cq-member="headsUp">
							<span></span>
							<cq-tooltip>Info</cq-tooltip>
						</cq-toggle>

						<cq-menu class="ciq-menu toggle-options collapse tooltip-ui">
							<span></span>
							<cq-menu-dropdown>
								<cq-item cq-member="headsUp-dynamic"
									>Show Dynamic Callout<span class="ciq-radio"
										><span></span></span
								></cq-item>
								<cq-item cq-member="headsUp-floating"
									>Show Tooltip<span class="ciq-radio"><span></span></span
								></cq-item>
							</cq-menu-dropdown>
						</cq-menu>
					</cq-info-toggle-dropdown>
					<cq-toggle
						class="ciq-DT tableview-ui"
						cq-member="tableView"
						role="button"
						aria-pressed="false"
					>
						<span></span>
						<cq-tooltip>Table View</cq-tooltip>
					</cq-toggle>
				</div>
			</cq-side-nav>

			<div class="ciq-menu-section">
				<div class="ciq-dropdowns">
					<cq-menu class="ciq-menu ciq-display collapse">
						<cq-clickable
							cq-tooltip-activator
							stxbind="Layout.chartType"
							ciq-no-icon-text="Display"
						>
							<span ciq-menu-icon="true"></span>
							<cq-tooltip></cq-tooltip>
						</cq-clickable>
						<cq-menu-dropdown>
							<cq-menu-dropdown-section class="chart-types">
								<cq-heading>Chart Types</cq-heading>
								<cq-menu-container cq-name="menuChartStyle"></cq-menu-container>
							</cq-menu-dropdown-section>
							<cq-menu-dropdown-section class="chart-aggregations">
								<cq-separator></cq-separator>
								<cq-heading>Aggregated Types</cq-heading>
								<cq-menu-container
									cq-name="menuChartAggregates"
								></cq-menu-container>
							</cq-menu-dropdown-section>
						</cq-menu-dropdown>
					</cq-menu>

					<cq-menu class="ciq-menu ciq-period">
						<span
							><cq-clickable stxbind="Layout.periodicity"
								>1D</cq-clickable
							></span
						>
						<cq-menu-dropdown>
							<cq-menu-container cq-name="menuPeriodicity"></cq-menu-container>
						</cq-menu-dropdown>
					</cq-menu>

					<cq-menu class="ciq-menu ciq-views collapse">
						<span>Views</span>
						<cq-menu-dropdown>
							<cq-views></cq-views>
						</cq-menu-dropdown>
					</cq-menu>

					<cq-menu class="ciq-menu ciq-studies collapse" cq-focus="input">
						<span>Studies</span>
						<cq-menu-dropdown>
							<cq-study-menu-manager></cq-study-menu-manager>
						</cq-menu-dropdown>
					</cq-menu>

					<cq-menu class="ciq-menu stx-markers collapse">
						<span>Events</span>
						<cq-menu-dropdown>
							<div class="signaliq-ui">
								<cq-heading>SignalIQ</cq-heading>
								<cq-item>
									<cq-clickable
										cq-selector="cq-signaliq-dialog"
										cq-method="open"
									>
										<cq-plus></cq-plus> New Signal
									</cq-clickable>
								</cq-item>
								<cq-separator></cq-separator>
								<cq-study-legend cq-signal-studies-only cq-no-close>
									<cq-section-dynamic>
										<cq-study-legend-content>
											<template-placeholder cq-study-legend>
												<cq-item>
													<cq-label class="click-to-edit"></cq-label>
													<div class="ciq-icon ciq-close"></div>
												</cq-item>
											</template-placeholder>
										</cq-study-legend-content>
									</cq-section-dynamic>
									<cq-separator></cq-separator>
								</cq-study-legend>
							</div>
							<div class="markers-ui">
								<cq-heading>Chart Events</cq-heading>
								<cq-item stxtap="Markers.showMarkers('square')" cq-no-close
									>Simple Square<span class="ciq-switch"><span></span></span>
								</cq-item>
								<cq-item stxtap="Markers.showMarkers('circle')" cq-no-close
									>Simple Circle<span class="ciq-switch"><span></span></span>
								</cq-item>
								<cq-item stxtap="Markers.showMarkers('callout')" cq-no-close
									>Callouts<span class="ciq-switch"><span></span></span>
								</cq-item>
								<cq-item
									class="ta_markers-ui"
									stxtap="Markers.showMarkers('trade')"
									cq-no-close
									>Trade<span class="ciq-switch"><span></span></span>
								</cq-item>
								<cq-item
									class="video_markers-ui"
									stxtap="Markers.showMarkers('video')"
									cq-no-close
									>Video<span class="ciq-switch"><span></span></span>
								</cq-item>
								<cq-item stxtap="Markers.showMarkers('helicopter')" cq-no-close
									>Abstract<span class="ciq-switch"><span></span></span>
								</cq-item>
							</div>
							<div class="timespanevent-ui">
								<cq-separator></cq-separator>
								<cq-heading>Panel Events</cq-heading>
								<cq-item
									class="span-event"
									stxtap="TimeSpanEvent.showMarkers('Order')"
									cq-no-close
									>Order<span class="ciq-checkbox ciq-active"
										><span></span></span
								></cq-item>
								<cq-item
									class="span-event"
									stxtap="TimeSpanEvent.showMarkers('CEO')"
									cq-no-close
									>CEO<span class="ciq-checkbox ciq-active"><span></span></span
								></cq-item>
								<cq-item
									class="span-event"
									stxtap="TimeSpanEvent.showMarkers('News')"
									cq-no-close
									>News<span class="ciq-checkbox ciq-active"><span></span></span
								></cq-item>
							</div>
						</cq-menu-dropdown>
					</cq-menu>

					<cq-menu class="ciq-menu ciq-preferences collapse">
						<span></span>
						<cq-menu-dropdown>
							<cq-menu-dropdown-section class="chart-preferences">
								<cq-heading>Chart Preferences</cq-heading>
								<cq-menu-container
									cq-name="menuChartPreferences"
								></cq-menu-container>
								<cq-separator></cq-separator>
							</cq-menu-dropdown-section>
							<cq-menu-dropdown-section class="y-axis-preferences">
								<cq-heading>Y-Axis Preferences</cq-heading>
								<cq-menu-container
									cq-name="menuYAxisPreferences"
								></cq-menu-container>
								<cq-separator></cq-separator>
							</cq-menu-dropdown-section>
							<cq-menu-dropdown-section class="chart-addons">
								<cq-heading>Additional Features</cq-heading>
								<cq-menu-container cq-name="menuAddOns"></cq-menu-container>
								<cq-separator></cq-separator>
							</cq-menu-dropdown-section>
							<cq-menu-dropdown-section class="chart-theme">
								<cq-heading>Themes</cq-heading>
								<cq-themes></cq-themes>
								<cq-separator></cq-separator>
							</cq-menu-dropdown-section>
							<cq-menu-dropdown-section class="chart-locale">
								<cq-heading>Locale</cq-heading>
								<cq-item keyboard-selectable="false"
									><cq-clickable
										cq-selector="cq-timezone-dialog"
										cq-method="open"
										keyboard-selectable="true"
										>Change Timezone</cq-clickable
									></cq-item
								>
								<cq-item stxsetget="Layout.Language()">
									<cq-flag></cq-flag>
									<cq-language-name>Change Language</cq-language-name>
								</cq-item>
							</cq-menu-dropdown-section>
							<cq-menu-dropdown-section class="chart-preferences">
								<cq-heading>Preferences</cq-heading>
								<cq-item stxtap="Layout.openPreferences('drawingTools')"
									>Drawing Tools</cq-item
								>
							</cq-menu-dropdown-section>
							<cq-menu-dropdown-section class="shortcuts-ui">
								<cq-separator></cq-separator>
								<cq-heading>Shortcuts</cq-heading>
								<cq-item stxtap="Layout.showShortcuts(true)"
									>Shortcuts / Hotkeys</cq-item
								>
							</cq-menu-dropdown-section>
							<cq-menu-dropdown-section class="chart-preferences">
								<cq-separator></cq-separator>
								<cq-heading>Preferences</cq-heading>
								<cq-item stxtap="Layout.openPreferences('drawingTools')"
									>Drawing Tools</cq-item
								>
							</cq-menu-dropdown-section>
						</cq-menu-dropdown>
					</cq-menu>
				</div>

				<div class="trade-toggles ciq-toggles">
					<cq-toggle class="tfc-ui sidebar stx-trade" cq-member="tfc"
						><span></span><cq-tooltip>Trade</cq-tooltip></cq-toggle
					>
					<cq-toggle
						class="analystviews-ui stx-analystviews"
						cq-member="analystviews"
						><span></span><cq-tooltip>Analyst Views</cq-tooltip></cq-toggle
					>
					<cq-toggle
						class="technicalinsights-ui stx-technicalinsights"
						cq-member="technicalinsights"
						><span></span><cq-tooltip>Technical Insights</cq-tooltip></cq-toggle
					>
				</div>
			</div>
		</div>
		<!-- End Navbar -->

		<!-- custom tag for scriptiq only works when plugin is loaded -->
		<cq-scriptiq class="scriptiq-ui"></cq-scriptiq>

		<!-- custom tag for analystviews only works when plugin is loaded -->
		<cq-analystviews
			class="analystviews-ui"
			token="eZOrIVNU3KR1f0cf6PTUYg=="
			partner="1000"
			disabled
		></cq-analystviews>

		<!-- custom tag for technicalinsights only works when plugin is loaded -->
		<cq-technicalinsights uid="" lang="en" disabled></cq-technicalinsights>

		<RecentSymbolsComponent :count="2" :getRecentSymbols="getRecentSymbols">
			<div class="ciq-chart-area" role="main">
				<div class="ciq-chart">
					<cq-message-toaster
						defaultDisplayTime="10"
						defaultTransition="slide"
						defaultPosition="top"
					></cq-message-toaster>

					<cq-palette-dock>
						<div class="palette-dock-container">
							<cq-drawing-palette
								class="palette-drawing grid palette-hide"
								docked="true"
								orientation="vertical"
								min-height="300"
								cq-drawing-edit="none"
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

						<cq-chartcontrol-group
							class="full-screen-show"
							cq-marker
						></cq-chartcontrol-group>

						<cq-comparison-lookup></cq-comparison-lookup>

						<cq-chart-legend></cq-chart-legend>

						<cq-loader></cq-loader>
					</div>
				</div>
			</div>
		</RecentSymbolsComponent>

		<!-- Markers/Events -->
		<cq-abstract-marker cq-type="helicopter"></cq-abstract-marker>
		<!-- End Marker/Events -->

		<!-- Attribution component -->
		<cq-attribution></cq-attribution>

		<div class="ciq-footer full-screen-hide">
			<cq-share-button></cq-share-button>
			<div
				class="shortcuts-ui ciq-shortcut-button"
				stxtap="Layout.showShortcuts()"
				title="Toggle Shortcut Legend"
			></div>
			<div
				class="help-ui ciq-help-button"
				stxtap="Layout.toggleHelp()"
				title="Toggle Interactive Help"
			></div>
			<cq-show-range></cq-show-range>
		</div>

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
/* center dialogs on screen*/
.cq-dialogs {
	position: absolute;
	width: 100vw;
	top: 0;
}
</style>

<script lang="ts">
import { Component, Prop, Provide, Ref, Vue } from 'vue-property-decorator'
// @ts-ignore
import { CIQ } from 'chartiq/js/componentUI'
import { getConfig } from './resources' // ChartIQ library resources
import RecentSymbolsComponent from './RecentSymbols.vue'
import ShortcutDialogComponent from './ShortcutDialog.vue'

@Component({
	components: {
		RecentSymbolsComponent,
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

		// Select only plugin configurations that needs to be active for this chart
		const {
			/* eslint-disable */
			marketDepth,
			signalIQ,
			termStructure,
			tfc,
			timeSpanEventPanel,
			visualEarnings
			/* eslint-enable */
		} = config.plugins
		config.plugins = {
			// marketDepth,
			signalIQ
			// termStructure,
			// tfc,
			// timeSpanEventPanel,
			// visualEarnings
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
