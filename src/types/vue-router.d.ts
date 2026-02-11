// Vue Router 4.3+ uses .d.mts files which TypeScript 4.5 can't resolve properly
declare module 'vue-router' {
	export * from 'vue-router/dist/vue-router.mjs'
}
