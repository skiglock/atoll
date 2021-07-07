<template>
  <div class="plans__item">
    <h1 class="title plans__item-title">Грамотная архитектура</h1>
    <p class="text plans__item-text">
      Построим масштабируемую архитектуру отдела продаж на базе amoCRM
    </p>
  </div>
</template>

<script>
export default {
  name: 'SectionPlansItem'
}
</script>

<style lang="scss">
.plans {
  &__item {
    max-width: 303px;
    min-height: 236px;
    border-radius: 26px;
    background-color: $white_color;
    box-shadow: 0px 4px 7px 0px rgba($black_color, 0.17);
    padding: 40px 60px 60px 26px;
    @media screen and (max-width: 576px) {
      padding: 40px 60px 60px 26px;
      max-width: 100%;
      min-height: 136px;
    }
    &-title {
      font-weight: $font_medium;
    }
    &-text {
      margin-top: 20px;
    }
  }
}
</style>
