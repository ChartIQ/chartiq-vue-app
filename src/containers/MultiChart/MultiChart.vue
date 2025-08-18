<template>
	<cq-context ref="container" cq-hide-menu-periodicity="">
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
			<!-- Side Navigation Bar -->
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
					<cq-menu class="nav-dropdown ciq-grid" text>
						<div
							className="menu-clickable"
							aria-expanded="false"
							aria-haspopup="menu"
						>
							Grid
						</div>
						<cq-menu-dropdown>
							<h4>
								<cq-heading>Templates</cq-heading>
							</h4>
							<cq-item class="ciq-grid-layout">
								<cq-grid-size-picker
									maxrows="5"
									maxcols="5"
									resize="fixed"
									templates="ciq-auto-grid-1 ciq-auto-grid-2 ciq-auto-grid-3 ciq-auto-grid-4 ciq-auto-grid-5 ciq-auto-grid-6 ciq-auto-grid-7 ciq-auto-grid-8 ciq-auto-grid-9 ciq-auto-grid-10 ciq-auto-grid-11 ciq-auto-grid-12"
								></cq-grid-size-picker>
							</cq-item>
							<cq-item class="ciq-solo-only"
								>Not available in solo mode</cq-item
							>
						</cq-menu-dropdown>
					</cq-menu>
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
		<!-- End Navbar  -->
		<!-- Shared chart engine -->
		<div>
			<div cq-context-engine="true"></div>
		</div>
		<div className="ciq-multi-chart-container-wrapper">
			<cq-palette-dock>
				<div className="palette-dock-container">
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
			<div className="ciq-multi-chart-container">
				<cq-context-wrapper>
					<cq-context>
						<div className="ciq-chart-area">
							<div className="ciq-chart">
								<cq-message-toaster
									defaultDisplayTime="10"
									defaultTransition="slide"
									defaultPosition="top"
								></cq-message-toaster>
								<div className="chartContainer">
									<table className="hu-tooltip">
										<caption>
											Tooltip
										</caption>
										<tbody>
											<tr hu-tooltip-field="" className="hu-tooltip-sr-only">
												<th>Field</th>
												<th>Value</th>
											</tr>
											<tr hu-tooltip-field="DT">
												<td className="hu-tooltip-name">Date/Time</td>
												<td className="hu-tooltip-value"></td>
											</tr>
											<tr hu-tooltip-field="Close">
												<td className="hu-tooltip-name"></td>
												<td className="hu-tooltip-value"></td>
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
								<!-- End Chart Container -->
							</div>
							<div className="ciq-multi-chart-controls">
								<cq-menu class="ciq-menu ciq-multi-chart-options collapse">
									<span>
										<button
											aria-haspopup="menu"
											className="ciq-screen-reader"
											aria-expanded="false"
										>
											Chart controls
										</button>
									</span>
									<cq-menu-dropdown cq-drop-up-menu role="menu">
										<cq-item
											stxtap="addChart('before')"
											title="Add Chart Left"
											role="menuitem"
											>Add Left</cq-item
										>
										<cq-item
											stxtap="addChart()"
											title="Add Chart Right"
											role="menuitem"
											>Add Right</cq-item
										>
										<cq-item
											stxtap="move('before')"
											title="Move Chart Left"
											role="menuitem"
											>Move Left</cq-item
										>
										<cq-item
											stxtap="move()"
											title="Move Chart Right"
											role="menuitem"
											>Move Right</cq-item
										>
										<cq-item
											stxtap="close()"
											title="Remove Chart"
											className="ciq-warning"
											role="menuitem"
											>Remove</cq-item
										>
									</cq-menu-dropdown>
								</cq-menu>
								<span
									className="ciq-solo-toggle"
									stxtap="toggleSolo()"
									title="Toggle solo mode"
									role="button"
								></span>
							</div>
							<!-- End Chart Box -->
						</div>
						<!-- Attribution component -->
						<cq-attribution></cq-attribution>
					</cq-context>
				</cq-context-wrapper>
			</div>
			<cq-side-panel></cq-side-panel>
		</div>
		<!-- End Chart Area -->
		<!-- Markers/Events -->
		<cq-abstract-marker cq-type="helicopter"></cq-abstract-marker>
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
	</cq-context>
</template>
<script lang="ts">
import { defineComponent, ref, onMounted, onBeforeUnmount } from 'vue'
import 'chartiq/examples/feeds/symbolLookupChartIQ'
import quoteFeedSimulator from 'chartiq/examples/feeds/quoteFeedSimulator'
// @ts-ignore
import PerfectScrollbar from 'chartiq/js/thirdparty/perfect-scrollbar.esm.js'
// use for SignalIQ
// import EmojiPopover from "chartiq/js/thirdparty/emoji-popover.es.js";
import marker from 'chartiq/examples/markers/markersSample'

// ChartIQ example resources for markets and translations.
// Replace it with your own or feel free to use ours.

// Symbol mapping to market definition
import 'chartiq/examples/markets/marketDefinitionsSample'
import 'chartiq/examples/markets/marketSymbologySample'
import 'chartiq/examples/markets/timezones.js'

// Translation file
import 'chartiq/examples/translations/translationSample'

// Example Marker files
//import "chartiq/examples/markers/tradeAnalyticsSample";
import 'chartiq/examples/markers/videoSample'

import { CIQ } from 'chartiq/js/components'
import { getCustomConfig } from './resources' // ChartIQ library resources

export default defineComponent({
	name: 'MultiChartExample',
	setup() {
		const container = ref<
			(HTMLElement & { charts?: any[]; chartsArray?: any[] }) | null
		>(null)
		const resources = {
			quoteFeed: quoteFeedSimulator,
			markerFeed: marker.MarkersSample,
			scrollStyle: PerfectScrollbar // Improved component scrollbar appearance
		}
		const config = getCustomConfig({ resources })
		onMounted(() => {
			const chartEntries = [
				{
					symbol: {
						symbol: 'IBM',
						name: 'International Business Machines Corp.',
						exchDisp: 'NYSE'
					}
				},
				{ symbol: 'AAPL' }
			]

			const store = new CIQ.NameValueStore()
			config.plugins.visualEarnings.container = 'cq-chart-title'
			config.plugins.visualEarnings.insertContainer = 'afterend'
			config.plugins.visualEarnings.markup = `
        <cq-menu class="ciq-menu stx-visualearnings collapse">
          <span></span>
          <cq-menu-dropdown cq-lift>
            <cq-menu-container cq-name="menuEstimize"></cq-menu-container>
          </cq-menu-dropdown>
        </cq-menu>`
			config.multiChartId = '_ciq'
			config.addOns.tableView.coverContainer =
				'.ciq-multi-chart-container-wrapper'

			store.get(
				'multiCharts' + config.multiChartId,
				(err: any, chartConfig: any) => {
					const {
						charts = chartEntries,
						colCount = 2,
						rowCount = 1,
						gridTemplate
					} = chartConfig || {}

					const stxArr = new CIQ.UI.Multichart().createCharts(
						{
							// @ts-ignore
							chartsConfig: {
								charts,
								colCount,
								rowCount,
								// @ts-ignore
								gridTemplate
							},
							// @ts-ignore
							containerId: container.value
						},
						config
					)

					// Add allCharts property
					// @ts-ignore
					if (!container.value.hasOwnProperty('charts')) {
						// @ts-ignore
						Object.defineProperty(container.value, 'charts', {
							get: function () {
								// @ts-ignore
								return (
									// @ts-ignore
									container.value
										// @ts-ignore
										.getCharts()
										.filter(
											// @ts-ignore
											({ container }) =>
												container &&
												!container.hasAttribute('cq-context-engine')
										)
										.reverse()
								)
							}
						})
					}

					Object.assign(window, { CIQ, stxArr })
				}
			)
		})

		onBeforeUnmount(() => {
			const charts = container.value?.charts || []
			charts.forEach((stx: any) => {
				stx.destroy()
				stx.draw = () => {}
			})
		})

		return {
			container
		}
	}
})
</script>
