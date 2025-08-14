declare namespace CIQ {
	class ChartEngine {
		constructor(params: any)
		destroy(): void
		append(...args: any[]): void
		addEventListener(...args: any[]): void
		layout: any
		setChartType(type: string): void
		loadChart(symbol: string, options?: any): void
	}
	function simulateL2(params: {
		stx: CIQ.ChartEngine
		onInterval?: number
		onTrade?: boolean
	}): void

	namespace UI {
		class BaseComponent {
			channelWrite: (...args: any[]) => any

			static prototype: BaseComponent
		}
		class Chart {
			createChartAndUI: (params: any) => any
		}
		interface Context {
			stx: CIQ.ChartEngine
			config: any
			getAdvertised(name: string): any
			topNode: HTMLElement
		}
	}

	class Visualization {
		constructor(params: any)
		updateData(data: any, mode?: string): this
		destroy(soft?: boolean): void
	}

	function loadScript(url: string, callback: () => void): void
	function extend(target: any, source: any): void
	function clone(obj: any): any
	function condenseInt(value: number): string
	function capitalize(value: string): string

	const SVGChart: {
		renderPieChart: (...args: any[]) => any
	}
}
declare module 'chartiq/js/chartiq' {
	export const CIQ: typeof import('chartiq/js/standard').CIQ
}

declare module 'chartiq/js/standard' {
	export const CIQ: typeof import('chartiq/js/componentUI').CIQ
}

declare module 'chartiq/js/componentUI' {
	export const CIQ: typeof globalThis.CIQ
}

declare module 'chartiq/js/defaultConfiguration' {
	const getDefaultConfig: any
	export default getDefaultConfig
	export type Resources = any
}

declare module 'chartiq/examples/feeds/quoteFeedSimulator' {
	const quoteFeedSimulator: any
	export default quoteFeedSimulator
}

declare module 'chartiq/examples/markers/markersSample' {
	const markersSample: any
	export default markersSample
}

declare module 'chartiq/examples/markers/tradeAnalyticsSample' {}
declare module 'chartiq/examples/markers/videoSample' {}
declare module 'chartiq/js/addOns' {}
declare module 'chartiq/js/components' {
	export const CIQ: typeof globalThis.CIQ
}
declare module 'chartiq/js/thirdparty/emoji-popover.es.js' {}
declare module 'chartiq/js/thirdparty/perfect-scrollbar.esm.js' {}
declare module 'chartiq/examples/markers/markersSample.js' {
	const markersSample: any
	export default markersSample
}
declare module 'chartiq/examples/feeds/quoteFeedSimulator.js' {
	const quoteFeedSimulator: any
	export default quoteFeedSimulator
}
