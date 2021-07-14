<template>
  <div class="footer__menu">
    <h1 class="footer__menu-title">Продукт</h1>
    <ul class="footer__menu-list">
      <li class="footer__menu-item">
        <a href="#" class="footer__menu-link">Atollon</a>
      </li>
      <li class="footer__menu-item">
        <a href="#" class="footer__menu-link">Блог</a>
      </li>
      <li class="footer__menu-item">
        <a href="#" class="footer__menu-link">О команде</a>
      </li>
      <li class="footer__menu-item">
        <a href="#" class="footer__menu-link">Контакты</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'FooterMenu'
}
</script>

<style lang="scss">
.footer {
  &__menu {
    @media screen and (max-width: 576px) {
      margin-top: 20px;
    }
    &-title {
      color: #1b1b1b;
      font-size: 20px;
      margin-bottom: 29px;
      @media screen and (max-width: 576px) {
        font-size: 35px;
      }
    }
    &-item {
      margin-top: 30px;
    }
    &-link {
      font-size: 18px;
      color: #1b1b1b;
      @media screen and (max-width: 576px) {
        font-size: 30px;
      }
      font-weight: $font_regular;
      &:hover {
        color: $main_color;
      }
    }
  }
}
</style>
