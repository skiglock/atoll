<template>
  <div class="cases-page__item">
    <g-link :to="$getPath(url)">
      <div class="row">
        <div class="column column-50">
          <div class="cases-page__item-left">
            <div class="cases-page__item-img">
              <g-image :src="img" />
            </div>
          </div>
        </div>

        <div class="column column-50 cases-page--column">
          <div class="cases-page__item-right">
            <div class="cases-page__item-client">
              <g-image :src="logo" />
            </div>
            <h2 class="title cases-page__item-title">{{ category }}</h2>
            <p class="text cases-page__item-text">
              {{ desc }}
            </p>
          </div>
        </div>
      </div>
    </g-link>
  </div>
</template>

<script>
export default {
  name: 'CasesItem',
  props: {
    category: String,
    img: String,
    logo: String,
    desc: String,
    url: String
  }
}
</script>

<style lang="scss">
.cases-page {
  &__item + &__item {
    margin-top: 100px;
  }

  &__item {
    &-left,
    &-right {
      @media screen and (max-width: 576px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
      }
    }
    &-img {
      max-width: 413px;
      height: 221px;
      border-radius: 20px;
      img {
        border-radius: 20px;
      }
    }
    &-client {
      max-width: 194px;
      height: 48px;
      img {
        @media screen and (max-width: 576px) {
        }
      }
    }
    &-title {
      margin-top: 9px;
      opacity: 0.67;
    }
    &-text {
      margin-top: 30px;
    }
  }
}
</style>
