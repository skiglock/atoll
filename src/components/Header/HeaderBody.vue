<template>
  <div class="header__body">
    <img class="header__body-img" src="@/assets/img/head.png" />
    <div class="header__body-title">
      <h1 class="title">Трансформация отдела продаж на основе amoCRM</h1>
    </div>
    <main-button class="header__body-btn">Подключить</main-button>
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
    justify-content: space-between;
    padding: 82px 20px;
    min-height: calc(100vh - 130px);
    &-img {
      max-width: 811px;
      max-height: 511px;
      @media screen and (max-height: 992px) {
        max-width: 80%;
        max-height: 400px;
      }
    }
    &-title {
      align-items: center;
      .title {
        max-width: 475px;
        font-weight: $font_medium;
        text-align: center;
        font-size: 30px;
      }
    }
    &-btn {
    }
    @media screen and (max-height: 992px) {
      padding: 20px;
    }
  }
}
</style>
