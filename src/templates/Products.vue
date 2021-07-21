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
    description
    layout {
      id
      name
      title
      desc
      variant
      img
      num
      num_desc
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
      title: this.$page.products.title,
      meta: [
        {
          key: 'og:title',
          name: 'og:title',
          content: 'Atollon - ' + this.$page.products.title
        },
        {
          key: 'twitter:title',
          name: 'twitter:title',
          content: 'Atollon - ' + this.$page.products.title
        },
        {
          key: 'description',
          name: 'description',
          content: this.$page.products.description
        },
        {
          key: 'og:description',
          name: 'og:description',
          content: this.$page.products.description
        },
        {
          key: 'twitter:description',
          name: 'og:description',
          content: this.$page.products.description
        },
        {
          key: 'og:image',
          name: 'og:image',
          content: 'https://atollon.ru/assets/img/logo-header.png'
        },
        {
          key: 'twitter:image',
          name: 'twitter:image',
          content: 'https://atollon.ru/assets/img/logo-header.png'
        }
      ]
    }
  }
}
</script>
