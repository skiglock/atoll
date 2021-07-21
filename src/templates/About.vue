<template>
  <Layout>
    <h1 class="page-title">{{ $page.about.title }}</h1>
    <component
      :is="'section-' + component.name"
      v-for="component in $page.about.layout"
      :key="component.id"
      :content="component"
    />
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  about (id: $id) {
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
      title: this.$page.about.title,
      meta: [
        {
          key: 'og:title',
          name: 'og:title',
          content: 'Atollon - ' + this.$page.about.title
        },
        {
          key: 'twitter:title',
          name: 'twitter:title',
          content: 'Atollon - ' + this.$page.about.title
        },
        {
          key: 'description',
          name: 'description',
          content: this.$page.about.description
        },
        {
          key: 'og:description',
          name: 'og:description',
          content: this.$page.about.description
        },
        {
          key: 'twitter:description',
          name: 'og:description',
          content: this.$page.about.description
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
