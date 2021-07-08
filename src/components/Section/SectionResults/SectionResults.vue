<template>
  <section class="section results">
    <div class="container">
      <h1 class="title">{{ content.title }}</h1>
      <div class="results__inner">
        <section-results-item />
        <section-results-item />
      </div>
    </div>
  </section>
</template>

<script>
import SectionResultsItem from './SectionResultsItem'
export default {
  name: 'SectionResults',
  props: {
    content: Object
  },
  components: {
    SectionResultsItem
  }
}
</script>

<style lang="scss">
.results {
  .title {
    text-align: center;
  }
  &__inner {
  }
}
</style>
