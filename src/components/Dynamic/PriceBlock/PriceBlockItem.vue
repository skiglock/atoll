<template>
  <div class="price-block__list-item">
    <span class="price-block__list-number">1</span>
    <p class="text price-block__list-text">Личный чат с Аналитиком</p>
  </div>
</template>

<script>
export default {
  name: 'PriceBlockItem'
}
</script>

<style lang="scss">
.price-block {
  &__list {
    &-item + &-item {
      margin-top: 10px;
    }
    &-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      justify-content: center;
    }
    &-number {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      background-color: $white_color;
      box-shadow: 0px 3px 3px 0px rgba($black_color, 0.15);
      width: 45px;
      height: 45px;
      font-size: 18px;
      color: #131313;
      font-weight: $font_light;
    }
    &-text {
      width: 100%;
      margin-left: 22px;
    }
    &-title {
      margin-top: 18px;
      margin-bottom: 25px;
    }
  }
}
</style>
