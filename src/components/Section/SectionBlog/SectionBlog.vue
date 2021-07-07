<template>
  <section class="section blog">
    <div class="container">
      <div class="blog__inner">
        <div class="blog__head">
          <blockquote>
            <h1 class="title blog__title">Полезные статьи в нашем блоге</h1>
            <p class="text blog__text">
              Регулярно пишем статьи о системах продажах, управлении проектами и
              делимся собственным опытом трансформации процессов.
            </p>
          </blockquote>
        </div>
        <div class="blog__body">
          <section-blog-item />
          <section-blog-item />
          <section-blog-item />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SectionBlogItem from './SectionBlogItem.vue'
export default {
  name: 'SectionBlog',
  components: {
    SectionBlogItem
  }
}
</script>

<style lang="scss">
.blog {
  &__inner {
  }
  &__head {
    margin-bottom: 10%;
    @media screen and (max-width: 576px) {
      text-align: center;
    }
  }
  &__title {
  }
  &__text {
    margin-top: 23px;
  }
  &__body {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(417px, 1fr));
    grid-gap: 27px;
    @media screen and (max-width: 460px) {
      grid-gap: 15px;

      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    }
    @media screen and (max-width: 320px) {
      grid-gap: 10px;

      grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    }
  }
}
</style>
