import { createStore } from 'vuex'
// import axios from 'axios'
// import qs from 'querystring'
// import api from './api'
import state from './state'
import mutations from './mutations'
import actions from './actions'

export default createStore({
  state,
  mutations,
  actions,
  modules: {
  }
})
