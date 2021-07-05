<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <div class="header__top">
          <header-navbar />
        </div>
        <slot />
      </div>
    </div>
  </header>
</template>

<script>
import HeaderNavbar from '@/components/Header/HeaderNavbar/HeaderNavbar'
export default {
  name: 'AppHeader',
  components: {
    HeaderNavbar
  }
}
</script>

<style lang="scss">
.header {
  min-height: 100vh;
  min-height: -webkit-fill-available;
  &__inner {
  }
  &__top {
    height: 130px;
    padding: 53px 10px 77px;
  }
}
</style>
