<template>
  <Layout>
    <h1 class="page-title">{{ $page.blog.title }}</h1>
    <section class="blog-page">
      <div class="container">
        <div class="blog-page__list">
          <blog-card
            v-for="{ node } in $page.allBlogPost.edges"
            :key="node.id"
            :title="node.title"
            :img="node.img"
            :desc="node.desc"
            :url="node.path"
            :category="node.category"
          />
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
  allBlogPost {
    edges {
      node {
        id
        title
        category
        img
        desc
        path
      }
    }
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
  &__list {
    margin-top: 49px;
  }
}
</style>
