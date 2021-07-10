<template>
  <Layout>
    <section-services />
    <section-consultation :content="{ title: 'Заголовок ' }" />
    <section-clients :content="{ title: 'Заголовок ' }" />
    <section-team :content="{ title: 'Заголовок ' }" />
    <section-blog :content="{ title: 'Заголовок ' }" />
    <section-order :content="{ title: 'Заголовок ' }" />
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  index (id: $id) {
    title
  }
}
</page-query>

<script>
import SectionServices from '@/components/Section/SectionServices/SectionServices'
import SectionConsultation from '@/components/Section/SectionConsultation'
import SectionClients from '@/components/Section/SectionClients/SectionClients'
import SectionTeam from '@/components/Section/SectionTeam'
import SectionBlog from '@/components/Section/SectionBlog/SectionBlog'
import SectionOrder from '@/components/Section/SectionOrder'

export default {
  components: {
    SectionServices,
    SectionConsultation,
    SectionClients,
    SectionTeam,
    SectionBlog,
    SectionOrder
  },
  metaInfo() {
    return {
      title: this.$page.index.title
    }
  }
}
</script>

<style></style>
