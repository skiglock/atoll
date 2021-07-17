<template>
  <div class="card plans__item">
    <h1 class="title plans__item-title">{{ title }}</h1>
    <p class="text plans__item-text">
      {{ desc }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'SectionPlansItem',
  props: {
    title: String,
    desc: String
  }
}
</script>

<style lang="scss">
.plans {
  &__item {
    cursor: pointer;
    max-width: 100%;
    min-height: 280px;
    border-radius: 26px;
    background-color: $white_color;
    box-shadow: 0px 4px 7px 0px rgba($black_color, 0.17);
    padding: 20px 20px 26px;

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
