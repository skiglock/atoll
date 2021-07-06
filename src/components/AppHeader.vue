<template>
  <header class="header">
    <div class="container">
      <div class="header__top">
        <header-navbar />
      </div>
    </div>
    <slot />
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
  &__inner {
  }
  &__top {
    padding: 30px 10px 67px;
  }
  &__body {
    min-height: calc(100vh - 130px);
  }
}
</style>
