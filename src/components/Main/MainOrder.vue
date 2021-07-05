<template>
  <section class="order">
    <div class="container">
      <div class="order__inner">
        <div class="row">
          <div class="column column-50">
            <h1 class="title order__title">Заказать интеграцию</h1>
            <p class="text order__text">
              Менеджер узнает про вашу задачу и подскажет что делать дальше
            </p>
          </div>
          <div class="column column-50">
            <main-form class="order__form" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import MainForm from '@/components/Common/MainForm'

export default {
  name: 'MainOrder',
  components: {
    MainForm
  }
}
</script>

<style lang="scss">
.order {
  margin-top: 222px;
  &__inner {
  }
  &__title,
  &__text {
    text-align: right;
  }
  &__text {
    margin-top: 21px;
  }
  &__form {
    margin-left: 122px;
    @media screen and (max-width: 992px) {
      margin-left: 80px;
    }
    @media screen and (max-width: 768px) {
      margin-left: 15px;
    }
    @media screen and (max-width: 576px) {
      margin-left: 0;
    }
  }
}
</style>
