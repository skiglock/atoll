<template>
  <div class="header__body">
    <img class="header__body-img" src="@/assets/img/head.png" />
    <div class="header__body-title">
      <h1>Трансформация отдела продаж на основе amoCRM</h1>
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
    height: calc(100vh - 112px);
    &-img {
      max-width: 811px;
      @media screen and (max-height: 992px) {
        max-width: 70%;
      }
    }
    &-title {
      align-items: center;
      h1 {
        line-height: 1.261;
        max-width: 475px;
        color: #222222;
        font-weight: $font_medium;
        font-size: 30px;
        text-align: center;
        @media screen and (max-height: 992px) {
          font-size: 25px;
        }
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
