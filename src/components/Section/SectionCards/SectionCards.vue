<template>
  <section class="section cards">
    <div class="container">
      <div class="cards__head">
        <h1 class="section-title">{{ content.title }}</h1>
        <p class="text cards__text">
          {{ content.desc }}
        </p>
        <div class="cards__body">
          <div class="row">
            <div
              class="column column-50"
              v-for="item in content.elements"
              :key="item.id"
            >
              <section-cards-item
                :img="item.img"
                :title="item.title"
                :desc="item.desc"
              />
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
  props: {
    content: Object
  },
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
    margin-top: 77px;
    // padding: 45px 18px;
    @media screen and (max-width: 576px) {
      padding: 0;
    }
  }
  // .column {
  //   @media screen and (max-width: 768px) {
  //     padding: 20px;
  //   }
  //   @media screen and (max-width: 576px) {
  //     padding: 10px;
  //   }
  // }
  // .column + .column {
  //   @media screen and (max-width: 576px) {
  //     margin-top: 20px;
  //   }
  // }
}
</style>
