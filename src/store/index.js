import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    frutas: [
      {nombre: 'Manzana', cantidad: 18},
      {nombre: 'Pera', cantidad: 20},
      {nombre: 'Zandia', cantidad: 14}
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
