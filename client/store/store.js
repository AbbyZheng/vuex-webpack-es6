import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
	count: 0,
	currentView : null
}

const mutations = {
	fnInit (state, amount) {
	    state.count = state.count + amount
	},
	ENTRY (state){
		state.currentView = 'index'
	}
}

export const store = new Vuex.Store({
	state,
	mutations
})
export const dispatch = store.dispatch