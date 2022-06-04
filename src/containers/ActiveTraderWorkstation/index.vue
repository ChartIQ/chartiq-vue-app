<template>
	<cq-context ref="container">
		<cq-color-picker></cq-color-picker>

		<cq-chart-instructions role="contentinfo"></cq-chart-instructions>

		<div class="ciq-nav full-screen-hide" role="navigation">
			<div class="sidenav-toggle ciq-toggles">
				<cq-toggle
					class="ciq-sidenav"
					cq-member="sidenav"
					cq-toggles="sidenavOn,sidenavOff"
					cq-toggle-classes="active,"
					keyboard-navigation="false"
				>
					<span></span>
					<cq-tooltip>More</cq-tooltip>
				</cq-toggle>
			</div>

			<cq-menu class="ciq-search">
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
			</cq-menu>

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
						<span>
							<cq-clickable stxbind="Layout.periodicity">1D</cq-clickable>
						</span>
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
							<cq-study-legend cq-no-close>
								<cq-section-dynamic>
									<cq-heading>Current Studies</cq-heading>
									<cq-study-legend-content>
										<template-placeholder cq-study-legend="true">
											<cq-item>
												<cq-label class="click-to-edit"></cq-label>
												<div class="ciq-icon ciq-close"></div>
											</cq-item>
										</template-placeholder>
									</cq-study-legend-content>
									<cq-placeholder>
										<div
											stxtap="Layout.clearStudies()"
											class="ciq-btn sm"
											keyboard-selectable="true"
										>
											Clear All
										</div>
									</cq-placeholder>
								</cq-section-dynamic>
							</cq-study-legend>
							<div class="scriptiq-ui">
								<cq-heading>ScriptIQ</cq-heading>
								<cq-item>
									<cq-clickable
										cq-selector="cq-scriptiq-editor"
										cq-method="open"
									>
										New Script
									</cq-clickable>
								</cq-item>
								<cq-scriptiq-menu></cq-scriptiq-menu>
								<cq-separator></cq-separator>
							</div>
							<cq-heading cq-filter cq-filter-min="15"> Studies </cq-heading>
							<cq-studies></cq-studies>
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
								>
									Order
									<span class="ciq-checkbox ciq-active">
										<span></span>
									</span>
								</cq-item>
								<cq-item
									class="span-event"
									stxtap="TimeSpanEvent.showMarkers('CEO')"
									cq-no-close
								>
									CEO
									<span class="ciq-checkbox ciq-active">
										<span></span>
									</span>
								</cq-item>
								<cq-item
									class="span-event"
									stxtap="TimeSpanEvent.showMarkers('News')"
									cq-no-close
								>
									News
									<span class="ciq-checkbox ciq-active">
										<span></span>
									</span>
								</cq-item>
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
						</cq-menu-dropdown>
					</cq-menu>
				</div>

				<div class="trade-toggles ciq-toggles">
					<cq-toggle class="tfc-ui sidebar stx-trade" cq-member="tfc">
						<span></span>
						<cq-tooltip>Trade</cq-tooltip>
					</cq-toggle>
					<cq-toggle
						class="analystviews-ui stx-analystviews tc-ui stx-tradingcentral"
						cq-member="analystviews"
					>
						<span></span>
						<cq-tooltip>Analyst Views</cq-tooltip>
					</cq-toggle>
					<cq-toggle
						class="technicalinsights-ui stx-technicalinsights recognia-ui stx-recognia"
						cq-member="technicalinsights"
					>
						<span></span>
						<cq-tooltip>Technical Insights</cq-tooltip>
					</cq-toggle>
				</div>
			</div>
		</div>

		<cq-scriptiq class="scriptiq-ui"></cq-scriptiq>

		<cq-analystviews
			class="analystviews-ui"
			token="eZOrIVNU3KR1f0cf6PTUYg=="
			partner="1000"
			disabled
		></cq-analystviews>

		<cq-technicalinsights uid="" lang="en" disabled></cq-technicalinsights>

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
							<cq-orderbook cq-active>
								<cq-orderbook-table reverse>
									<cq-scroll cq-no-claim>
										<cq-orderbook-bids></cq-orderbook-bids>
									</cq-scroll>
								</cq-orderbook-table>
								<cq-orderbook-table>
									<cq-scroll cq-no-claim>
										<cq-orderbook-asks></cq-orderbook-asks>
									</cq-scroll>
								</cq-orderbook-table>
								<template-placeholder>
									<cq-item cq-size-shading>
										<div col="price">Price</div>
										<div col="size">Size</div>
										<div col="amount">Amount</div>
									</cq-item>
								</template-placeholder>
							</cq-orderbook>
						</div>
					</div>

					<div
						id="mainChartGroup"
						packager-append-child="div.ciq-chart-area div.ciq-chart"
					>
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
								<!-- stx-hu-tooltip is required only if addon tooltip is used and customization is required -->
								<stx-hu-tooltip>
									<stx-hu-tooltip-field field="DT">
										<stx-hu-tooltip-field-name
											>Date/Time</stx-hu-tooltip-field-name
										>
										<stx-hu-tooltip-field-value></stx-hu-tooltip-field-value>
									</stx-hu-tooltip-field>
									<stx-hu-tooltip-field field="Close">
										<stx-hu-tooltip-field-name></stx-hu-tooltip-field-name>
										<stx-hu-tooltip-field-value></stx-hu-tooltip-field-value>
									</stx-hu-tooltip-field>
								</stx-hu-tooltip>

								<cq-chart-title cq-marker cq-browser-tab></cq-chart-title>

								<cq-comparison-lookup></cq-comparison-lookup>
								<cq-chart-legend></cq-chart-legend>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Markers/Events -->
		<cq-abstract-marker cq-type="helicopter"></cq-abstract-marker>
		<!-- End Marker/Events -->

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
				precedingContainer: '#marketDepthBookmark'
			}

			config.menuChartPreferences = config.menuChartPreferences.filter(
				(item: any) =>
					item.label !== 'Market Depth' && item.label !== 'Extended Hours'
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
			stx.append('updateCurrentMarketData', (
				data: any,
				chart: any,
				symbol: string /* , params: any */
			) => {
				if (symbol) {
					return
				}
				const items = document.querySelectorAll('cq-tradehistory-body cq-item')

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
			})
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
