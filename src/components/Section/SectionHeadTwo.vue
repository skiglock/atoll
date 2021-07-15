<template>
  <section class="section head-two">
    <div class="container">
      <div
        class="head-two__inner"
        :style="{
          background: `url(${content.img}) no-repeat`,
          backgroundSize: '100% 100%',
          backgroundPosition: 'center'
        }"
      >
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
    padding: 126px 24px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    min-height: 400px;
    width: 100%;
    position: relative;
    @media screen and(max-width: 576px) {
      &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba($white_color, 0.6);
        backdrop-filter: blur(10px);
        z-index: 4;
      }
    }
  }
  &__desc {
    z-index: 5;
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
