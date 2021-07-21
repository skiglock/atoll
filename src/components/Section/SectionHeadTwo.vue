<template>
  <section class="section head-two">
    <div class="container">
      <div class="head-two__inner">
        <div class="head-two__img">
          <g-image :src="content.img" :alt="content.title" />
        </div>
        <div class="head-two__desc">
          <h1 class="title head-two__title">{{ content.title }}</h1>
          <p class="text head-two__text">
            {{ content.desc }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SectionHeadTwo',
  props: {
    content: Object
  }
}
</script>

<style lang="scss">
.head-two {
  &__inner {
    // padding: 126px 24px;
    position: relative;
    @media screen and(max-width: 576px) {
      &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba($white_color, 0.8);
        backdrop-filter: blur(10px);
        z-index: 4;
      }
    }
  }
  &__img {
    min-height: 400px;

    img {
      min-height: 400px;
    }
  }
  &__desc {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 5;
    top: 126px;
    bottom: 126px;
    right: 24px;
    left: 24px;
    @media screen and (max-width: 768px) {
      top: 80px;
      bottom: 80px;
    }
  }
  &__title {
  }
  &__text {
    margin-top: 26px;
  }
  &__title,
  &__text {
    width: 50%;
    @media screen and (max-width: 576px) {
      width: 100%;
    }
  }
}
</style>
