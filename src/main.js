import DefaultLayout from '~/layouts/Default.vue'
import { getPath } from '~/utils/path.js'
import { shade } from '~/utils/shade.js'

import marked from 'marked'
import Vuex from 'vuex'
import store from '~/store'

import InfiniteLoading from 'vue-infinite-loading'
import ralewaylight from '@/assets/fonts/ralewaylight.woff2"'
import ralewayregular from '@/assets/fonts/ralewayregular.woff2'
import ralewaymedium from '@/assets/fonts/ralewaymedium.woff2'
import ralewaysemibold from '@/assets/fonts/ralewaysemibold.woff2'
import ralewaybold from '@/assets/fonts/ralewaybold.woff2'

export default function (Vue, { head, appOptions }) {
  head.htmlAttrs = { lang: 'ru' }
  head.link.push({
    rel: 'preload',
    href: ralewaylight,
    as: 'font',
    crossorigin: true
  })
  head.link.push({
    rel: 'preload',
    href: ralewayregular,
    as: 'font',
    crossorigin: true
  })
  head.link.push({
    rel: 'preload',
    href: ralewaymedium,
    as: 'font',
    crossorigin: true
  })
  head.link.push({
    rel: 'preload',
    href: ralewaysemibold,
    as: 'font',
    crossorigin: true
  })
  head.link.push({
    rel: 'preload',
    href: ralewaybold,
    as: 'font',
    crossorigin: true
  })
  Vue.component('Layout', DefaultLayout)
  Vue.prototype.$getPath = getPath
  Vue.prototype.$shade = shade
  Vue.filter('markdown', (string) => marked(string))
  Vue.use(Vuex)
  Vue.use(InfiniteLoading)
  appOptions.store = store
}
