<template>
  <nav class="navbar">
    <g-link class="navbar__logo" to="/" title="Atoll">
      <g-image src="@/assets/img/logo-header.png" alt="" />
    </g-link>
    <ul class="navbar__list">
      <header-drop-down />
      <li class="navbar__list-item" v-for="item in menu" :key="item.id">
        <g-link
          :to="item.link"
          class="navbar__list-link"
          active-class="navbar__list-link--active"
          >{{ item.title }}</g-link
        >
      </li>
    </ul>
  </nav>
</template>

<script>
import HeaderDropDown from '@/components/Header/HeaderDropDown/HeaderDropDown'
export default {
  name: 'HeaderNavbar',
  props: {
    menu: Array
  },
  components: {
    HeaderDropDown
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
    max-width: 113px;
    max-height: 33px;
    margin-right: 188px;
    @media screen and (max-width: 992px) {
      margin-right: 130px;
    }
    @media screen and (max-width: 576px) {
      width: 100px;
    }
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
      &--active {
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
