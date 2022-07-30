import Vue from 'vue'
import Vuex from 'vuex'
import hobby from './modules/hobby'
import createVuexPersisted from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  getters: {
    // hobby (state) {
    //   return state.hobby.todo
    // }
  },
  mutations: {},
  actions: {},
  modules: {
    hobby
  },
  piugins: [
    createVuexPersisted({
      reducer (state) {
        return {
          hobby: state.hobby
        }
      }
    })
  ]
})
