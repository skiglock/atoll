<template>
  <Layout>
    <component
      :is="'section-' + component.name"
      v-for="component in $page.index.layout"
      :key="component.id"
      :content="component"
    />
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  index (id: $id) {
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
      title: this.$page.index.title
    }
  }
}
</script>
