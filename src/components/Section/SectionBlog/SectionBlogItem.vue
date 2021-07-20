<template>
  <g-link :to="$getPath(url)" class="blog__card">
    <div class="blog__card-inner">
      <div class="blog__card-front">
        <h2 class="title blog__card-title">
          {{ title }}
        </h2>
        <g-link :to="$getPath(url)" class="blog__card-link">Открыть</g-link>
      </div>
      <div class="blog__card-back">
        <p class="text">
          {{ desc.length > 193 ? desc.slice(0, 193) + ' [...]' : desc }}
        </p>
      </div>
    </div>
  </g-link>
</template>

<script>
export default {
  name: 'MainBlogCard',
  props: {
    title: String,
    url: String,
    desc: String
  }
}
</script>

<style lang="scss">
.blog {
  &__card {
    min-height: 165px;
    perspective: 1000px;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    &--first {
      grid-column: span 1;
      grid-row: span 2;
      .blog__card {
        &-link {
          align-self: flex-start;
          @media screen and (max-width: 992px) {
            align-self: flex-end;
          }
        }
        &-front {
          padding-top: 120px;
        }
      }
      @media screen and (max-width: 890px) {
        .blog__card {
          &-front {
            padding: 30px 31px 31px 39px;
          }
        }
      }
    }
    &:hover,
    &:focus {
      cursor: pointer;
      .blog__card-inner {
        transform: rotateY(180deg);
      }
    }
    &-inner {
      height: 100%;
      width: 100%;
      transition: transform 0.6s;
      transform-style: preserve-3d;
      position: relative;
      border-radius: 26px;
      background-color: $white_color;
      box-shadow: 0px 5px 6px 0px rgba($black_color, 0.12);
      &:hover {
        box-shadow: 0px 5px 6px 0px rgba($black_color, 0.22);
      }

      border-radius: 20px;
    }
    &-front,
    &-back {
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      justify-content: space-between;
      width: 100%;
      height: 100%;
      backface-visibility: hidden;
      -webkit-backface-visibility: hidden;
      position: absolute;
      bottom: 0;
      left: 0;
      padding: 30px 31px 31px 39px;
    }
    &-front {
      z-index: 2;
    }
    &-back {
      z-index: 1;
      transform: rotateY(180deg);
    }
    &-title {
      width: 100%;
      line-height: 1.356;
      // @media screen and (max-width: 576px) {
      //   width: 100%;
      // }
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
