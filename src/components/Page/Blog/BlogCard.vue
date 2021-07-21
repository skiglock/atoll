<template>
  <div class="card blog-page__card">
    <div class="blog-page__card-category">{{ category }}</div>
    <div class="row">
      <div class="column column-50">
        <div class="blog-page__card-left">
          <div class="blog-page__card-img">
            <g-image :src="img" :alt="title" />
          </div>
        </div>
      </div>
      <div class="column column-50">
        <div class="blog-page__card-right">
          <h1 class="title blog-page__card-title">
            {{ title }}
          </h1>
          <p class="text blog-page__card-text">
            {{ desc.length > 285 ? desc.slice(0, 285) + ' [...]' : desc }}
          </p>
          <g-link :to="$getPath(url)" class="blog-page__card-link"
            >Читать</g-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogCard',
  props: {
    title: String,
    img: Object,
    desc: String,
    url: String,
    category: String
  }
}
</script>

<style lang="scss">
.blog-page {
  &__card + &__card {
    margin-top: 50px;
  }
  &__card {
    display: flex;
    justify-content: space-between;
    padding: 61px 32px 35px;
    @media screen and (max-width: 576px) {
      padding: 30px;
    }
    position: relative;
    @media screen and (max-width: 576px) {
      text-align: center;
    }
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
      right: -15px;
      z-index: 6;
      @media screen and (max-width: 992px) {
        right: 0;
      }
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
      width: 100%;
    }
    &-title {
    }
    &-text {
      margin-top: 40px;
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
