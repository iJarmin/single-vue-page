import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import mutations from './mutations'
import state from './states'
Vue.use(Vuex)
export default new Vuex.Store({
  getters,
  mutations,
  state
})
