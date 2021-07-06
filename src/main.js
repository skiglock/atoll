import DefaultLayout from '~/layouts/Default.vue'
import { getPath } from '~/utils/path.js'
import marked from 'marked'
import Vuex from 'vuex'
import store from '~/store'

export default function (Vue, { head, appOptions }) {
  head.htmlAttrs = { lang: 'ru' }
  head.link.push({
    rel: 'preconnect',
    href: 'https://fonts.googleapis.com'
  })
  head.link.push({
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossorigin: true
  })
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700&display=swap'
  })
  Vue.component('Layout', DefaultLayout)
  Vue.prototype.$getPath = getPath
  Vue.filter('markdown', (string) => marked(string))
  Vue.use(Vuex)
  appOptions.store = store
}
