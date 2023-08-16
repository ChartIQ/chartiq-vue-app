/**
 * Shims for v8.8.0
 */
import { CIQ } from 'chartiq/js/componentUI'

declare module 'chartiq/js/componentUI' {
	export namespace CIQ {
		let dialog: boolean

		let localStorage: Storage

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

	export namespace CIQ.Studies {
		let Favorites: object | undefined
		interface StudyDescriptor {
			name: string
			disabled: boolean
			type: string
			panel: string
		}
	}

	export namespace CIQ.UI {
		interface Context {
			stx: CIQ.ChartEngine
			config: any
			getAdvertised(name: string): any
			topNode: HTMLElement
		}
	}

	export namespace CIQ.I18N {
		let csv: string
	}
}
