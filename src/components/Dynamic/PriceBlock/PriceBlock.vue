<template>
  <div class="block price-block">
    <h1 class="title price-block__title">Стоимость и формат сопровождения.</h1>
    <p class="text price-block__text">
      Выделенный аналитик будет планомерно развивать вашу CRM-систему и станет
      единым окном для всех возникающих проблем и вопросов.
    </p>
    <div class="price-block__services">
      <div class="row price-block__row">
        <div class="column column-50">
          <div class="price-block__card">
            <h1 class="price-block__card-title">35000 руб.</h1>
            <p class="price-block__card-desc">в месяц</p>
            <main-button
              backgroundcolor="#fff"
              color="#000"
              :fontsize="11"
              :height="40"
              class="price-block__card-btn"
              >Выбрать</main-button
            >
          </div>
        </div>
        <div class="column column-50">
          <div class="price-block__list">
            <h1 class="title price-block__list-title">
              В рамках тарифа вам доступно:
            </h1>
            <price-block-item />
            <price-block-item />
            <price-block-item />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PriceBlockItem from '@/components/Dynamic/PriceBlock/PriceBlockItem'
import MainButton from '@/components/Common/MainButton'
export default {
  name: 'PriceBlock',
  components: {
    MainButton,
    PriceBlockItem
  }
}
</script>

<style lang="scss">
.price-block {
  &__row {
    justify-content: inherit;
  }
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
  }
  &__list {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    @media screen and (max-width: 576px) {
      text-align: center;
    }
  }
}
</style>
