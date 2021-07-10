<template>
  <Layout>
    <h1 class="page-title">{{ $page.cases.title }}</h1>
    <section class="cases-page">
      <div class="container">
        <div class="cases-page__list">
          <cases-item
            v-for="{ node } in $page.allCasesPost.edges"
            :key="node.id"
            :category="node.category"
            :img="node.img"
            :logo="node.logo"
            :desc="node.desc"
            :url="node.path"
          />
        </div>
      </div>
    </section>
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  cases (id: $id) {
    title
  }
  allCasesPost {
    edges {
      node {
        id
        category
        img
        logo
        desc
        path
      }
    }
  }
}
</page-query>

<script>
import CasesItem from '@/components/Page/Cases/CasesItem'
export default {
  components: {
    CasesItem
  },
  metaInfo() {
    return {
      title: this.$page.cases.title
    }
  }
}
</script>

<style lang="scss">
.cases-page {
  &__list {
    margin-top: 49px;
  }
  &__title {
    text-align: center;
  }
}
</style>
