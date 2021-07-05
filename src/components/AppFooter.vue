<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__inner">
        <div class="row">
          <div class="column column-30">
            <div class="footer__about">
              <img
                class="footer__logo"
                src="@/assets/img/logo-footer.png"
                alt=""
              />
              <p class="footer__copyright">© 2021 Atollon</p>
              <div class="footer__contacts">
                <a href="tel:+74952781802" class="footer__contacts-number"
                  >+7 (495) 278 18 02</a
                >
                <a href="mailto:hello@atollon.ru" class="footer__contacts-mail"
                  >hello@atollon.ru</a
                >
              </div>
            </div>
          </div>
          <div class="column column-30">
            <div class="footer__menu">
              <h1 class="title footer__menu-title">Продукт</h1>
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
          </div>
          <div class="column column-30">
            <div class="footer__menu">
              <h1 class="title footer__menu-title">Интеграции</h1>
              <ul class="footer__menu-list">
                <li class="footer__menu-item">
                  <a href="#" class="footer__menu-link">API</a>
                </li>
                <li class="footer__menu-item">
                  <a href="#" class="footer__menu-link">Webhooks</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="footer__docs">
          <div class="row">
            <div class="column column-30">
              <a href="#" class="footer__docs-link"
                >Политика конфедициальности</a
              >
            </div>
            <div class="column column-30">
              <a href="#" class="footer__docs-link"
                >Политика возврата средств</a
              >
            </div>
            <div class="column column-30">
              <a href="#" class="footer__docs-link">Защита от мошенничества</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>

<style lang="scss">
.footer {
  margin-top: 222px;
  &__inner {
    padding-top: 25px;
  }
  &__logo {
    width: 98px;
  }
  &__copyright {
    margin-top: 12px;
  }
  &__contacts {
    display: flex;
    flex-direction: column;
    margin-top: 28px;
    &-number {
      font-size: 15px;
      color: #232323;
      font-weight: $font_semibold;
    }
    &-mail {
      margin-top: 13px;
      font-size: 14px;
      color: #1b1b1b;
      font-weight: $font_light;
    }
  }
  &__menu {
    &-title {
      color: #1b1b1b;
      margin-bottom: 29px;
    }
    &-item {
      margin-top: 30px;
    }
    &-link {
      font-size: 22px;
      color: #1b1b1b;
      font-weight: $font_regular;
      &:hover {
        color: $main_color;
      }
    }
  }
  &__docs {
    margin-top: 69px;
    &-link {
      display: flex;
      justify-content: center;
      font-weight: $font_regular;
      color: #1b1b1b;
      font-size: 15px;
      &:hover {
        color: $main_color;
      }
    }
  }
}
</style>
