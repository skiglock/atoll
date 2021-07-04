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
              <li class="nav__list-item" @click="open = !open">
                <a href class="nav__list-link">Продукты</a>
                <ul v-if="open" class="dropdown">
                  <li class="dropdown__item">
                    <g-link to="/" class="dropdown__link"
                      >Аудит и стратегия развития amoCRM</g-link
                    >
                    <p class="dropdown__desc">
                      Закажите анализ текущей системы и карту развития вашей CRM
                    </p>
                  </li>
                  <li class="dropdown__item">
                    <g-link to="/" class="dropdown__link"
                      >Внедрение amoCRM</g-link
                    >
                    <p class="dropdown__desc">
                      Доверьте настройку amoCRM и обучение сотрудников
                      профессионалам
                    </p>
                  </li>
                  <li class="dropdown__item">
                    <g-link to="/" class="dropdown__link"
                      >Сопровождение и развитие amoCRM</g-link
                    >
                    <p class="dropdown__desc">
                      Получите в распоряжение команду экспертов для ежемесячного
                      развития CRM
                    </p>
                  </li>
                </ul>
              </li>
              <li class="nav__list-item">
                <g-link to="/about" class="nav__list-link">О команде</g-link>
              </li>
              <li class="nav__list-item">
                <g-link to="/blog" class="nav__list-link">Блог</g-link>
              </li>
              <li class="nav__list-item">
                <g-link to="/contacts" class="nav__list-link">Контакты</g-link>
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
  name: 'AppHeader',
  data() {
    return {
      open: false
    }
  }
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
            z-index: 1;
          }
        }
      }
    }
  }
}

.dropdown {
  z-index: 2;
  position: absolute;
  top: 80px;
  left: 360px;
  display: flex;
  flex-direction: column;
  border-radius: 28px;
  background-color: $white_color;
  width: 394px;
  height: 283px;
  border: 1px solid rgba($black_color, 0.18);
  padding: 33px 50px;
  &__item + &__item {
    margin-top: 20px;
  }
  &__item {
    position: relative;
    &::before {
      position: absolute;
      content: '';
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: rgb(54, 54, 54);
      top: 20px;
      left: -20px;
      z-index: 3;
    }
    flex-grow: 1;
    width: 100%;
  }
  &__desc {
    margin-top: 3px;
    font-size: 10px;
    color: rgba(24, 24, 24, 0.52);
    line-height: 1.684;
    font-weight: $font_light;
  }
  &__link {
    font-size: 13px;
    color: rgb(24, 24, 24);
    line-height: 1.295;
    font-weight: $font_semibold;
  }
}
</style>
