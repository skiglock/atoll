import Vue from 'vue'
import Vuex from 'vuex'

import settings from './modules/settings'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

var store = {
  plugins: [],
  modules: {
    settings
  },
  strict: debug
}

export default new Vuex.Store(store)
