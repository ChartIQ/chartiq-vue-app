import { CIQ } from 'chartiq/js/componentUI'

declare module 'chartiq/js/componentUI' {
	export namespace CIQ {
		let dialog: boolean

		function simulateL2(params: {
			/** Chart Engine */
			stx: CIQ.ChartEngine
			/** normally spread is 5%.  To vary that, set this to a number to multiply the spread.  For example, setting to 2 would change the spread to 10% */
			rangeFactor?: number = 1
			/** millisecond interval to create L2 records */
			onInterval: number
			/** set to true to create L2 records when the regular quote updates occur */
			onTrade: boolean
		})

		const SVGChart: any
	}

	export namespace CIQ.UI {
		interface Context {
			stx: CIQ.ChartEngine,
			config: any,
			getAdvertised(name: string): any,
			topNode: HTMLElement
		}
	}
}
