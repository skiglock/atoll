<template>
  <div class="block cards-block">
    <div class="cards-block__head">
      <h1 class="title">Что такое технический аудит</h1>
      <p class="text cards-block__text">
        Проанализируем вашу систему продаж и составим карту внедрения или
        развития вашей amoCRM
      </p>
      <div class="cards-block__body">
        <div class="row">
          <div class="column column-50">
            <cards-block-item />
          </div>
          <div class="column column-50">
            <cards-block-item />
          </div>
          <div class="column column-50">
            <cards-block-item />
          </div>
          <div class="column column-50">
            <cards-block-item />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardsBlockItem from '@/components/Dynamic/CardsBlock/CardsBlockItem'
export default {
  name: 'CardBlock',
  components: {
    CardsBlockItem
  }
}
</script>

<style lang="scss">
.cards-block {
  &__head {
    text-align: center;
  }
  &__text {
    margin-top: 24px;
  }
  &__body {
    margin-top: 57px;
    padding: 45px 18px;
    @media screen and (max-width: 576px) {
      margin-top: 10px;
      padding: 0;
    }
  }
  .column {
    @media screen and (max-width: 768px) {
      padding: 20px;
    }
    @media screen and (max-width: 576px) {
      padding: 10px;
    }
  }
  .column + .column {
    @media screen and (max-width: 576px) {
      margin-top: 20px;
    }
  }
}
</style>
