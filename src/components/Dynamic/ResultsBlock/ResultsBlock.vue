<template>
  <div class="block results-block">
    <h1 class="title">Результаты сопровождения amoCRM</h1>
    <div class="results-block__inner">
      <results-block-item />
      <results-block-item />
    </div>
  </div>
</template>

<script>
import ResultsBlockItem from '@/components/Dynamic/ResultsBlock/ResultsBlockItem'
export default {
  name: 'ResultsBlock',
  components: {
    ResultsBlockItem
  }
}
</script>

<style lang="scss">
.results-block {
  &__inner {
  }
}
</style>
