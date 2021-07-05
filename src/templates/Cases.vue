<template>
  <Layout>
    <section class="cases-page">
      <div class="container">
        <h1 class="title cases-page__title">{{ $page.cases.title }}</h1>
        <div class="cases-page__list">
          <cases-item />
          <cases-item />
          <cases-item />
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
