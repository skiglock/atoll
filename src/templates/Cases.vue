<template>
  <Layout>
    <section class="cases-page">
      <div class="container">
        <h1 class="cases-page__title">{{ $page.cases.title }}</h1>
        <div class="cases-page__list">
          <div class="cases-page__item">
            <div class="cases-page__item-left">
              <div class="cases-page__item-img">
                <g-image src="@/assets/img/cases/delight.png" />
              </div>
            </div>
            <div class="cases-page__item-right">
              <div class="cases-page__item-client">
                <g-image src="@/assets/img/clients/delight.png" />
              </div>
              <h2 class="cases-page__item-category">Digital-агенство</h2>
              <p class="cases-page__item-desc">
                Разработка виджета для обработки более 900 заявок в amoCRM.
              </p>
            </div>
          </div>
          <div class="cases-page__item">
            <div class="cases-page__item-left">
              <div class="cases-page__item-img">
                <g-image src="@/assets/img/cases/delight.png" />
              </div>
            </div>
            <div class="cases-page__item-right">
              <div class="cases-page__item-client">
                <g-image src="@/assets/img/clients/delight.png" />
              </div>
              <h2 class="cases-page__item-category">Digital-агенство</h2>
              <p class="cases-page__item-desc">
                Разработка виджета для обработки более 900 заявок в amoCRM.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  cases (id: $id) {
    title
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.cases.title
    }
  }
}
</script>

<style lang="scss">
.cases-page {
  &__title {
    text-align: center;
    color: #232323;
    font-weight: 700;
    font-size: 21px;
  }
  &__list {
    margin-top: 49px;
  }
  &__item + &__item {
    margin-top: 100px;
  }
  &__item {
    cursor: pointer;
    display: flex;
    &-right,
    &-left {
      width: 50%;
    }
    &-right {
      margin-left: 49px;
    }
    &-img {
      max-width: 413px;
      max-height: 221px;
      border-radius: 20px;
      img {
        border-radius: 20px;
      }
    }
    &-client {
      max-width: 194px;
      max-height: 48px;
    }
    &-category {
      margin-top: 9px;
      color: #232323;
      font-weight: $font_regular;
      font-size: 21px;
    }
    &-desc {
      margin-top: 30px;
      color: #232323;
      font-weight: $font_regular;
      font-size: 18px;
    }
  }
}
</style>
