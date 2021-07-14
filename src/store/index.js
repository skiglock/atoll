import Vue from 'vue'
import Vuex from 'vuex'

import settings from './modules/settings'
import modal from './modules/modal'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

var store = {
  plugins: [],
  modules: {
    settings,
    modal
  },
  strict: debug
}

export default new Vuex.Store(store)
