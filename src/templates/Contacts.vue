<template>
  <Layout>
    <h1 class="page-title">{{ $page.contacts.title }}</h1>
    <section class="contacts-page">
      <div class="container">
        <div class="contacts-page__body">
          <div class="row">
            <div class="column column-50 contacts-page--column">
              <div class="contacts-page__adress">
                <h1 class="title">Адрес:</h1>
                <p class="text">
                  {{ this.$store.state.settings.allSettings.adress }}
                </p>
              </div>
              <div class="contacts-page__phone">
                <h1 class="title">Телефон:</h1>
                <p class="text">
                  {{ this.$store.state.settings.allSettings.phone }}
                </p>
              </div>
              <div class="contacts-page__mail">
                <h1 class="title">Почта:</h1>
                <p class="text">
                  {{ this.$store.state.settings.allSettings.mail }}
                </p>
              </div>
            </div>
            <div class="column column-50">
              <div class="contacts-page__form">
                <h1 class="contacts-page__form-title title">
                  Свяжитесь с нами!
                </h1>
                <div class="card contacts-page__card">
                  <main-form :title="$page.contacts.title" />
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
    @media screen and (max-width: 576px) {
      margin-top: 30px;
    }
  }
  &__form {
    @media screen and (max-width: 576px) {
      margin-top: 30px;
    }
    &-title {
      text-align: center;
      margin-bottom: 19px;
      @media screen and (max-width: 576px) {
        margin-bottom: 0;
      }
    }
  }
  &__card {
    padding: 50px;
    &-title {
    }
  }
  &__adress,
  &__phone,
  &__mail {
    @media screen and (max-width: 576px) {
      text-align: center;
      margin-top: 20px;
    }
  }
}
</style>
