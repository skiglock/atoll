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
      title: this.$page.pages.title,
      meta: [
        {
          key: 'og:title',
          name: 'og:title',
          content: 'Atollon - ' + this.$page.pages.title
        },
        {
          key: 'twitter:title',
          name: 'twitter:title',
          content: 'Atollon - ' + this.$page.pages.title
        },
        {
          key: 'description',
          name: 'description',
          content: this.$page.pages.description
        },
        {
          key: 'og:description',
          name: 'og:description',
          content: this.$page.pages.description
        },
        {
          key: 'twitter:description',
          name: 'og:description',
          content: this.$page.pages.description
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

<style lang="scss">
.other-page {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #252525;
  }
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
    font-family: 'Raleway';
    font-size: inherit;
  }
  blockquote {
    padding: 0 0 0 10px;
    position: relative;
    &::after {
      position: absolute;
      content: '';
      width: 8px;
      height: 100%;
      background-color: #487bfa;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      border-radius: $border_radius;
      z-index: 8;
    }
  }
}
</style>
