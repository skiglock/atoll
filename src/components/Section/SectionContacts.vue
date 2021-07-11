<template>
  <section class="section contacts">
    <div class="container">
      <h1 class="title">{{ content.title }}</h1>
      <div class="contacts__inner">
        <div class="row">
          <div class="column column-50">
            <h1 class="title">Отдел продаж:</h1>
            <p class="text">
              {{ this.$store.state.settings.allSettings.mail }}
            </p>
          </div>
          <div class="column column-50">
            <h1 class="title">Телефон:</h1>
            <p class="text">
              {{ this.$store.state.settings.allSettings.phone }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SectionContacts',
  props: {
    content: Object
  }
}
</script>

<style lang="scss">
.contacts {
  &__inner {
    margin-top: 71px;
    @media screen and (max-width: 576px) {
      text-align: center;
    }
  }
  .title {
    @media screen and (max-width: 576px) {
      text-align: center;
    }
  }
  .text {
    margin-top: 15px;
  }
}
</style>
