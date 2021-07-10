<template>
  <Layout>
    <h1 class="page-title">{{ $page.about.title }}</h1>
    <section-head-three :content="{ title: 'Заголовок ' }" />
    <section-quote :content="{ title: 'Заголовок ' }" />
    <section-quote :content="{ title: 'Заголовок ' }" />
    <section-team :content="{ title: 'Заголовок ' }" />
    <section-target :content="{ title: 'Заголовок ' }" />
    <section-message :content="{ title: 'Заголовок ' }" />
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  about (id: $id) {
    title
  }
}
</page-query>

<script>
import SectionHeadThree from '@/components/Section/SectionHeadThree'
import SectionQuote from '@/components/Section/SectionQuote'
import SectionTeam from '@/components/Section/SectionTeam'
import SectionTarget from '@/components/Section/SectionTarget'
import SectionMessage from '@/components/Section/SectionMessage'

export default {
  components: {
    SectionHeadThree,
    SectionQuote,
    SectionTeam,
    SectionTarget,
    SectionMessage
  },
  metaInfo() {
    return {
      title: this.$page.about.title
    }
  }
}
</script>

<style lang="scss">
.about {
}
</style>
