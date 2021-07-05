<template>
  <Layout>
    <section class="blog-page">
      <div class="container">
        <h1 class="title blog-page__title">
          {{ $page.blog.title }}
        </h1>
        <div class="blog-page__list">
          <div class="card blog-page__card">
            <div class="blog-page__card-category">Категория</div>
            <div class="row">
              <div class="column column-50">
                <div class="blog-page__card-left">
                  <div class="blog-page__card-img">
                    <g-image src="@/assets/img/blog/blog-item.png" />
                  </div>
                </div>
              </div>
              <div class="column column-50">
                <div class="blog-page__card-right">
                  <h1 class="blog-page__card-title">
                    Эффективное построение воронки продаж в amoCRM
                  </h1>
                  <p class="blog-page__card-desc">
                    Начинайте с самого начала - полученного обращения. Будем
                    рассматривать для данной воронки и направления работу с
                    лояльным клиентом, который готов купить. Представим у нас в
                    компании работает менеджер - Вася и мы должны выстроить ему
                    дорожку, чтобы он помог клиенту приобрести у нас продукт
                    [...]
                  </p>
                  <g-link to="/" class="blog-page__card-link">Читать</g-link>
                </div>
              </div>
            </div>
          </div>
          <div class="card blog-page__card">
            <div class="blog-page__card-category">Категория</div>
            <div class="row">
              <div class="column column-50">
                <div class="blog-page__card-left">
                  <div class="blog-page__card-img">
                    <g-image src="@/assets/img/blog/blog-item.png" />
                  </div>
                </div>
              </div>
              <div class="column column-50">
                <div class="blog-page__card-right">
                  <h1 class="blog-page__card-title">
                    Эффективное построение воронки продаж в amoCRM
                  </h1>
                  <p class="blog-page__card-desc">
                    Начинайте с самого начала - полученного обращения. Будем
                    рассматривать для данной воронки и направления работу с
                    лояльным клиентом, который готов купить. Представим у нас в
                    компании работает менеджер - Вася и мы должны выстроить ему
                    дорожку, чтобы он помог клиенту приобрести у нас продукт
                    [...]
                  </p>
                  <g-link to="/" class="blog-page__card-link">Читать</g-link>
                </div>
              </div>
            </div>
          </div>
          <div class="card blog-page__card">
            <div class="blog-page__card-category">Категория</div>
            <div class="row">
              <div class="column column-50">
                <div class="blog-page__card-left">
                  <div class="blog-page__card-img">
                    <g-image src="@/assets/img/blog/blog-item.png" />
                  </div>
                </div>
              </div>
              <div class="column column-50">
                <div class="blog-page__card-right">
                  <h1 class="blog-page__card-title">
                    Эффективное построение воронки продаж в amoCRM
                  </h1>
                  <p class="blog-page__card-desc">
                    Начинайте с самого начала - полученного обращения. Будем
                    рассматривать для данной воронки и направления работу с
                    лояльным клиентом, который готов купить. Представим у нас в
                    компании работает менеджер - Вася и мы должны выстроить ему
                    дорожку, чтобы он помог клиенту приобрести у нас продукт
                    [...]
                  </p>
                  <g-link to="/" class="blog-page__card-link">Читать</g-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  blog (id: $id) {
    title
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.blog.title
    }
  }
}
</script>

<style lang="scss">
.blog-page {
  &__title {
    text-align: center;
  }
  &__list {
    margin-top: 49px;
  }
  &__card + &__card {
    margin-top: 50px;
  }
  &__card {
    display: flex;
    justify-content: space-between;
    padding: 61px 32px 35px;
    position: relative;
    &-category {
      display: flex;
      justify-content: center;
      color: $white_color;
      font-size: 13px;
      font-weight: $font_semibold;
      align-items: center;
      position: absolute;
      width: 170px;
      height: 36px;
      background-color: $main_color;
      border-radius: $border_radius;
      top: -15px;
      right: -25px;
      z-index: 6;
    }
    &-left {
    }
    &-right {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    &-img {
      max-width: 317px;
      max-height: 285px;
    }
    &-title {
      font-size: 27px;
      color: #232323;
      font-weight: $font_semibold;
    }
    &-desc {
      margin-top: 40px;
      font-size: 14px;
      color: #232323;
      font-weight: $font_regular;
      line-height: 1.648;
    }
    &-link {
      text-align: right;
      margin-top: 10px;
      font-size: 20px;
      color: #2e2e2e;
      font-weight: $font_semibold;
    }
  }
}
</style>
