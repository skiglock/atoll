<template>
  <div class="faq__item">
    <div class="card faq__item-question">
      <p class="text">Какое отношение Atoll имеет к amoCRM?</p>
    </div>
    <div class="card faq__item-answer">
      <p class="text">Мы сертифицированные партнеры amoCRM.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SectionFaqItem'
}
</script>

<style lang="scss">
.faq {
  background-color: $section_color;
  &__item {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    &-question {
      padding: 15px;
      z-index: 14;
      max-height: 76px;
      border-radius: 80px;
      display: flex;
      justify-content: center;
      align-items: center;
      max-width: 415px;
      box-shadow: 0px 5px 5px 0px rgba($black_color, 0.09);
    }
    &-answer {
      padding: 40px 30px 10px;
      margin-top: -20px;
      z-index: 13;
      border-radius: 21px;
      max-width: 379px;
      min-height: 319px;
    }
  }
}
</style>
