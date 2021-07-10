<template>
  <section class="section other">
    <div class="container">
      <h1 class="title">{{ content.title }}</h1>
      <div class="other__inner">
        <div class="row">
          <div class="column column-50">
            <div class="other__img">
              <g-image src="@/assets/img/dynamic/notebook.png" />
            </div>
          </div>
          <div class="column column-50">
            <div class="other__text">
              <p
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
    max-width: 359px;
    max-height: 302px;
  }
  &__text {
    height: 100%;
    display: flex;
    align-items: center;
    .text {
      text-align: right;
      line-height: 1.859;
    }
  }
}
</style>
