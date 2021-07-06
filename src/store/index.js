import Vue from 'vue'
import Vuex from 'vuex'

import height from './modules/height'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

var store = {
  plugins: [],
  modules: {
    height
  },
  strict: debug
}

export default new Vuex.Store(store)
