<template>
  <Layout>
    <section class="contacts-page">
      <div class="container">
        <h1 class="contacts-page__title">{{ $page.contacts.title }}</h1>
        <div class="contacts-page__body">
          <div class="contacts-page__left">
            <div class="contacts-page__connect">
              <div class="contacts-page__location">
                Адрес: Чебоксары, ул. Мичмана Павлова 8А
              </div>

              <div class="contacts-page__number">
                Телефон: +7 (495) 278 18 02
              </div>
              <div class="contacts-page__mail">Почта: hello@atollon.ru</div>
            </div>
          </div>
          <div class="contacts-page__right">
            <div class="contacts-page__form">
              <h1 class="contacts-page__form-title">Свяжитесь с нами!</h1>
              <div class="contacts-page__block">
                <main-form />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  contacts (id: $id) {
    title
  }
}
</page-query>

<script>
import MainForm from '@/components/Common/MainForm'

export default {
  components: {
    MainForm
  },
  metaInfo() {
    return {
      title: this.$page.contacts.title
    }
  }
}
</script>

<style lang="scss">
.contacts-page {
  &__title {
    font-size: 21px;
    color: #232323;
    font-weight: $font_semibold;
    text-align: center;
  }
  &__body {
    margin-top: 57px;
    display: flex;
    justify-content: space-between;
  }
  &__left {
    width: 45%;
  }
  &__right {
    margin-left: 70px;

    width: 55%;
  }
  &__connect {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  &__location,
  &__number,
  &__mail {
    color: #181818;
    font-size: 26px;
    font-weight: $font_regular;
    line-height: 1.263;
    font-weight: $font_semibold;
  }
  &__form {
    &-title {
      text-align: center;
      margin-bottom: 19px;
      font-size: 20px;
      color: #181818;
      font-weight: $font_medium;
    }
  }
  &__block {
    padding: 50px;
    background-color: $white_color;
    border-radius: 36px;
    box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.23);
    &-title {
    }
  }
}
</style>
