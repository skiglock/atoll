<template>
  <div class="wrapper">
    <app-header>
      <header-body v-if="$route.path === '/'" />
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
import HeaderBody from './components/Header/HeaderBody'
export default {
  components: {
    AppHeader,
    AppFooter,
    HeaderBody
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
