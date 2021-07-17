<template>
  <div class="footer__menu">
    <h1 class="footer__menu-title">{{ title }}</h1>
    <ul class="footer__menu-list">
      <li class="footer__menu-item" v-for="item in menu" :key="item.id">
        <g-link :to="item.link" class="footer__menu-link">{{
          item.title
        }}</g-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'FooterMenu',
  props: {
    menu: Array,
    title: String
  }
}
</script>

<style lang="scss">
.footer {
  &__menu {
    @media screen and (max-width: 500px) {
      margin-top: 20px;
    }
    &-title {
      color: #1b1b1b;
      font-size: 20px;
      margin-bottom: 29px;
    }
    &-item {
      margin-top: 30px;
    }
    &-link {
      font-size: 18px;
      color: #1b1b1b;
      font-weight: $font_regular;
      &:hover {
        color: $main_color;
      }
    }
  }
}
</style>
