<template>
  <section class="section head-three">
    <div class="container">
      <div class="head-three__inner">
        <h2 class="head-three__subtitle">Atollon — интегратор amoCRM</h2>
        <p class="text head-three__text">
          специализирующийся на цифровой трансформации продаж. Мы фокусируемся
          исключительно на amoCRM как платформе,на базе которой делаем сложные
          проекты по внедрению и интеграции.
        </p>
        <div class="head-three__subcircle">
          <g-image
            src="@/assets/img/about/team-img.png"
            class="head-three__img"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SectionHeadThree'
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
  &__img {
    display: inline-block;
    max-width: 791px;
  }
  &__subcircle {
    position: relative;
    img {
      border-radius: 50% / 100%;
    }
    &::before {
      z-index: 5;
      position: absolute;
      content: '';
      border: 20px solid $main_color;
      max-width: 900px;
      max-height: 360px;
      border-radius: 50% / 100%;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      border-top: 0;
      top: 190px;
      left: 0;
      right: 0;
      bottom: 0;
    }
  }
}
</style>
