<template>
  <section class="section results">
    <div class="container">
      <h1 class="title">{{ content.title }}</h1>
      <div class="results__inner">
        <section-results-item
          v-for="item in content.elements"
          :key="item.id"
          :logo="item.title"
          :desc="item.desc"
          :img="item.img"
        />
        {{ getResultsItemUrl }}
      </div>
    </div>
  </section>
</template>

<static-query>
query {
  allCasesPost {
    edges {
      node {
        id
        path
      }
    }
  }
}
</static-query>

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
