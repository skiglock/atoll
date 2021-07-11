<template>
  <div class="wrapper">
    <app-header>
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
import Settings from '@/data/global_settings.yaml'
export default {
  components: {
    AppHeader,
    AppFooter,
    HeaderBody
  },
  computed: {
    Settings() {
      return Settings
    }
  },
  created() {
    this.$store.commit('setSettings', this.Settings)
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
