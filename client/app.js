import './styles/style.css'
import Vue from 'vue'
import Vuex from 'vuex'
import index from './views/index.vue'
import {store} from './store/store.js'

new Vue({
  el: 'body',
  store,
  components: {index},
  vuex: {
    getters: {
      currentView: state => state.currentView
    }
  },
  created: () => store.dispatch('ENTRY')
})