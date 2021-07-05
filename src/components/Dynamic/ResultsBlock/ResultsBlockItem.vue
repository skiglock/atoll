<template>
  <div
    class="results-block__item"
    :style="{ backgroundImage: `url(${getResult})` }"
  >
    <div class="results-block__item-inner">
      <div class="results-block__item-logo">
        <g-image src="@/assets/img/clients/Mesto.png" />
      </div>
      <p class="text results-block__item-text">
        Спустя две недели мы полностью проанализировали процессы от прихода
        анкеты до приглашения или отклонения в сообщество. Также мы внедрили
        цифровую воронку, которая позволила волонтерам не забывать о заявках и
        вовремя их обрабатывать.
      </p>
      <main-button class="results-block__item-btn">Подробнее</main-button>
    </div>
  </div>
</template>

<script>
import MainButton from '@/components/Common/MainButton'
import notebook from '@/assets/img/dynamic/result.png'

export default {
  name: 'ResultsBlockItem',

  components: { MainButton },
  computed: {
    getResult() {
      return notebook
    }
  }
}
</script>

<style lang="scss">
.results-block {
  &__item + &__item {
    margin-bottom: 20px;
  }
  &__item {
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
      right: 373px;
      border-radius: 50%;
      width: 940px;
      height: 605px;
      img {
        border-radius: 30px;
      }
    }

    &-inner {
      z-index: 11;
      margin-left: 12px;
      width: 38%;
    }
    &-logo {
      max-width: 156px;
      max-height: 37px;
    }
    &-text {
      margin-top: 44px;
      line-height: 2;
    }
    &-btn {
      margin-top: 41px;
    }
  }
}
</style>
