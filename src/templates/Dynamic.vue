<template>
  <Layout>
    <section-head-two />
    <section-head />
    <section-faq />
    <section-other />
    <section-cards />
    <section-plans />
    <section-price />
    <section-quote />
    <section-results />
    <section-consultation />
    <section-order />
    <section-contacts />
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  dynamic (id: $id) {
    title
  }
}
</page-query>

<script>
import SectionHeadTwo from '@/components/Section/SectionHeadTwo'
import SectionPlans from '@/components/Section/SectionPlans/SectionPlans'
import SectionPrice from '@/components/Section/SectionPrice/SectionPrice'
import SectionOther from '@/components/Section/SectionOther'
import SectionResults from '@/components/Section/SectionResults/SectionResults'
import SectionConsultation from '@/components/Section/SectionConsultation'
import SectionQuote from '@/components/Section/SectionQuote'
import SectionOrder from '@/components/Section/SectionOrder'
import SectionHead from '@/components/Section/SectionHead'
import SectionCards from '@/components/Section/SectionCards/SectionCards'
import SectionContacts from '@/components/Section/SectionContacts'
import SectionFaq from '@/components/Section/SectionFaq/SectionFaq'

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
    SectionFaq
  },
  metaInfo() {
    return {
      title: this.$page.dynamic.title
    }
  }
}
</script>

<style></style>
