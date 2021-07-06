<template>
  <section class="block contacts-block">
    <div class="container">
      <h1 class="title">Контакты</h1>
      <div class="contacts-block__inner">
        <div class="row">
          <div class="column column-50">
            <h1 class="title">Отдел продаж:</h1>
            <p class="text">hello@atollon.ru</p>
          </div>
          <div class="column column-50">
            <h1 class="title">Телефон:</h1>
            <p class="text">+7 (495) 278 18 02</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SectionContacts'
}
</script>

<style lang="scss">
.contacts-block {
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
