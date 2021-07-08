<template>
  <section class="section faq">
    <div class="faq__inner">
      <div class="container">
        <div class="title">{{ content.title }}</div>
        <div class="row">
          <div
            class="column column-50"
            v-for="item in content.elements"
            :key="item.id"
          >
            <section-faq-item :question="item.title" :answer="item.desc" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SectionFaqItem from './SectionFaqItem'
export default {
  name: 'SectionFaq',
  props: {
    content: Object
  },
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
