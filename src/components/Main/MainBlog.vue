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
        <div class="blog__inner">
          <div class="card blog__card">
            <h2 class="title blog__item-title">
              Эффективное построение воронки продаж в amoCRM
            </h2>
            <a class="blog__item-link">Открыть</a>
          </div>
          <div class="card blog__card">
            <h2 class="title blog__item-title">
              Предприниматели о том, зачем бизнесу нужна CRM-система
            </h2>
            <a class="blog__item-link">Открыть</a>
          </div>
          <div class="card blog__card">
            <h2 class="title blog__item-title">
              Интервью с Анной Ивановой, коммерчиским директором amoCRM
            </h2>
            <a class="blog__item-link">Открыть</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'MainBlog'
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
  &__card {
    border-radius: 20px;

    &-title {
    }
    &-link {
      font-size: 20px;
      font-weight: $font_light;
      color: #222222;
      cursor: pointer;
    }
  }
}
</style>
