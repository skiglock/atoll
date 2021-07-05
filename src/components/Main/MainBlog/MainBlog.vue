<template>
  <section class="blog">
    <div class="container">
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
        <main-blog-card />
        <main-blog-card />
        <main-blog-card />
      </div>
    </div>
  </section>
</template>

<script>
import MainBlogCard from '@/components/Main/MainBlog/MainBlogCard'
export default {
  name: 'MainBlog',
  components: {
    MainBlogCard
  }
}
</script>

<style lang="scss">
.blog {
  &__inner {
  }
  &__head {
    margin-bottom: 87px;
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
