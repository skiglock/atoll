<template>
  <Layout>
    <main-services />
    <main-consultation />
    <main-clients />
    <main-team />
    <main-blog />
    <main-order />
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
import MainServices from '@/components/Main/MainServices'
import MainConsultation from '@/components/Main/MainConsultation'
import MainClients from '@/components/Main/MainClients'
import MainTeam from '@/components/Main/MainTeam'
import MainBlog from '@/components/Main/MainBlog'
import MainOrder from '@/components/Main/MainOrder'

export default {
  components: {
    MainServices,
    MainConsultation,
    MainClients,
    MainTeam,
    MainBlog,
    MainOrder
  },
  metaInfo() {
    return {
      title: this.$page.index.title
    }
  }
}
</script>

<style></style>
