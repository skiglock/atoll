<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <div class="header__top">
          <g-link class="header__logo" to="/" title="Atoll">
            <g-image src="@/assets/img/logo-header.png" alt="" />
          </g-link>
          <nav class="nav">
            <ul class="nav__list">
              <li class="nav__list-item">
                <g-link to="/" class="nav__list-link">Продукты</g-link>
              </li>
              <li class="nav__list-item">
                <g-link to="/about" class="nav__list-link">О команде</g-link>
              </li>
              <li class="nav__list-item">
                <g-link to="/blog" class="nav__list-link">Блог</g-link>
              </li>
              <li class="nav__list-item">
                <g-link to="/" class="nav__list-link">Контакты</g-link>
              </li>
            </ul>
          </nav>
        </div>
        <slot />
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>

<style lang="scss">
.header {
  min-height: 100vh;
  min-height: -webkit-fill-available;
  &__inner {
  }
  &__logo {
    max-width: 113px;
    max-height: 33px;
  }
  &__top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 112px;
    padding: 54px 10px 22px;
    @media screen and (max-height: 992px) {
      padding-top: 10px;
      padding-bottom: 10px;
    }
  }

  .nav {
    &__list {
      &-item {
        margin-right: 75px;
      }
      display: flex;
      &-link {
        color: $text_color;
        font-size: 18px;
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
}
</style>
