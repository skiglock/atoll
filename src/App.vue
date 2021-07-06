<template>
  <div class="wrapper">
    <app-header :style="{ height: getWindowHeight + 'px' }">
      <transition name="route">
        <header-body
          :style="{ height: getBodyWindowHeight + 'px' }"
          v-if="$route.path === '/'"
        />
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
  data() {
    return {
      windowHeight: null
    }
  },
  components: {
    AppHeader,
    AppFooter,
    HeaderBody
  },
  computed: {
    getWindowHeight() {
      return this.windowHeight
    },
    getBodyWindowHeight() {
      return this.windowHeight - 130
    }
  },
  mounted() {
    if (typeof window !== 'undefined') {
      this.windowHeight = window.innerHeight
      this.$nextTick(() => {
        window.onresize = () => {
          this.windowHeight = window.innerHeight
        }
      })
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
