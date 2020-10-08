import Vue from 'vue'
import Vuex from 'vuex'
import actions from '@/store/actions'
import mutations from '@/store/mutations'
import getters from '@/store/getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    idToken: null,
    userId: null,
    user: null
  },
  getters,
  mutations,
  actions
})
