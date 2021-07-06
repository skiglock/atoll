<template>
  <div class="wrapper">
    <app-header :style="$route.path === '/' ? internalStyle : ''">
      <transition name="route">
        <header-body v-if="$route.path === '/'" />
      </transition>
    </app-header>
    <transition name="route">
      <router-view />
    </transition>
    <app-footer />
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader'
import AppFooter from '@/components/AppFooter'
import HeaderBody from '@/components/Header/HeaderBody'
export default {
  components: {
    AppHeader,
    AppFooter,
    HeaderBody
  },
  data() {
    return {
      forceRecompute: 0
    }
  },
  computed: {
    internalStyle() {
      const recompute = this.forceRecompute // eslint-disable-line

      return this.convertStyle()
    }
  },
  methods: {
    getWindowHeight() {
      if (typeof window !== 'undefined') {
        return window.innerHeight
      }
    },
    convertStyle() {
      const windowHeight = this.getWindowHeight()
      const usedStyle = { height: '100vvh' }
      const convertedStyle = {}
      Object.keys(usedStyle).forEach((key) => {
        convertedStyle[key] =
          typeof usedStyle[key] === 'string'
            ? this.replaceVvhWithPx(usedStyle[key], windowHeight)
            : usedStyle[key]
      })
      return convertedStyle
    },
    replaceVvhWithPx(propertyStringValue, windowHeight) {
      const vvhRegex = /(\d+(\.\d*)?)vvh(?!\w)/g
      return propertyStringValue.replace(vvhRegex, (_, vvh) => {
        return `${(windowHeight * parseFloat(vvh)) / 100}px`
      })
    },
    updateStyle() {
      this.forceRecompute++
    }
  },
  mounted() {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', this.updateStyle)
    }
  },
  beforeDestroy() {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', this.updateStyle)
    }
  }
}
</script>

<style lang="scss">
.route-enter-active {
  transition-duration: 0.4s;
  transition-property: opacity;
  transition-timing-function: ease;
}
.route-enter,
.route-leave-active {
  opacity: 0;
}
</style>
