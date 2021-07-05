<template>
  <div class="cases-page__item">
    <div class="column column-50">
      <div class="cases-page__item-img">
        <g-image src="@/assets/img/cases/delight.png" />
      </div>
    </div>

    <div class="column column-50 cases-page--column">
      <div class="cases-page__item-client">
        <g-image src="@/assets/img/clients/delight.png" />
      </div>
      <h2 class="title cases-page__item-title">Digital-агенство</h2>
      <p class="text cases-page__item-text">
        Разработка виджета для обработки более 900 заявок в amoCRM.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CasesItem'
}
</script>

<style lang="scss">
.cases-page {
  &__item + &__item {
    margin-top: 100px;
  }
  &--column {
    margin-left: 49px;
  }
  &__item {
    cursor: pointer;
    display: flex;

    &-img {
      max-width: 413px;
      max-height: 221px;
      border-radius: 20px;
      img {
        border-radius: 20px;
      }
    }
    &-client {
      max-width: 194px;
      max-height: 48px;
    }
    &-title {
      margin-top: 9px;
      font-weight: $font_regular;
    }
    &-text {
      margin-top: 30px;
    }
  }
}
</style>
