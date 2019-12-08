import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
import getters from './getters'

Vue.use(Vuex)

const state = {
	account:{}, //登录用户
}

export default new Vuex.Store({
	state,
	getters,
	actions,
	mutations,
})