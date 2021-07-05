<template>
  <nav class="navbar">
    <g-link class="navbar__logo" to="/" title="Atoll">
      <g-image src="@/assets/img/logo-header.png" alt="" />
    </g-link>
    <ul class="navbar__list">
      <li class="navbar__list-item" @click="open = !open">
        <a href class="navbar__list-link">Продукты</a>
        <drop-down v-if="open" />
      </li>
      <li class="navbar__list-item">
        <g-link to="/about" class="navbar__list-link">О команде</g-link>
      </li>
      <li class="navbar__list-item">
        <g-link to="/blog" class="navbar__list-link">Блог</g-link>
      </li>
      <li class="navbar__list-item">
        <g-link to="/contacts" class="navbar__list-link">Контакты</g-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import DropDown from '@/components/Header/HeaderNavbar/DropDown/DropDown'
export default {
  name: 'HeaderNavbar',
  data() {
    return {
      open: false
    }
  },
  components: {
    DropDown
  }
}
</script>

<style lang="scss">
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-flow: row nowrap;
  &__logo {
    display: inline-block;
    width: 113px;
    height: 33px;
    margin-right: 188px;
  }
  &__list {
    display: flex;
    flex-direction: row;
    flex: 1;
    justify-content: space-between;
    @media screen and (max-width: 768px) {
      display: none;
    }
    &-item {
    }
    &-link {
      color: $text_color;
      font-size: 16px;
      letter-spacing: 2.269px;
      font-weight: $font_medium;
      position: relative;
      &:hover {
        &::after {
          position: absolute;
          content: '';
          width: 100%;
          height: 5px;
          background-color: $main_color;
          top: 25px;
          left: 0;
          right: 0;
          bottom: 0;
        }
      }
    }
  }
}
</style>
