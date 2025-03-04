module.exports = {
	root: true,
	env: {
		node: true
	},
	extends: [
		'plugin:vue/essential',
		'@vue/prettier',
		'@vue/typescript/recommended'
	],
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'@typescript-eslint/ban-ts-ignore': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/no-empty-function': 'off',
		'@typescript-eslint/explicit-member-accessibility': 'off',
		'@typescript-eslint/member-delimiter-style': 'off',
		'@typescript-eslint/no-use-before-define': ['error', { functions: false }],
		'no-empty-pattern': 'off',
		'comma-dangle': ['error', 'only-multiline'],
		'@typescript-eslint/ban-ts-comment': 'off',
		'@typescript-eslint/ban-types': 'off'
	},
	parser: 'vue-eslint-parser',
	parserOptions: {
		ecmaVersion: 2020,
		allowImportExportEverywhere: true
	}
}
