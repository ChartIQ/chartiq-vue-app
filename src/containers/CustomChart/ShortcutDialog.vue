<template>
	<div id="ShortcutDialog">
		<div class="container">
			<div class="title">Drawing tool shortcuts</div>
			<div class="content">
				<div class="list">
					<table>
						<tr>
							<td @click="sortBy('label')" title="Sort by label">Label</td>
							<td @click="sortBy('shortcut')" title="Sort by shortcut">
								Alt + Shortcut
							</td>
						</tr>
						<tr v-for="item in drawingTools" :key="item.label">
							<td class="label" @click="infoAbout(item.tool)">
								{{ item.label }}
							</td>
							<td class="shortcut">
								<input
									type="text"
									maxlength="1"
									:value="item.shortcut"
									@input="shortcutChanged(item.tool, $event)"
									:class="[{ duplicate: item.duplicate }]"
								/>
							</td>
						</tr>
					</table>
				</div>
				<div class="detail">
					Detail about Tool:
					<b>{{ selectedTool.label || 'No tool has been selected' }}</b>
					<div>{{ selectedTool.detail || '' }}</div>
				</div>
			</div>
			<div class="action">
				<button @click="onSave()">Save</button>
				<button @click="onClose()">Cancel</button>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({})
export default class ShortcutDialogComponent extends Vue {
	@Prop(Function) getDrawingTools!: Function
	@Prop(Function) setDrawingToolShortcuts!: Function
	@Prop(Function) closeDialog!: Function

	drawingTools: {
		label: string
		tool: string
		shortcut: string
		duplicate?: boolean
	}[] = []
	selectedTool: any = {}

	mounted() {
		this.drawingTools = this.getDrawingTools()
		this.updateDuplicates()
	}

	shortcutChanged(tool: any, e: any) {
		if (e) {
			e.stopPropagation()
			e.preventDefault()
		}

		const shortcut = e.data
		this.drawingTools
			.filter(item => item.tool === tool)
			.map(item => {
				item.shortcut = shortcut
			})

		this.updateDuplicates()
	}

	infoAbout(tool: any) {
		this.selectedTool = this.drawingTools.find(item => item.tool === tool) || {}
	}

	updateDuplicates() {
		const { drawingTools: tools } = this
		// find duplicates
		const duplicates: Record<string, number[]> = tools.reduce(
			(acc: any, item, index) => {
				item.duplicate = false // clear duplicates
				if (!item.shortcut) return acc
				acc[item.shortcut] = (acc[item.shortcut] || []).concat(index)
				return acc
			},
			{}
		)

		// mark duplicates
		// eslint-disable-next-line
		Object.entries(duplicates).forEach(([shortcut, indexes]) => {
			if (indexes.length > 1) {
				indexes.forEach(index => {
					tools[index].duplicate = true
				})
			}
		})
	}

	sortBy(field: string) {
		this.drawingTools.sort((a: any, b: any) => {
			const x1 = a[field]
			const x2 = b[field]
			if (!x1 && x2) return 1
			if (!x2 && x1) return -1
			return x1 > x2 ? 1 : -1
		})
	}

	onSave() {
		const shortcuts = this.drawingTools
			.filter(item => item.shortcut)
			.reduce((acc: any, item) => {
				acc[item.tool] = item.shortcut
				return acc
			}, {})

		this.setDrawingToolShortcuts(shortcuts)
		this.onClose()
	}

	onClose() {
		this.closeDialog()
	}
}
</script>

<style lang="scss" scoped>
#ShortcutDialog {
	width: 100%;
	height: 100%;
	background: #efefef43;
	position: absolute;
	top: 0;
	left: 0;
	z-index: 100;
	display: flex;
	position: absolute;
}

.container {
	margin: 60px 24px;
	background: white;
	color: black;
	flex-grow: 1;
	display: flex;
	flex-direction: column;
	font-size: 0.9rem;
	position: relative;
}

.title {
	font: 600 1rem Helvetica, sans-serif;
	padding: 20px;
}

.content {
	position: absolute;
	display: flex;
	flex-direction: row;
	top: 48px;
	bottom: 64px;
	width: 100%;
	padding: 0 20px;
	box-sizing: border-box;

	tr:first-child td {
		cursor: pointer;
		padding: 6px 0;
		font-weight: 500;
	}

	td:nth-child(2) {
		text-align: right;
	}

	input[type='text'] {
		background-color: inherit;
		color: inherit;
	}

	tr:hover {
		background-color: #eee;

		td: {
			padding: 2px 8px;
		}
		input {
			background-color: #f5f5f5;
		}
	}
}

.list {
	overflow-y: auto;
	max-height: 100%;
	padding-right: 12px;
	display: inline-block;
}

.label {
	width: 170px;
}

.shortcut input {
	border: solid 1px #eee;
	width: 20px;
	font-weight: 700;
	text-align: center;
	padding: 1px 4px;
	&:focus {
		border: solid blue 1px;
		outline: none;
	}
	&.duplicate {
		border: solid red 1px;
	}
}

.detail {
	top: 0;
	padding: 6px;
	left: 280px;
	right: 20px;

	div {
		margin-top: 12px;
	}
}

.action {
	padding: 4px 8px;
	text-align: right;
	position: absolute;
	bottom: 0;
	width: 100%;
	box-sizing: border-box;

	button {
		font-size: 1rem;
		margin: 8px 6px;
		padding: 4px 12px;
	}
}
</style>
