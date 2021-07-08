<template>
  <div class="cases-page__item">
    <div class="column column-50">
      <div class="cases-page__item-img">
        <g-image :src="img" />
      </div>
    </div>

    <div class="column column-50 cases-page--column">
      <div class="cases-page__item-client">
        <g-image :src="logo" />
      </div>
      <g-link :to="$getPath(url)"
        ><h2 class="title cases-page__item-title">{{ title }}</h2></g-link
      >
      <p class="text cases-page__item-text">
        {{ desc }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CasesItem',
  props: {
    title: String,
    img: String,
    logo: String,
    desc: String,
    url: String
  }
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
    display: flex;

    &-img {
      max-width: 413px;
      height: 221px;
      border-radius: 20px;
      img {
        border-radius: 20px;
      }
    }
    &-client {
      max-width: 194px;
      height: 48px;
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
