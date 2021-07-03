<template>
  <Layout
    ><section class="blog-page">
      <div class="container">
        <h1 class="blog-page__title">
          Блог о продажах, предпринимательстве и управлении
        </h1>
        <div class="blog-page__list">
          <div class="blog-page__item">
            <div class="blog-page__item-category">Категория</div>
            <div class="blog-page__item-left">
              <div class="blog-page__item-img">
                <g-image src="@/assets/img/blog/blog-item.png" />
              </div>
            </div>
            <div class="blog-page__item-right">
              <h1 class="blog-page__item-title">
                Эффективное построение воронки продаж в amoCRM
              </h1>
              <p class="blog-page__item-desc">
                Начинайте с самого начала - полученного обращения. Будем
                рассматривать для данной воронки и направления работу с лояльным
                клиентом, который готов купить. Представим у нас в компании
                работает менеджер - Вася и мы должны выстроить ему дорожку,
                чтобы он помог клиенту приобрести у нас продукт [...]
              </p>
              <g-link to="/" class="blog-page__item-link">Читать</g-link>
            </div>
          </div>
          <div class="blog-page__item">
            <div class="blog-page__item-category">Категория</div>

            <div class="blog-page__item-left">
              <div class="blog-page__item-img">
                <g-image src="@/assets/img/blog/blog-item.png" />
              </div>
            </div>
            <div class="blog-page__item-right">
              <h1 class="blog-page__item-title">
                Эффективное построение воронки продаж в amoCRM
              </h1>
              <p class="blog-page__item-desc">
                Начинайте с самого начала - полученного обращения. Будем
                рассматривать для данной воронки и направления работу с лояльным
                клиентом, который готов купить. Представим у нас в компании
                работает менеджер - Вася и мы должны выстроить ему дорожку,
                чтобы он помог клиенту приобрести у нас продукт [...]
              </p>
              <g-link to="/" class="blog-page__item-link">Читать</g-link>
            </div>
          </div>
          <div class="blog-page__item">
            <div class="blog-page__item-category">Категория</div>

            <div class="blog-page__item-left">
              <div class="blog-page__item-img">
                <g-image src="@/assets/img/blog/blog-item.png" />
              </div>
            </div>
            <div class="blog-page__item-right">
              <h1 class="blog-page__item-title">
                Эффективное построение воронки продаж в amoCRM
              </h1>
              <p class="blog-page__item-desc">
                Начинайте с самого начала - полученного обращения. Будем
                рассматривать для данной воронки и направления работу с лояльным
                клиентом, который готов купить. Представим у нас в компании
                работает менеджер - Вася и мы должны выстроить ему дорожку,
                чтобы он помог клиенту приобрести у нас продукт [...]
              </p>
              <g-link to="/" class="blog-page__item-link">Читать</g-link>
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
      title: this.$page.about.title
    }
  }
}
</script>

<style lang="scss">
.blog-page {
  &__title {
    text-align: center;
    color: #232323;
    font-weight: $font_semibold;
    font-size: 21px;
  }
  &__list {
    margin-top: 49px;
  }
  &__item + &__item {
    margin-top: 50px;
  }
  &__item {
    display: flex;
    justify-content: space-between;
    padding: 61px 32px 35px;
    border-radius: 26px;
    background-color: $white_color;
    box-shadow: 0px 5px 6px 0px rgba($black_color, 0.12);
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
    }
    &-left {
      width: 40%;
    }
    &-right {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-left: 63px;
      width: 50%;
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
