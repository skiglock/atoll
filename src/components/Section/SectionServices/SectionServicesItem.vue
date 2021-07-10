<template>
  <div class="card services__card">
    <h1 class="title services__card-title">
      {{ title }}
    </h1>
    <span class="separator"></span>

    <div class="services__card-body">
      <p class="text services__card-text">
        {{ desc }}
      </p>
      <main-button :to="url" class="services__card-btn">Подробнее</main-button>
    </div>
  </div>
</template>

<script>
import MainButton from '@/components/Common/MainButton.vue'
export default {
  name: 'MainServicesCard',
  components: {
    MainButton
  },
  props: {
    title: String,
    desc: String,
    url: String
  }
}
</script>

<style lang="scss">
.services {
  &__card {
    border-radius: 25px;
    background-color: $white_color;
    min-height: 280px;
    min-width: 260px;
    @media screen and (max-width: 320px) {
      min-width: 100%;
    }
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    &-title {
      min-height: 110px;
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
      padding: 37px;
      min-height: 210px;
    }
  }
}
</style>
