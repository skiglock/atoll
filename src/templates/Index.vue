<template>
  <Layout>{{ $page.index.title }}</Layout>
</template>

<page-query>
query ($id: ID!) {
  index (id: $id) {
    title
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.index.title
    }
  }
}
</script>

<style></style>
