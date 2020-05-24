import Vue from 'vue'
import Vuex from 'vuex'
import module from "./module";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  getters: {},
  modules: { module }
})
