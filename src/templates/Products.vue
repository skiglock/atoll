<template>
  <Layout>
    <h1 class="page-title">{{ $page.products.title }}</h1>
    <component
      :is="'section-' + component.name"
      v-for="component in $page.products.layout"
      :key="component.id"
      :content="component"
    />
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  products (id: $id) {
    title
    layout {
      id
      name
      title
      desc
      variant
      img
      elements {
        id
        title
        desc
        img
        link
      }
    }
  }
}
</page-query>

<script>
import SectionPlans from '@/components/Section/SectionPlans/SectionPlans'
import SectionPrice from '@/components/Section/SectionPrice/SectionPrice'
import SectionOther from '@/components/Section/SectionOther'
import SectionResults from '@/components/Section/SectionResults/SectionResults'
import SectionConsultation from '@/components/Section/SectionConsultation'
import SectionQuote from '@/components/Section/SectionQuote'
import SectionOrder from '@/components/Section/SectionOrder'
import SectionHead from '@/components/Section/SectionHead'
import SectionHeadTwo from '@/components/Section/SectionHeadTwo'
import SectionHeadThree from '@/components/Section/SectionHeadThree'
import SectionMessage from '@/components/Section/SectionMessage'
import SectionCards from '@/components/Section/SectionCards/SectionCards'
import SectionContacts from '@/components/Section/SectionContacts'
import SectionFaq from '@/components/Section/SectionFaq/SectionFaq'
import SectionTarget from '@/components/Section/SectionTarget'
import SectionTeam from '@/components/Section/SectionTeam'
import SectionClients from '@/components/Section/SectionClients/SectionClients'

export default {
  components: {
    SectionHeadTwo,
    SectionPlans,
    SectionPrice,
    SectionOther,
    SectionResults,
    SectionConsultation,
    SectionQuote,
    SectionOrder,
    SectionHead,
    SectionCards,
    SectionContacts,
    SectionFaq,
    SectionHeadThree,
    SectionMessage,
    SectionTarget,
    SectionTeam,
    SectionClients
  },
  props: ['components'],
  metaInfo() {
    return {
      title: this.$page.products.title
    }
  }
}
</script>

<style></style>
