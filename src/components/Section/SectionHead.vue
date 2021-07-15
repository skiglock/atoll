<template>
  <section class="section head">
    <div class="container">
      <div class="head__inner">
        <div class="row">
          <div class="column column-60">
            <h1 class="title head__title">
              {{ content.title }}
            </h1>
            <p class="text head__text">
              {{ content.desc }}
            </p>
          </div>
          <div class="column column-30">
            <div class="head__img">
              <g-image :src="content.img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SectionHead',
  props: {
    content: Object
  }
}
</script>

<style lang="scss">
.head {
  .row {
    align-items: center;
  }
  &__inner {
    @media screen and (max-width: 576px) {
      text-align: center;
    }
  }
  &__title {
    line-height: 1.147;
    text-align: left;
    @media screen and (max-width: 576px) {
      text-align: center;
    }
  }
  &__text {
    margin-top: 25px;
    font-size: 18px;
    line-height: 1.38;
  }
  &__img {
    max-width: 350px;
    position: relative;
    @media screen and (max-width: 576px) {
      max-width: 100%;
    }
    &::after {
      position: absolute;
      z-index: 11;
      content: '.';
      color: $main_color;
      max-width: 351px;
      max-height: 20px;
      background-color: $main_color;
      border-radius: 30px;
      left: -35px;
      right: 0;
      bottom: 0;
      @media screen and (max-width: 576px) {
        left: 15px;
      }
    }
  }
}
</style>
