<template>
  <div>
    <button @click = 'fnInit'>Increment +1</button>
  </div>
</template>

<script>
import {fnInit} from '../store/action.js'

export default {
	vuex:{
		actions:{
			fnInit:fnInit
		}
	}
}
</script>