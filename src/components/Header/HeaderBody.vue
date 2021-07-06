<template>
  <div class="container">
    <div class="header__body">
      <img class="header__body-img" src="@/assets/img/head.png" />
      <div class="header__body-title">
        <h1 class="title">Трансформация отдела продаж на основе amoCRM</h1>
      </div>
      <main-button class="header__body-btn">Подключить</main-button>
    </div>
  </div>
</template>

<script>
import MainButton from '@/components/Common/MainButton.vue'

export default {
  name: 'HeaderBody',
  components: {
    MainButton
  }
}
</script>

<style lang="scss">
.header {
  &__body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding-bottom: 30px;
    @media screen and (max-width: 576px) {
      justify-content: space-evenly;
    }
    @media screen and (min-height: 1080px) {
      justify-content: space-evenly;
    }
    &-img {
      max-width: 811px;
      max-height: 511px;
      @media screen and (max-height: 900px) {
        max-width: 711px;
      }
      @media screen and (max-height: 800px) {
        max-width: 611px;
      }
      @media screen and (max-height: 700px) {
        max-width: 511px;
      }
      @media screen and (max-height: 600px) {
        max-width: 411px;
      }
    }
    &-title {
      .title {
        max-width: 475px;
        font-weight: $font_medium;
        text-align: center;
        @media screen and (min-height: 1080px) {
          font-size: 30px;
        }
      }
    }
    &-btn {
    }
  }
}
</style>
