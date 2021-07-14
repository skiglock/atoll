<template>
  <Layout>
    <h1 class="page-title">{{ $page.products.title }}</h1>
    <component
      :is="'section-' + component.name"
      v-for="component in $page.products.layout"
      :key="component.id"
      :content="component"
    />
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  products (id: $id) {
    title
    layout {
      id
      name
      title
      desc
      variant
      img
      elements {
        id
        title
        desc
        img
        link
      }
    }
  }
}
</page-query>

<script>
import sections from '../mixins/sections'

export default {
  mixins: [sections],
  metaInfo() {
    return {
      title: this.$page.products.title
    }
  }
}
</script>
