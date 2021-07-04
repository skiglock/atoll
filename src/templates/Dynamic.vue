<template>
  <Layout>
    <section class="other">
      <div class="container">
        <!-- <title-block /> -->
        <!-- <plans-block /> -->
        <price-block />
        <other-block />
        <quote-block />
        <!-- <results-block /> -->
        <consultation-block />
        <form-block />
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
import PlansBlock from '@/components/Dynamic/PlansBlock'
import PriceBlock from '@/components/Dynamic/PriceBlock'
import OtherBlock from '@/components/Dynamic/OtherBlock'
import ResultsBlock from '@/components/Dynamic/ResultsBlock'
import ConsultationBlock from '@/components/Dynamic/ConsultationBlock'
import QuoteBlock from '@/components/Dynamic/QuoteBlock'
import FormBlock from '@/components/Dynamic/FormBlock'

export default {
  components: {
    TitleBlock,
    PlansBlock,
    PriceBlock,
    OtherBlock,
    ResultsBlock,
    ConsultationBlock,
    QuoteBlock,
    FormBlock
  },
  metaInfo() {
    return {
      title: this.$page.dynamic.title
    }
  }
}
</script>

<style></style>
