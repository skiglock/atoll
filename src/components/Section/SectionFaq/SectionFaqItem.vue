<template>
  <div class="faq__item">
    <div class="card faq__item-question" @click="openFaq = !openFaq">
      <p class="text">{{ question }}</p>
    </div>
    <transition name="fade">
      <div class="card faq__item-answer" v-if="openFaq">
        <p class="text">{{ answer }}</p>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'SectionFaqItem',
  data() {
    return {
      openFaq: false
    }
  },
  props: {
    question: String,
    answer: String
  }
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
      cursor: pointer;
      padding: 15px;
      max-height: 76px;
      border-radius: 80px;
      display: flex;
      justify-content: center;
      align-items: center;
      max-width: 100%;
      box-shadow: 0px 5px 5px 0px rgba($black_color, 0.09);
    }
    &-answer {
      padding: 40px 30px 10px;
      margin-top: 10px;
      border-radius: 21px;
      max-width: 379px;
      min-height: 319px;
    }
  }
}
</style>
