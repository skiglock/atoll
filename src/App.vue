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
      <main-modal v-show="isModal" @close="closeModal" />
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
  },
  mounted() {
    let form = document.querySelector('.form')
    let amoFormScript = document.createElement('script')
    const amoForm =
      '!function(a,m,o,c,r,m){ao+c]=a[o+c]||{setMeta:function(p){this.params=(this.params||[]).concat([p])}},a[o+r]=a[o+r]||function(f){a[o+r].f=(a[o+r].f||[]).concat([f])},a[o+r}(window,0,"amo_forms_","params","load");'
    amoFormScript.innerHTML = amoForm
    form.appendChild(amoFormScript)
    let amoScript = document.createElement('script')
    amoScript.setAttribute('id', 'amoforms_script_809104')
    amoScript.setAttribute('async', 'async')
    amoScript.setAttribute('charset', 'utf-8')
    amoScript.setAttribute(
      'src',
      'https://forms.amocrm.ru/forms/assets/js/amoforms.js?1626680348'
    )
    form.appendChild(amoScript)
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
