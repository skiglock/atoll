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
        <div class="card blog__card">
          <h2 class="title blog__card-title">
            Эффективное построение воронки продаж в amoCRM
          </h2>
          <a class="blog__card-link">Открыть</a>
        </div>
        <div class="card blog__card">
          <h2 class="title blog__card-title">
            Предприниматели о том, зачем бизнесу нужна CRM-система
          </h2>
          <a class="blog__card-link">Открыть</a>
        </div>
        <div class="card blog__card">
          <h2 class="title blog__card-title">
            Интервью с Анной Ивановой, коммерчиским директором amoCRM
          </h2>
          <a class="blog__card-link">Открыть</a>
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
  &__card {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 0 28px 0 39px;
    border-radius: 20px;
    min-height: 165px;
    border: 1px solid #ccc;
    box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.3);
    &:first-child {
      justify-content: space-between;
      .blog__card-link {
        align-self: flex-start;
      }
      .blog__card-title {
        margin-top: 100px;
      }
      padding: 30px 31px 31px 39px;
      grid-column: span 1;
      grid-row: span 2;
      @media screen and (max-width: 992px) {
        justify-content: space-evenly;
        .blog__card-link {
          align-self: flex-end;
        }
        .blog__card-title {
          margin-top: 0;
        }
        padding: 0 28px 0 39px;
        grid-column: inherit;
        grid-row: inherit;
      }
    }
    &-title {
      width: 80%;
      line-height: 1.356;
    }
    &-link {
      align-self: flex-end;
      font-size: 20px;
      font-weight: $font_light;
      color: #222222;
      cursor: pointer;
    }
  }
}
</style>
