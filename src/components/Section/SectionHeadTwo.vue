<template>
  <section class="section head-two">
    <div class="container">
      <div
        class="head-two__inner"
        :style="{
          background: `url(${getImage}) no-repeat`
        }"
      >
        <h1 class="title head-two__title">{{ content.title }}</h1>
        <p class="text head-two__text">
          Выделенный аналитик будет планомерно развивать вашу CRM-систему и
          станет единым окном для всех возникающих проблем и вопросов.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import image from '../../assets/img/dynamic/title-img.png'
export default {
  name: 'SectionHeadTwo',
  props: {
    content: Object
  },
  computed: {
    getImage() {
      return image
    }
  }
}
</script>

<style lang="scss">
.head-two {
  &__inner {
    padding: 176px 24px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    background-size: contain;
    min-height: 400px;
    width: 100%;
    @media screen and (max-width: 576px) {
      width: 100%;
      padding: 40px;
    }
  }
  &__title {
  }
  &__text {
    width: 60%;
    margin-top: 26px;
    @media screen and (max-width: 576px) {
      width: 100%;
    }
  }
}
</style>
