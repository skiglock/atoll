<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <div class="header__top">
          <a class="header__logo" href="#" title="Atoll">
            <img src="@/assets/img/logo-header.png" alt="" />
          </a>
          <nav class="nav">
            <ul class="nav__list">
              <li class="nav__list-item">
                <a href="#" class="nav__list-link">Продукты</a>
              </li>
              <li class="nav__list-item">
                <a href="#" class="nav__list-link">О команде</a>
              </li>
              <li class="nav__list-item">
                <a href="#" class="nav__list-link">Блог</a>
              </li>
              <li class="nav__list-item">
                <a href="#" class="nav__list-link">Контакты</a>
              </li>
            </ul>
          </nav>
        </div>
        <div class="header__body">
          <img class="header__body-img" src="@/assets/img/head.png" />
          <div class="header__body-title">
            <h1>Трансформация отдела продаж на основе amoCRM</h1>
          </div>
          <button class="btn header__body-btn">Подключить</button>
        </div>
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

  &__body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 82px 20px;
    height: calc(100vh - 112px);
    &-img {
      max-width: 811px;
      @media screen and (max-height: 992px) {
        max-width: 70%;
      }
    }
    &-title {
      align-items: center;
      h1 {
        line-height: 1.261;
        max-width: 475px;
        color: #222222;
        font-weight: $font_medium;
        font-size: 30px;
        text-align: center;
        @media screen and (max-height: 992px) {
          font-size: 25px;
        }
      }
    }
    &-btn {
    }
    @media screen and (max-height: 992px) {
      padding: 20px;
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
