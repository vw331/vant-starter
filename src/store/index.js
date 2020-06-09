import Vue from 'vue'
import Vuex from 'vuex'
import { Toast } from 'vant';

Vue.use(Vuex)

const state = {
  token: localStorage.getItem('token') || '',
  userInfo: Object.create(null),
  isLoading: false
}

const mutations = {
  ADD_TOKEN(state, token){
    localStorage.setItem('token', token)
    state.token = token
  },
  DELETE_TOKEN(state){
    localStorage.removeItem('token')
    state.token = ''
  },
  LOADING(state, isLoading=false){
    state.isLoading = isLoading
    state.isLoading
      ? Toast.loading({
        forbidClick: true
      })
      : Toast.clear()
  }
}

const actions = {

}

export default new Vuex.Store({ state, mutations, actions })
