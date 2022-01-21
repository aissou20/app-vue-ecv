import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    email: '',
    password: '',
    address: '',
    cgv: false,
  },
  // mutations: {
  //   UPDATEEMAIL(state, payload){
  //     state.email = payload;
  //   }
  // },
  // actions: {
  //   addEmail({context},payload){
  //     context.commit('UPDATEEMAIL', payload)
  //   }
  // },
  modules: {
  }
})
