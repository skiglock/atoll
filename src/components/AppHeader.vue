<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <div class="header__top">
          <nav class="navbar">
            <g-link class="navbar__logo" to="/" title="Atoll">
              <g-image src="@/assets/img/logo-header.png" alt="" />
            </g-link>
            <ul class="navbar__list">
              <li class="navbar__list-item" @click="open = !open">
                <a href class="navbar__list-link">Продукты</a>
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
                    <g-link
                      to="/effektivnoe-postroenie-voronki-prodazh-v-amocrm"
                      class="dropdown__link"
                      >Сопровождение и развитие amoCRM</g-link
                    >
                    <p class="dropdown__desc">
                      Получите в распоряжение команду экспертов для ежемесячного
                      развития CRM
                    </p>
                  </li>
                </ul>
              </li>
              <li class="navbar__list-item">
                <g-link to="/about" class="navbar__list-link">О команде</g-link>
              </li>
              <li class="navbar__list-item">
                <g-link to="/blog" class="navbar__list-link">Блог</g-link>
              </li>
              <li class="navbar__list-item">
                <g-link to="/contacts" class="navbar__list-link"
                  >Контакты</g-link
                >
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
  &__top {
    height: 130px;
    padding: 53px 10px 77px;
  }

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
            z-index: 1;
          }
        }
      }
    }
  }
}

.dropdown {
  z-index: 2;
  margin-top: 20px;
  margin-left: -115px;
  position: absolute;
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
