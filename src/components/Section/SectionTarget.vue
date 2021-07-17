<template>
  <section class="section target">
    <div class="container">
      <h1 class="section-title target__title">{{ content.title }}</h1>
      <h2 class="text">
        {{ content.desc }}
      </h2>
      <div class="target__img">
        <g-image :src="content.img" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SectionTarget',
  props: {
    content: Object
  }
}
</script>

<style lang="scss">
.target {
  text-align: center;
  &__title {
    font-weight: $font_bold;
    margin-bottom: 20px;
  }
  &__img {
    max-width: 921px;
  }
}
</style>
