<template>
  <div class="block head-block">
    <div class="row">
      <div class="column column-60">
        <h1 class="title head-block__title">
          Проведем аудит и создадим стратегию развития вашей CRM-систем
        </h1>
        <p class="text head-block__text">
          Воспользуйтесь нашей экспертизой, чтобы увидеть слабые места текущей
          CRM и получить пошаговый план усиления ее эффективности
        </p>
      </div>
      <div class="column">
        <div class="head-block__img">
          <g-image src="@/assets/img/dynamic/girl-1.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeadBlock'
}
</script>

<style lang="scss">
.head-block {
  .row {
    align-items: center;
  }
  &__title {
    font-size: 33px;
    line-height: 1.147;
    text-align: left;
  }
  &__text {
    margin-top: 25px;
    font-size: 18px;
    line-height: 1.38;
  }
  &__img {
    max-width: 350px;
    max-height: 382px;
    position: relative;
    &::after {
      position: absolute;
      z-index: 11;
      content: ' ^';
      width: 351px;
      max-height: 20px;
      background-color: $main_color;
      border-radius: 30px;
      bottom: 0;
      left: -35px;
      right: 0;
    }
  }
}
</style>
