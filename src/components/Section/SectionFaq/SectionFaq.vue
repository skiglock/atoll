<template>
  <section class="section faq">
    <div class="faq__inner">
      <div class="container">
        <div class="title">Отвечаем на частые вопросы</div>
        <div class="row">
          <div class="column column-50">
            <section-faq-item />
          </div>
          <div class="column column-50">
            <section-faq-item />
          </div>
          <div class="column column-50">
            <section-faq-item />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SectionFaqItem from './SectionFaqItem.vue'
export default {
  name: 'SectionFaq',
  components: {
    SectionFaqItem
  }
}
</script>

<style lang="scss">
.faq {
  &__inner {
    padding: 44px 0;
  }
  .title {
    text-align: center;
    margin-bottom: 20px;
  }
}
</style>
