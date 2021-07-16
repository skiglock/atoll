<template>
  <section class="section head-three">
    <div class="container">
      <div class="head-three__inner">
        <h2 class="head-three__subtitle">{{ content.title }}</h2>
        <p class="text head-three__text">
          {{ content.desc }}
        </p>
        <div class="head-three__subcircle">
          <g-image :src="content.img" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SectionHeadThree',
  props: {
    content: Object
  }
}
</script>

<style lang="scss">
.head-three {
  &__inner {
  }
  text-align: center;
  &__subtitle {
    margin-top: 48px;
    color: #222222;
    font-size: 24px;
    font-weight: $font_semibold;
  }
  &__text {
    line-height: 1.547;
    margin-top: 14px;
  }
  &__subcircle {
    position: relative;
    &::after {
      position: absolute;
      content: '';
      z-index: 35;
      border: 20px solid $main_color;
      width: 100%;
      height: 45%;
      border-radius: 50% / 100%;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      border-top: 0;
      left: 0;
      right: 0;
      bottom: -8px;
      @media screen and (max-width: 768px) {
        border-width: 15px;
      }
      @media screen and (max-width: 576px) {
        border-width: 10px;
        bottom: -4px;
      }
    }
    img {
      border-radius: 50%;
    }
  }
}
</style>
