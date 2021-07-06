<template>
  <section class="block results-block">
    <div class="container">
      <h1 class="title">Результаты сопровождения amoCRM</h1>
      <div class="results-block__inner">
        <section-results-item />
        <section-results-item />
      </div>
    </div>
  </section>
</template>

<script>
import SectionResultsItem from './SectionResultsItem.vue'
export default {
  name: 'SectionResults',
  components: {
    SectionResultsItem
  }
}
</script>

<style lang="scss">
.results-block {
  .title {
    text-align: center;
  }
  &__inner {
  }
}
</style>
