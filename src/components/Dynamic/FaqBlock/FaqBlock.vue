<template>
  <div class="block faq-block">
    <div class="title">Отвечаем на частые вопросы</div>
    <div class="row">
      <div class="column column-50">
        <faq-block-item />
      </div>
      <div class="column column-50">
        <faq-block-item />
      </div>
      <div class="column column-50">
        <faq-block-item />
      </div>
    </div>
  </div>
</template>

<script>
import FaqBlockItem from '@/components/Dynamic/FaqBlock/FaqBlockItem'
export default {
  name: 'FaqBlock',
  components: {
    FaqBlockItem
  }
}
</script>

<style lang="scss">
.faq-block {
  .title {
    text-align: center;
    margin-bottom: 20px;
  }
}
</style>
