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
            <footer-menu />
          </div>
          <div class="column column-30">
            <footer-menu />
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
import FooterMenu from '@/components/Footer/FooterMenu'
export default {
  name: 'AppFooter',
  components: {
    FooterMenu
  }
}
</script>

<style lang="scss">
.footer {
  margin-top: 180px;
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
  &__docs {
    margin-top: 69px;
    &-link {
      display: flex;
      justify-content: center;
      font-weight: $font_regular;
      color: #1b1b1b;
      font-size: 14px;
      &:hover {
        color: $main_color;
      }
    }
  }
}
</style>
