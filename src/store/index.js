import { createStore } from 'vuex'

export default createStore({
  state: {
    token:sessionStorage.getItem("token")
  },
  mutations: {
    SET_TOKENN: (state, token) => {
      state.token = token
      sessionStorage.setItem("token", token)
    },
    REMOVE_INFO : (state) => {
      state.token = ''
      sessionStorage.setItem("token", '')
    }
  },
  actions: {
  },
  modules: {
  }
})
