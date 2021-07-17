<template>
  <section class="section price">
    <div class="container">
      <h1 class="section-title price__title">{{ content.title }}</h1>
      <p class="text price__text">
        Выделенный аналитик будет планомерно развивать вашу CRM-систему и станет
        единым окном для всех возникающих проблем и вопросов.
      </p>
      <div class="price__services">
        <div class="row">
          <div class="column column-50">
            <div class="price__card">
              <h1 class="price__card-title">{{ content.num }}</h1>
              <p class="price__card-desc">{{ content.num_desc }}</p>
              <main-button
                backgroundcolor="#fff"
                color="#000"
                :fontsize="11"
                :height="40"
                class="price__card-btn"
                hover="#e5e5e5"
                @click.native="setPriceModal"
                >Выбрать</main-button
              >
            </div>
          </div>
          <div class="column column-50">
            <div class="price__list">
              <h1 class="title price__list-title">
                В рамках тарифа вам доступно:
              </h1>
              <section-price-item
                v-for="(item, index) in content.elements"
                :key="item.id"
                :title="item.title"
                :number="index + 1"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SectionPriceItem from './SectionPriceItem'
import MainButton from '@/components/Common/MainButton'
export default {
  name: 'SectionPrice',
  props: {
    content: Object
  },
  components: {
    MainButton,
    SectionPriceItem
  },
  methods: {
    setPriceModal() {
      this.$store.commit('setIsModalOpen', true)
    }
  }
}
</script>

<style lang="scss">
.price {
  &__text,
  &__title {
    text-align: center;
  }
  &__text {
    margin-top: 19px;
  }
  &__services {
    margin-top: 64px;
    @media screen and (max-width: 576px) {
      margin-top: 34px;
    }
  }
  &__card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 307px;
    height: 272px;
    border-radius: 37px;
    background-color: $main_color;
    &-title {
      color: $white_color;
      font-size: 31px;
      font-weight: $font_bold;
    }
    &-desc {
      margin-top: 7px;
      color: $white_color;
      font-weight: $font_regular;
      font-size: 15px;
    }
    &-btn {
      margin-top: 23px;
    }
    @media screen and (max-width: 576px) {
      max-width: 100%;
    }
  }
  &__list {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    &-title {
      @media screen and (max-width: 576px) {
        align-self: center;
        text-align: center;
      }
    }
  }
}
</style>
