<template>
  <Layout>
    <section class="blog-post">
      <div class="container">
        <h1 class="title">{{ $page.blogPost.title }}</h1>
      </div>
    </section>
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  blogPost (id: $id) {
    title
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: `${this.$page.blogPost.title}`
    }
  }
}
</script>

<style></style>
