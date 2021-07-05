<template>
  <Layout>
    <section class="blog-page">
      <div class="container">
        <h1 class="title blog-page__title">
          {{ $page.blog.title }}
        </h1>
        <div class="blog-page__list">
          <blog-card />
          <blog-card />
          <blog-card />
        </div>
      </div>
    </section>
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  blog (id: $id) {
    title
  }
}
</page-query>

<script>
import BlogCard from '@/components/Page/Blog/BlogCard'
export default {
  components: {
    BlogCard
  },
  metaInfo() {
    return {
      title: this.$page.blog.title
    }
  }
}
</script>

<style lang="scss">
.blog-page {
  &__title {
    text-align: center;
  }
  &__list {
    margin-top: 49px;
  }
}
</style>
