<template>
  <Layout>
    <section class="blog-post">
      <div class="container">
        <div class="blog-post__top">
          <h1 class="title">{{ $page.blogPost.title }}</h1>

          <h2 class="date">{{ formatDate }}</h2>
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
}
</style>
