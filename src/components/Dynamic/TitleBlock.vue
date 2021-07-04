<template>
  <div
    class="block title-block"
    :style="{
      backgroundImage: `url(${getImage})`
    }"
  >
    <div class="title-block__inner">
      <h1 class="title-block__text">Сопровождение amoCRM</h1>
      <p class="title-block__desc">
        Выделенный аналитик будет планомерно развивать вашу CRM-систему и станет
        единым окном для всех возникающих проблем и вопросов.
      </p>
    </div>
  </div>
</template>

<script>
import image from '../../assets/img/dynamic/title-img.png'
export default {
  name: 'TitleBlock',
  computed: {
    getImage() {
      return image
    }
  }
}
</script>

<style lang="scss">
.title-block {
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
  }
  &__text {
    font-size: 24px;
    font-weight: $font_semibold;
    color: #232323;
  }
  &__desc {
    margin-top: 26px;
    color: #232323;
    font-weight: $font_regular;
    font-size: 18px;
  }
  min-height: 400px;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
