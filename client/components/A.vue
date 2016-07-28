<template>
  <div>
    <h3>Count is {{count}}</h3>
  </div>
</template>

<script>
export default {
	vuex:{
		getters:{
			count:function(state){
				return state.count
			}
		}
	}
}
</script>