<template>
  <div class="results__item" :style="{ backgroundImage: `url(${img})` }">
    <div class="results__item-inner">
      <div class="results__item-logo">
        <g-image :src="logo" />
      </div>
      <p class="text results__item-text">
        {{ desc }}
      </p>
      <main-button :to="url" class="results__item-btn">Подробнее</main-button>
    </div>
  </div>
</template>

<script>
import MainButton from '@/components/Common/MainButton'

export default {
  name: 'SectionResultsItem',
  props: {
    logo: Object,
    desc: String,
    img: String,
    url: String
  },
  components: { MainButton }
}
</script>

<style lang="scss">
.results {
  &__item + &__item {
    margin-top: 40px;
  }
  &__item {
    @media screen and (max-width: 768px) {
      height: 400px;
    }
    @media screen and (max-width: 576px) {
      height: 300px;
    }
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    border-radius: 30px;
    margin-top: 32px;
    max-width: 863px;
    height: 644px;
    box-shadow: 0px 4px 7px 0px rgba(0, 0, 0, 0.17);
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    &::after {
      content: '';
      position: absolute;
      z-index: 10;
      background-color: $white_color;
      top: 102px;
      right: 313px;
      border-radius: 50%;
      width: 940px;
      height: 567px;
      img {
        border-radius: 30px;
      }
      @media screen and (max-width: 768px) {
        top: 20px;
        right: 193px;
        width: 640px;
        height: 405px;
      }
      @media screen and (max-width: 576px) {
        top: 20px;
        right: 40px;
        height: 305px;
      }
      @media screen and (max-width: 460px) {
        top: 20px;
        right: 10px;
      }
      @media screen and (max-width: 320px) {
        top: 30px;
        right: 0;
      }
    }

    &-inner {
      z-index: 11;
      margin-left: 12px;
      width: 38%;
      @media screen and (max-width: 768px) {
        width: 300px;
      }
      @media screen and (max-width: 460px) {
        width: 280px;
      }
    }
    &-logo {
      max-width: 156px;
      max-height: 37px;
      @media screen and (max-width: 460px) {
        max-width: 100px;
        max-height: 37px;
      }
    }
    &-text {
      margin-top: 44px;
      line-height: 2;
      @media screen and (max-width: 768px) {
        line-height: 1;
      }
      @media screen and (max-width: 576px) {
        margin-top: 14px;
      }
      @media screen and (max-width: 460px) {
        width: 76%;
      }
      @media screen and (max-width: 320px) {
        width: 70%;
      }
    }
    &-btn {
      margin-top: 41px;
      @media screen and (max-width: 576px) {
        margin-top: 14px;
      }
    }
  }
}
</style>
