<template>
  <div class="card blog__card">
    <h2 class="title blog__card-title">
      Эффективное построение воронки продаж в amoCRM
    </h2>
    <a class="blog__card-link">Открыть</a>
  </div>
</template>

<script>
export default {
  name: 'MainBlogCard'
}
</script>

<style lang="scss">
.blog {
  &__card {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 0 28px 0 39px;
    @media screen and (max-width: 576px) {
      padding: 0 20px;
    }
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
      @media screen and (max-width: 576px) {
        padding: 0 20px;
      }
    }
    &-title {
      width: 80%;
      line-height: 1.356;
      @media screen and (max-width: 576px) {
        width: 100%;
      }
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
