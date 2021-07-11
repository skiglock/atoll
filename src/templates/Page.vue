<template>
  <Layout>
    <h1 class="page-title">{{ $page.pages.title }}</h1>
    <section class="other-page">
      <div
        class="container"
        v-html="$options.filters.markdown($page.pages.text)"
      ></div>
    </section>
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  pages (id: $id) {
    title
    description
    text
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.pages.title
    }
  }
}
</script>

<style lang="scss">
.other-page {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a {
    margin: inherit;
    padding: inherit;
  }
  strong {
    font-weight: bold;
  }
  em {
    font-style: italic;
  }
  code {
    text-align: center;
    display: block;
  }
}
</style>
