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
						icon=""
						help-id="display_dropdown"
						tooltip=""
					></cq-menu>
					<cq-menu
						class="nav-dropdown ciq-period"
						reader="Periodicity"
						config="period"
						text=""
						binding="Layout.periodicity"
					></cq-menu>
					<cq-menu
						class="nav-dropdown ciq-views alignright-md alignright-sm"
						config="views"
						text="Views"
						icon="views"
						responsive=""
						tooltip="Views"
					></cq-menu>
					<cq-menu
						class="nav-dropdown ciq-studies alignright"
						cq-focus="input"
						config="studies"
						text="Studies"
						icon="studies"
						responsive=""
						tooltip="Studies"
					></cq-menu>
					<cq-menu
						class="nav-dropdown ciq-markers alignright"
						config="markers"
						text="Events"
						icon="events"
						responsive=""
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
			<div chartarea="true">
				<div id="flexContainer">
					<div id="cryptoGroup1">
						<div id="tradeHistoryContainer">
							<cq-tradehistory cq-active>
								<cq-tradehistory-table>
									<cq-scroll cq-no-claim>
										<cq-tradehistory-body maxrows="500"></cq-tradehistory-body>
									</cq-scroll>
									<div pie-chart="true">
										<span>Money Flow</span>
										<div></div>
									</div>
								</cq-tradehistory-table>
								<template-placeholder>
									<cq-item>
										<div col="time">Time</div>
										<div col="qty">Qty</div>
										<div col="price">Price</div>
										<div col="amount">Amount</div>
									</cq-item>
								</template-placeholder>
							</cq-tradehistory>
						</div>
					</div>
					<div id="cryptoGroup2">
						<div id="marketDepthBookmark"></div>
						<div id="orderBookContainer">
							<cq-orderbook cq-active></cq-orderbook>
						</div>
					</div>

					<div
						id="mainChartGroup"
						packager-append-child="div.ciq-chart-area div.ciq-chart"
					>
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
	</cq-context>
</template>

<script lang="ts">
import { Component, Prop, Ref, Vue } from 'vue-property-decorator'
// @ts-ignore
import { CIQ } from 'chartiq/js/componentUI'
import { getConfig } from './resources' // ChartIQ library resources

const { channelWrite } = CIQ.UI.BaseComponent.prototype

const initialSymbol = '^USDAUD'

@Component({})
export default class ActiveTraderComponent extends Vue {
	@Prop() config: any
	@Prop({ type: String, default: '^USDAUD' }) symbol!: string
	@Prop({ type: String, default: '_custom-chart' }) chartId!: string
	@Prop({ type: Function, default: ({}) => {} }) chartInitialized!: Function

	@Ref('container') container!: HTMLElement

	stx: CIQ.ChartEngine | undefined
	uiContext: CIQ.UI.Context | undefined
	moneyFlowChart: CIQ.Visualization | undefined

	mounted() {
		let config = this.config
		if (!config) {
			config = getConfig()
			config.chartId = this.chartId

			// Customize configuration prior to passing it as parameter chart creation
			config.initialSymbol = this.symbol || initialSymbol
			// config.quoteFeeds[0].behavior.refreshInterval = 0
			// config.enabledAddOns.continuousZoom = true

			config.plugins.marketDepth = {
				volume: true,
				mountain: true,
				step: true,
				record: true,
				height: '40%',
				precedingContainer: '#marketDepthBookmark',
				interaction: true
			}

			config.menus.preferences.content =
				config.menus.preferences.content.filter(
					(item: any) => item.label !== 'Extended Hours'
				)

			config.addOns.tableView.coverContainer = '.ciq-chart-area'
		}

		// Delay the call to createChartAndUI so any other AdvancedChart components on the page
		// have a chance to call portalizeContextDialogs
		window.setTimeout(async () => {
			const uiContext = await this.createChartAndUI(config)

			this.cryptoSetup(uiContext.stx)
			if ('d3' in window) {
				this.setUpMoneyFlowChart(uiContext.stx)
			} else {
				CIQ.loadScript('https://d3js.org/d3.v5.min.js', () => {
					this.setUpMoneyFlowChart(uiContext.stx)
				})
			}

			// Request TFC channel open
			channelWrite(config.channels.tfc, true, uiContext.stx)
			this.chartInitialized({ chartEngine: uiContext.stx, uiContext, config })
		}, 0)
	}

	beforeDestroy() {
		// Destroy the ChartEngine instance when unloading the component.
		// This will stop internal processes such as quotefeed polling.
		if (this.moneyFlowChart) this.moneyFlowChart.destroy(false)
		this.stx?.destroy()
	}

	async createChartAndUI(config: any) {
		const chart = new CIQ.UI.Chart()
		const container = this.container

		const uiContext = chart.createChartAndUI({ container, config })

		this.stx = uiContext.stx
		this.uiContext = uiContext

		// Channel subscribe
		// const { channels } = config
		// const channelSubscribe = CIQ.UI.BaseComponent.prototype.channelSubscribe
		// channelSubscribe(
		// 	channels.breakpoint,
		// 	(value: any) => {
		// 		console.log('channels.breakpoint', value)
		// 	},
		// 	uiContext.stx
		// )

		// Create layout listener, see parameters at https://documentation.chartiq.com/global.html#layoutEventListener
		// uiContext.stx.addEventListener('layout', ({ layout }: any) => {
		// 	console.log('layout changed', layout)
		// })

		return uiContext
	}

	cryptoSetup(stx: any) {
		stx.setChartType('line')
		CIQ.extend(stx.layout, {
			crosshair: true,
			headsUp: { static: true },
			l2heatmap: true,
			rangeSlider: true,
			marketDepth: true,
			extended: false
		})
		stx.changeOccurred('layout')

		// Simulate L2 data using https://documentation.chartiq.com/CIQ.ChartEngine.html#updateCurrentMarketData
		CIQ.simulateL2({ stx, onInterval: 1000, onTrade: true })
	}

	setUpMoneyFlowChart(stx: any) {
		this.moneyFlowChart = moneyFlowChart(stx)

		function moneyFlowChart(stx: any) {
			const initialPieData = {
				Up: { index: 1 },
				Down: { index: 2 },
				Even: { index: 3 }
			}

			const pieChart = new CIQ.Visualization({
				container: 'cq-tradehistory-table div[pie-chart] div',
				renderFunction: CIQ.SVGChart.renderPieChart,
				colorRange: ['#8cc176', '#b82c0c', '#7c7c7c'],
				className: 'pie',
				valueFormatter: CIQ.condenseInt
			}).updateData(CIQ.clone(initialPieData))

			let last: any = null
			stx.append(
				'updateCurrentMarketData',
				(data: any, chart: any, symbol: string /* , params: any */) => {
					if (symbol) {
						return
					}
					const items = document.querySelectorAll(
						'cq-tradehistory-body cq-item'
					)

					const d: any = {}
					let i = 0
					for (i = 0; i < items.length; i++) {
						const item = items[i]
						if (item === last) break
						let dir = item.getAttribute('dir') as string
						if (!dir) {
							dir = 'even'
						}
						dir = CIQ.capitalize(dir)
						if (!d[dir]) {
							d[dir] = 0
						}
						d[dir] += parseFloat(
							(item.querySelector('[col=amount]') as Element).getAttribute(
								'rawval'
							) as string
						)
					}

					if (i) {
						pieChart.updateData(d, 'add')
					}
					last = items[0]
				}
			)
			stx.addEventListener('symbolChange', () => {
				pieChart.updateData(CIQ.clone(initialPieData))
			})

			return pieChart
		}
	}
}
</script>

<style lang="scss" scoped>
#flexContainer {
	position: absolute;
	top: -15px;
	bottom: 5px;
	left: 0;
	right: 0;
	overflow: hidden;
	padding: 10px 0;
}
#cryptoGroup1,
#cryptoGroup2 {
	float: left;
	width: 15%;
	height: 100%;
	padding: 5px 5px 10px;
}
#cryptoGroup2 {
	width: 25%;
}
#mainChartGroup {
	display: flex;
	flex-direction: column;
	display: grid; /* A better model, if browser supports. */
	height: 100%;
	padding: 10px;
}
#marketDepthBookmark {
	display: none;
}
#orderBookContainer,
#tradeHistoryContainer {
	width: 100%;
	padding-top: 5px;
}
cq-orderbook,
cq-tradehistory {
	position: relative !important;
}

/* Money Flow chart */
div[pie-chart] {
	height: 150px;
	width: 100%;
	margin-top: 5px;
	padding-bottom: 15px;
	font-weight: bold;
	text-align: center;
}
.ciq-night div[pie-chart] {
	background-color: #1c2a35;
}
div[pie-chart] > div {
	height: 100%;
	width: 100%;
}
.div[pie-chart] {
	.pie {
		text-anchor: middle;
		fill: black;
	}
	.pie text .name {
		font-weight: bold;
	}
	.pie text .value {
		font-weight: normal;
	}
}
.ciq-night::v-deep .pie {
	fill: white;
}
</style>
