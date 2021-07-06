<template>
  <section class="block cards">
    <div class="container">
      <div class="cards__head">
        <h1 class="title">Что такое технический аудит</h1>
        <p class="text cards__text">
          Проанализируем вашу систему продаж и составим карту внедрения или
          развития вашей amoCRM
        </p>
        <div class="cards__body">
          <div class="row">
            <div class="column column-50">
              <section-cards-item />
            </div>
            <div class="column column-50">
              <section-cards-item />
            </div>
            <div class="column column-50">
              <section-cards-item />
            </div>
            <div class="column column-50">
              <section-cards-item />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SectionCardsItem from './SectionCardsItem.vue'
export default {
  name: 'SectionCards',
  components: {
    SectionCardsItem
  }
}
</script>

<style lang="scss">
.cards {
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
