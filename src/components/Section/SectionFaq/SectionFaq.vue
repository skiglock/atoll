<template>
  <section class="block faq-block">
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
.faq-block {
  .title {
    text-align: center;
    margin-bottom: 20px;
  }
}
</style>
