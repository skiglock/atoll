<template>
  <section class="blog">
    <div class="container">
      <div class="blog__head">
        <h1 class="blog__title">Полезные статьи в нашем блоге</h1>
        <p class="blog__desc">
          Регулярно пишем статьи о системах продажах, управлении проектами и
          делимся собственным опытом трансформации процессов.
        </p>
      </div>
      <div class="blog__body">
        <div class="blog__inner">
          <div class="blog__item">
            <h2 class="blog__item-title">
              Эффективное построение воронки продаж в amoCRM
            </h2>
            <a class="blog__item-link">Открыть</a>
          </div>
          <div class="blog__item">
            <h2 class="blog__item-title">
              Предприниматели о том, зачем бизнесу нужна CRM-система
            </h2>
            <a class="blog__item-link">Открыть</a>
          </div>
          <div class="blog__item">
            <h2 class="blog__item-title">
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
    position: relative;
    &::after {
      position: absolute;
      content: '';
      width: 11px;
      height: 100%;
      background-color: #487bfa;
      top: 0px;
      left: -25px;
      border-radius: $border_radius;
    }
    margin-bottom: 87px;
  }
  &__title {
    color: #222222;
    font-size: 30px;
    font-weight: $font_medium;
  }
  &__desc {
    font-size: 15px;
    color: #222222;
    font-weight: $font_light;
    margin-top: 23px;
  }
  &__item {
    border-radius: 20px;
    background-color: $white_color;
    box-shadow: 0px 2px 5px 0px rgba($black_color, 0.27);
    &-title {
      font-size: 30px;
      color: #222222;
      font-weight: $font_semibold;
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
