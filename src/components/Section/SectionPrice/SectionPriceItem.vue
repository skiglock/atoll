<template>
  <div class="price__list-item">
    <span class="price__list-number">{{ number }}</span>
    <p class="text price__list-text">{{ title }}</p>
  </div>
</template>

<script>
export default {
  name: 'SectionPriceItem',
  props: {
    title: String,
    number: Number
  }
}
</script>

<style lang="scss">
.price {
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
      width: 55px;
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
