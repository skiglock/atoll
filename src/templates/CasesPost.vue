<template>
  <Layout>
    <section class="cases-post">
      <div class="container">
        <div class="cases-post__inner">
          <div class="cases-post__top">
            <g-image
              :src="$page.casesPost.logo"
              class="cases-post__img"
              :alt="$page.casesPost.title"
            />
            <div class="title cases-post__title">
              {{ $page.casesPost.title }}
            </div>
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
    img
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
      title: `${this.$page.casesPost.title}`,
      meta: [
        {
          key: 'og:title',
          name: 'og:title',
          content: 'Atollon - ' + this.$page.casesPost.title
        },
        {
          key: 'twitter:title',
          name: 'twitter:title',
          content: 'Atollon - ' + this.$page.casesPost.title
        },
        {
          key: 'description',
          name: 'description',
          content: this.$page.casesPost.description
        },
        {
          key: 'og:description',
          name: 'og:description',
          content: this.$page.casesPost.description
        },
        {
          key: 'twitter:description',
          name: 'og:description',
          content: this.$page.casesPost.description
        },
        {
          key: 'og:image',
          name: 'og:image',
          content: 'https://atollon.ru' + this.$page.casesPost.img
        },
        {
          key: 'twitter:image',
          name: 'twitter:image',
          content: 'https://atollon.ru' + this.$page.casesPost.img
        }
      ]
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
  h6 {
    color: #252525;
  }
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
    font-family: 'Raleway';
    font-size: inherit;
  }
  blockquote {
    padding: 0 0 0 10px;
    position: relative;
    &::after {
      position: absolute;
      content: '';
      width: 8px;
      height: 100%;
      background-color: #487bfa;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      border-radius: $border_radius;
      z-index: 8;
    }
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
