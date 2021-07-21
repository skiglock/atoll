<template>
  <Layout>
    <h1 class="page-title">{{ $page.cases.title }}</h1>
    <section class="cases-page">
      <div class="container">
        <div class="cases-page__list">
          <transition-group name="fade">
            <cases-item
              v-for="{ node } in $page.allCasesPost.edges"
              :key="node.id"
              :category="node.category"
              :img="node.img"
              :logo="node.logo"
              :desc="node.desc"
              :url="node.path"
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
          На данный момент кейсы еще не добавлены :(
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
  cases (id: $id) {
    title
  }
  allCasesPost(perPage: 2, page: $page) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        category
        img
        logo
        desc
        path
      }
    }
  }
}
</page-query>

<script>
import CasesItem from '@/components/Page/Cases/CasesItem'
export default {
  components: {
    CasesItem
  },
  data() {
    return {
      loadedPosts: [],
      currentPage: 1
    }
  },
  created() {
    this.loadedPosts.push(...this.$page.allCasesPost.edges)
  },
  methods: {
    async infiniteHandler($state) {
      if (this.currentPage + 1 > this.$page.allCasesPost.pageInfo.totalPages) {
        $state.complete()
      } else {
        const { data } = await this.$fetch(`/cases/${this.currentPage + 1}`)
        if (data.allCasesPost.edges.length) {
          this.currentPage = data.allCasesPost.pageInfo.currentPage
          this.loadedPosts.push(...data.allCasesPost.edges)
          $state.loaded()
        } else {
          $state.complete()
        }
      }
    }
  },
  metaInfo() {
    return {
      title: this.$page.cases.title,
      meta: [
        {
          key: 'og:title',
          name: 'og:title',
          content: 'Atollon - ' + this.$page.cases.title
        },
        {
          key: 'twitter:title',
          name: 'twitter:title',
          content: 'Atollon - ' + this.$page.cases.title
        },
        {
          key: 'description',
          name: 'description',
          content: this.$page.cases.description
        },
        {
          key: 'og:description',
          name: 'og:description',
          content: this.$page.cases.description
        },
        {
          key: 'twitter:description',
          name: 'og:description',
          content: this.$page.cases.description
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
.cases-page {
  &__list {
    margin-top: 49px;
  }
  &__title {
    text-align: center;
  }
}
</style>
