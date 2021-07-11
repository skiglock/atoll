<template>
  <Layout>
    <section class="cases-post">
      <div class="container">
        <div class="cases-post__inner">
          <div class="cases-post__top">
            <g-image :src="$page.casesPost.logo" class="cases-post__img" />
            <h1 class="title cases-post__title">{{ $page.casesPost.title }}</h1>
          </div>
          <div class="cases-post__body">
            <div class="cases-post__item">
              <h2 class="title cases-post__item-title">О компании</h2>
              <div
                class="cases-post__item-text"
                v-html="$options.filters.markdown($page.casesPost.about)"
              ></div>
            </div>
            <div class="cases-post__item">
              <h2 class="title cases-post__item-title">История</h2>
              <div
                class="cases-post__item-text"
                v-html="$options.filters.markdown($page.casesPost.history)"
              ></div>
            </div>
            <div class="cases-post__item">
              <h2 class="title cases-post__item-title">Что мы сделали?</h2>
              <div
                class="cases-post__item-text"
                v-html="$options.filters.markdown($page.casesPost.made)"
              ></div>
            </div>
            <div class="cases-post__item">
              <h2 class="title cases-post__item-title">Результат</h2>
              <div
                class="cases-post__item-text"
                v-html="$options.filters.markdown($page.casesPost.result)"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  casesPost (id: $id) {
    title
    description
    logo
    about
    history
    made
    result
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: `${this.$page.casesPost.title}`
    }
  }
}
</script>

<style lang="scss">
.cases-post {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a {
    margin: inherit;
    padding: inherit;
  }
  strong {
    font-weight: bold;
  }
  em {
    font-style: italic;
  }
  code {
    text-align: center;
    display: block;
  }
  &__inner {
    padding: 0 145px;
    @media screen and (max-width: 768px) {
      padding: 20px;
    }
  }
  &__top {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  &__img {
    max-width: 166px;
    max-height: 40px;
  }
  &__title {
    margin-top: 39px;
  }
  &__body {
    margin-top: 104px;
  }
  &__item + &__item {
    margin-top: 50px;
  }
  &__item {
    &-title {
      position: relative;
      &::before {
        position: absolute;
        content: '';
        width: 11px;
        height: 11px;
        border-radius: 50%;
        background-color: $main_color;
        top: 6px;
        left: -20px;
        bottom: 0;
        right: 0;
        z-index: 14;
        @media screen and (max-width: 576px) {
          width: 8px;
          height: 8px;
          left: -15px;
        }
      }
    }
    &-text {
      margin-top: 30px;
    }
  }
}
</style>
