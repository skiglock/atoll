<template>
  <div class="card services__card">
    <h1 class="title services__card-title">
      Аудит и стратегия развития amoCRM
    </h1>
    <span class="separator"></span>

    <div class="services__card-body">
      <p class="text services__card-text">
        Проанализируем вашу систему продажи составим карту внедрения или
        развития вашей amoCRM
      </p>
      <main-button class="services__card-btn">Подробнее</main-button>
    </div>
  </div>
</template>

<script>
import MainButton from '@/components/Common/MainButton.vue'
export default {
  name: 'MainServicesCard',
  components: {
    MainButton
  }
}
</script>

<style lang="scss">
.services {
  &__card {
    border-radius: 25px;
    background-color: $white_color;
    min-height: 264px;
    min-width: 260px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    &-title {
      min-height: 100px;
      padding: 30px;
      text-align: center;
      font-weight: $font_medium;
    }
    &-text {
      color: #1f1f1f;
      font-weight: $font_light;
    }
    &-btn {
      margin-top: 10px;
      font-size: 11px;
      text-align: center;
      height: 30px;
      align-self: flex-end;
    }
    &-body {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      padding: 27px;
    }
  }
}
</style>
