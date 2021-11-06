<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__inner">
        <div class="row">
          <div class="column column-30">
            <div class="footer__about">
              <a class="footer__logo">Atoll</a>
              <p class="footer__copyright">© 2021 Atollon</p>
              <div class="footer__contacts">
                <a
                  :href="`tel:${$store.state.settings.allSettings.phone}`"
                  class="footer__contacts-number"
                  >{{ $store.state.settings.allSettings.phone }}</a
                >
                <a
                  :href="`mailto:${$store.state.settings.allSettings.mail}`"
                  class="footer__contacts-mail"
                  >{{ $store.state.settings.allSettings.mail }}</a
                >
              </div>
            </div>
          </div>
          <div class="column column-30 column--hidden">
            <footer-menu
              class="footer__menu--hidden"
              :title="MainMenu.title"
              :menu="MainMenu.menu_list"
            />
          </div>
          <div class="column column-30">
            <footer-menu
              :title="IntegrationMenu.title"
              :menu="IntegrationMenu.menu_list"
            />
          </div>
        </div>
        <div class="footer__docs">
          <div
            class="row"
            :style="{
              justifyContent: findDocsOnAllPages.length < 2 ? 'center' : ''
            }"
          >
            <div
              class="column column-30"
              v-for="{ node } in findDocsOnAllPages"
              :key="node.id"
            >
              <g-link
                :to="$getPath(node.path).replace('/pages', '')"
                class="footer__docs-link"
                >{{ node.title }}</g-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<static-query>
query {
  allPages {
    edges {
      node {
        id
        title
        path
      }
    }

  }
}
</static-query>

<script>
import IntegrationMenu from '@/data/integration_menu_settings.yaml'
import MainMenu from '@/data/menu_settings.yaml'
import FooterMenu from '@/components/Footer/FooterMenu'
export default {
  name: 'AppFooter',
  components: {
    FooterMenu
  },
  computed: {
    findDocsOnAllPages() {
      return this.$static.allPages.edges.filter((ap) =>
        this.$store.state.settings.allSettings.docs.some(
          (as) => as.link === ap.node.id
        )
      )
    },
    IntegrationMenu() {
      return IntegrationMenu
    },
    MainMenu() {
      return MainMenu
    }
  }
}
</script>

<style lang="scss">
.footer {
  .row {
    text-align: center;
  }
  margin-top: 150px;
  @media screen and (max-width: 576px) {
    margin-top: 80px;
  }
  &__about {
    @media screen and (max-width: 576px) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
  &__menu--hidden {
    @media screen and (max-width: 576px) {
      display: none;
    }
  }
  .column--hidden {
    @media screen and (max-width: 576px) {
      display: none;
    }
  }
  &__inner {
    padding-top: 25px;
    @media screen and (max-width: 576px) {
      display: flex;
      // align-items: center;
      flex-direction: column;
      justify-content: center;
      text-align: center;
    }
  }
  &__logo {
    font-family: 'Open Sans Bold';
    width: 98px;
    font-size: 45px;
    color: $black_color;
    font-weight: $font_bold;
  }
  &__copyright {
    margin-top: 12px;
    color: $text_color;
    font-size: 14px;
  }
  &__contacts {
    display: flex;
    flex-direction: column;
    margin-top: 28px;
    &-number {
      font-family: 'Open Sans Bold';
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
      @media screen and (max-width: 768px) {
        font-size: 11px;
      }
    }
  }
}
</style>
