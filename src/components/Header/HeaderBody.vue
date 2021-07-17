<template>
  <div class="container">
    <div class="header__body">
      <div class="header__body-img">
        <g-image src="@/assets/img/head.png" />
      </div>
      <div class="header__body-description">
        <h1 class="title">Трансформация отдела продаж на основе amoCRM</h1>
        <main-button class="header__body-btn" @click.native="setModalConnect"
          >Подключить</main-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import MainButton from '@/components/Common/MainButton'

export default {
  name: 'HeaderBody',
  components: {
    MainButton
  },
  methods: {
    setModalConnect() {
      this.$store.commit('setModalTitle', 'подключение')
      this.$store.commit('setIsModalOpen', true)
    }
  }
}
</script>

<style lang="scss">
.header {
  &__body {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding-bottom: 30px;
    &-img {
      max-width: 800px;
      max-height: 511px;
      @media (max-height: 900px) and (min-width: 1024px) {
        max-width: 550px;
      }
      @media (max-height: 700px) and (min-width: 1024px) {
        max-width: 450px;
      }
    }
    &-description {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-top: 30px;
      .title {
        text-align: center;
        max-width: 475px;
        font-weight: $font_medium;
        @media screen and (min-height: 1080px) {
          font-size: 30px;
        }
      }
    }

    &-btn {
      margin-top: 40px;
    }
  }
}
</style>
