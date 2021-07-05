<template>
  <Layout>
    <section class="other">
      <div class="container">
        <!-- <title-block /> -->

        <head-block />
        <faq-block />
        <other-block />

        <!-- <cards-block />
        <plans-block />
        <price-block />
        <quote-block />
        <results-block />
        <consultation-block />
        <form-block />
        <contacts-block /> -->
      </div>
    </section>
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
import TitleBlock from '@/components/Dynamic/TitleBlock'
import PlansBlock from '@/components/Dynamic/PlansBlock/PlansBlock'
import PriceBlock from '@/components/Dynamic/PriceBlock/PriceBlock'
import OtherBlock from '@/components/Dynamic/OtherBlock'
import ResultsBlock from '@/components/Dynamic/ResultsBlock/ResultsBlock'
import ConsultationBlock from '@/components/Dynamic/ConsultationBlock'
import QuoteBlock from '@/components/Dynamic/QuoteBlock'
import FormBlock from '@/components/Dynamic/FormBlock'
//
import HeadBlock from '@/components/Dynamic/HeadBlock'
import CardsBlock from '@/components/Dynamic/CardsBlock/CardsBlock'
import ContactsBlock from '@/components/Dynamic/ContactsBlock'
//
import FaqBlock from '@/components/Dynamic/FaqBlock/FaqBlock'

export default {
  components: {
    TitleBlock,
    PlansBlock,
    PriceBlock,
    OtherBlock,
    ResultsBlock,
    ConsultationBlock,
    QuoteBlock,
    FormBlock,
    //
    HeadBlock,
    CardsBlock,
    ContactsBlock,
    FaqBlock
  },
  metaInfo() {
    return {
      title: this.$page.dynamic.title
    }
  }
}
</script>

<style></style>
