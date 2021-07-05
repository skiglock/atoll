<template>
  <div class="plans-block__item">
    <h1 class="title plans-block__item-title">Грамотная архитектура</h1>
    <p class="plans-block__item-desc">
      Построим масштабируемую архитектуру отдела продаж на базе amoCRM
    </p>
  </div>
</template>

<script>
export default {
  name: 'PlansBlockItem'
}
</script>

<style lang="scss">
.plans-block {
  &__item {
    min-width: 303px;
    min-height: 236px;
    border-radius: 26px;
    background-color: $white_color;
    box-shadow: 0px 4px 7px 0px rgba($black_color, 0.17);
    padding: 40px 60px 60px 26px;
    &-title {
      font-weight: $font_medium;
    }
    &-desc {
      margin-top: 20px;
      font-size: 17px;
      font-weight: $font_regular;
      color: #232323;
    }
  }
}
</style>
