<template>
  <Layout>
    <section class="contacts-page">
      <div class="container">
        <h1 class="title contacts-page__title">{{ $page.contacts.title }}</h1>
        <div class="contacts-page__body">
          <div class="row">
            <div class="column column-50 contacts-page--column">
              <div class="contacts-page__adress">
                <h1 class="title">Адрес:</h1>
                <p class="text">Чебоксары, ул. Мичмана Павлова 8А</p>
              </div>
              <div class="contacts-page__phone">
                <h1 class="title">Телефон:</h1>
                <p class="text">+7 (495) 278 18 02</p>
              </div>
              <div class="contacts-page__mail">
                <h1 class="title">Почта:</h1>
                <p class="text">hello@atollon.ru</p>
              </div>
            </div>
            <div class="column column-50">
              <div class="contacts-page__form">
                <h1 class="contacts-page__form-title">Свяжитесь с нами!</h1>
                <div class="card contacts-page__card">
                  <main-form />
                </div>
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
    text-align: center;
  }
  &--column {
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
  }
  &__body {
    margin-top: 57px;
  }
  &__connect {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: space-between;
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
  &__card {
    padding: 50px;
    &-title {
    }
  }
}
</style>
