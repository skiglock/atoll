<template>
  <Layout>
    <h1 class="page-title">{{ $page.blog.title }}</h1>
    <section class="blog-page">
      <div class="container">
        <div class="blog-page__list">
          <transition-group name="fade">
            <blog-card
              v-for="{ node } in $page.allBlogPost.edges"
              :key="node.id"
              :title="node.title"
              :img="node.img"
              :desc="node.desc"
              :url="node.path"
              :category="node.category"
            />
          </transition-group>
        </div>
        <h1
          class="title"
          :style="{
            textAlign: 'center'
          }"
          v-if="loadedPosts.length === 0"
        >
          На данный момент посты еще не добавлены :(
        </h1>
        <ClientOnly>
          <infinite-loading @infinite="infiniteHandler" spinner="spiral">
            <span slot="no-more"></span>
            <span slot="no-results"></span>
          </infinite-loading>
        </ClientOnly>
      </div>
    </section>
  </Layout>
</template>

<page-query>
query ($id: ID!, $page: Int) {
  blog (id: $id) {
    title
  }
  allBlogPost(perPage: 2, page: $page) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
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
  data() {
    return {
      loadedPosts: [],
      currentPage: 1
    }
  },
  created() {
    this.loadedPosts.push(...this.$page.allBlogPost.edges)
  },
  methods: {
    async infiniteHandler($state) {
      if (this.currentPage + 1 > this.$page.allBlogPost.pageInfo.totalPages) {
        $state.complete()
      } else {
        const { data } = await this.$fetch(`/cases/${this.currentPage + 1}`)
        if (data.allBlogPost.edges.length) {
          this.currentPage = data.allBlogPost.pageInfo.currentPage
          this.loadedPosts.push(...data.allBlogPost.edges)
          $state.loaded()
        } else {
          $state.complete()
        }
      }
    }
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
