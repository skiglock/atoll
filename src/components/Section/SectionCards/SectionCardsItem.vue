<template>
  <div class="card cards__card">
    <span class="cards__card-icon"><g-image :src="img" /></span>
    <h1 class="title">{{ title }}</h1>
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
    max-width: 442px;
    min-height: 344px;
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
    }
  }
}
</style>
