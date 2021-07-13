<template>
  <section class="section head-two">
    <div class="container">
      <div
        class="head-two__inner"
        :style="{
          background: `url(${content.img}) no-repeat`
        }"
      >
        <h1 class="title head-two__title">{{ content.title }}</h1>
        <p class="text head-two__text">
          {{ content.desc }}
        </p>
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
    background-size: contain;
    min-height: 400px;
    width: 100%;
    @media screen and (max-width: 576px) {
      padding: 40px;
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
