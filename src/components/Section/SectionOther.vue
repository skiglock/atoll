<template>
  <section class="section other">
    <div class="container">
      <h1 class="title" v-if="!content.variant">{{ content.title }}</h1>
      <div class="other__inner">
        <div
          class="row"
          :style="content.variant ? { flexDirection: 'row-reverse' } : ''"
        >
          <div class="column column-50">
            <div class="other__img">
              <g-image :src="content.img" />
            </div>
          </div>
          <div class="column column-50">
            <div class="other__text">
              <h1 class="title" v-if="content.variant">{{ content.title }}</h1>

              <p
                :style="content.variant ? { marginTop: '10px' } : ''"
                class="text"
                v-html="$options.filters.markdown(content.desc)"
              ></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SectionOther',
  props: {
    content: Object
  }
}
</script>

<style lang="scss">
.other {
  .title {
    text-align: center;
  }
  &__inner {
    margin-top: 63px;
  }
  &__img {
    display: flex;
    justify-content: center;
    img {
      max-width: 359px;
      max-height: 302px;
      @media screen and (max-width: 576px) {
        max-width: 100%;
        max-height: 100%;
      }
    }
  }
  &__text {
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    .text {
      text-align: right;
      line-height: 1.859;
    }
  }
}
</style>
