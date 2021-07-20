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
    <transition name="fade">
      <main-modal v-if="isModal" @close="closeModal" />
    </transition>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader'
import AppFooter from '@/components/AppFooter'
import HeaderBody from '@/components/Header/HeaderBody'
import Settings from '@/data/global_settings.yaml'
import MainModal from '@/components/Common/MainModal'
export default {
  components: {
    AppHeader,
    AppFooter,
    HeaderBody,
    MainModal
  },
  computed: {
    Settings() {
      return Settings
    },
    isModal() {
      return this.$store.state.modal.isModalOpen
    }
  },
  methods: {
    closeModal() {
      this.$store.commit('setIsModalOpen', false)
    }
  },
  watch: {
    isModal() {
      if (this.isModal) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = ''
      }
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
