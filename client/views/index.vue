<template>
	<div>
		<one-com></one-com>
		<two-com></two-com>
	</div>
</template>
<script>
	import Arr from '../components/A.vue'
	import Brr from '../components/B.vue'
	import store from '../store/store.js'

	export default {
		components:{
			oneCom: Arr,
			twoCom: Brr
		},
		store: store
	}
</script>