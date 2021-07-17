<template>
  <div class="card cards__card">
    <span class="cards__card-icon"><g-image :src="img" /></span>
    <h1 class="cards__card-title">{{ title }}</h1>
    <p class="text cards__card-text">
      {{ desc }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'SectionCardsItem',
  props: {
    img: String,
    title: String,
    desc: String
  }
}
</script>

<style lang="scss">
.cards {
  @media screen and (max-width: 992px) {
    .column + .column {
      margin-bottom: 30px;
    }
  }
  @media screen and (max-width: 576px) {
    .column + .column {
      margin-top: 30px;
    }
  }
  &__card {
    position: relative;
    padding: 52px 66px 40px 69px;
    @media screen and (max-width: 576px) {
      padding: 40px;
    }
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 100%;
    min-height: 344px;
    @media screen and (max-width: 768px) {
      padding: 35px;
      min-height: 260px;
    }
    @media screen and (max-width: 576px) {
      padding: 20px;
    }
    &-icon {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      z-index: 12;
      width: 58px;
      height: 58px;
      border-radius: 50%;
      background-color: $white_color;
      box-shadow: 0px 2px 0px 0px rgba(0, 0, 0, 0.18);
      top: -22px;
      left: -5px;
      img {
        width: 42px;
        height: 42px;
        border-radius: 10%;
      }
    }
    &-text {
      margin-top: 33px;
      @media screen and (max-width: 768px) {
        margin-top: 13px;
      }
    }
    &-title {
      font-size: 20px;
      @media screen and (max-width: 768px) {
        font-size: 16px;
      }
    }
  }
}
</style>
