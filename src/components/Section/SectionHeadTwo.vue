<template>
  <section
    class="block head-two"
    :style="{
      background: `url(${getImage}) 50% 50% no-repeat`
    }"
  >
    <div class="container">
      <div class="head-two__inner">
        <h1 class="title head-two__title">Сопровождение amoCRM</h1>
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
  computed: {
    getImage() {
      return image
    }
  }
}
</script>

<style lang="scss">
.head-two {
  z-index: 9;
  position: relative;
  &__inner {
    width: 55%;
    padding: 176px 24px;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    height: 100%;
    @media screen and (max-width: 576px) {
      align-items: center;
      text-align: center;
      width: 100%;
    }
  }
  &__title {
  }
  &__text {
    margin-top: 26px;
  }
  min-height: 400px;
  width: 100%;
}
</style>
