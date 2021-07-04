<template>
  <section class="order">
    <div class="container">
      <div class="order__inner">
        <div class="row">
          <div class="column">
            <h1 class="order__title">Заказать интеграцию</h1>
            <p class="order__desc">
              Менеджер узнает про вашу задачу и подскажет что делать дальше
            </p>
          </div>
          <div class="column">
            <main-form :style="{ marginLeft: '114px' }" />
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
  &__desc {
    text-align: right;
  }
  &__title {
    font-size: 28px;
    color: #1b1b1b;
    font-weight: $font_bold;
  }
  &__desc {
    font-size: 18px;
    color: #1b1b1b;
    font-weight: $font_regular;
    margin-top: 21px;
  }
}
</style>
