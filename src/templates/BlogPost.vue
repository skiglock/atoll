<template>
  <Layout>
    <section class="blog-post">
      <div class="container">
        <div class="blog-post__top">
          <div class="title">{{ $page.blogPost.title }}</div>

          <div class="date">{{ formatDate }}</div>
        </div>
        <div
          class="blog-post__body"
          v-html="$options.filters.markdown($page.blogPost.full)"
        ></div>
      </div>
    </section>
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  blogPost (id: $id) {
    title
    date
    full
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: `${this.$page.blogPost.title}`
    }
  },
  computed: {
    formatDate() {
      const newDate = new Date(this.$page.blogPost.date)
      const year = newDate.getFullYear()
      const day = newDate.getDate()
      const month = newDate.getMonth()
      return `${day}.${month}.${year}`
    }
  }
}
</script>

<style lang="scss">
.blog-post {
  .date {
    margin-top: 11px;
  }
  &__top {
    text-align: center;
  }
  &__body {
    padding: 20px;
    font-weight: $font_regular;
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
