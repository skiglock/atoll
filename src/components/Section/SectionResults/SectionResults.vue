<template>
  <section class="section results">
    <div class="container">
      <h1 class="title">{{ content.title }}</h1>
      <div class="results__inner">
        <section-results-item
          v-for="item in changeResultsArray[0]"
          :key="item.id"
          :logo="item.logo"
          :desc="item.desc"
          :img="item.img"
          :url="item.url"
        />
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
        logo
        result
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
  },
  computed: {
    getResultsItemUrl() {
      return this.$static.allCasesPost.edges.filter((obj) =>
        this.content.elements.some((yy) => yy.link === obj.node.id)
      )
    },
    changeResultsArray() {
      return this.getResultsItemUrl.map((item) => {
        return this.content.elements.map((el) => {
          return {
            id: item.node.id,
            img: el.img,
            logo: item.node.logo,
            url: this.$getPath(item.node.path),
            desc: el.desc
          }
        })
      })
    }
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
