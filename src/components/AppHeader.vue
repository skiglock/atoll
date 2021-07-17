<template>
  <header class="header">
    <div class="container">
      <div class="header__top">
        <header-navbar :menu="MainMenu" />
        <transition name="fade">
          <header-sidebar
            :menu="MainMenu"
            v-if="sidebar"
            @closeSidebar="sidebar = false"
          />
        </transition>

        <header-burger @click.native="sidebar = !sidebar" :active="sidebar" />
      </div>
    </div>
    <slot />
  </header>
</template>

<script>
import HeaderNavbar from '@/components/Header/HeaderNavbar/HeaderNavbar'
import HeaderSidebar from '@/components/Header/HeaderSidebar'
import HeaderBurger from '@/components/Header/HeaderBurger'
import MainMenu from '@/data/menu_settings.yaml'

export default {
  name: 'AppHeader',
  components: {
    HeaderNavbar,
    HeaderSidebar,
    HeaderBurger
  },
  data() {
    return {
      sidebar: false
    }
  },
  watch: {
    sidebar() {
      if (this.sidebar) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = null
      }
    }
  },
  computed: {
    MainMenu() {
      return MainMenu.menu_list
    }
  }
}
</script>

<style lang="scss">
.header {
  min-height: 100vh;

  &__inner {
  }
  &__top {
    padding: 30px 10px 67px;
    @media screen and (max-width: 768px) {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    @media screen and (max-width: 576px) {
      padding-left: 5px;
      padding-right: 5px;
    }
  }
  &__body {
    min-height: calc(100vh - 130px);
  }
}
</style>
