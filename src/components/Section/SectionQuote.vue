<template>
  <section class="section quote">
    <div class="container">
      <blockquote>
        <p class="text">
          {{ content.title }}
        </p>
      </blockquote>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SectionQuote',
  props: {
    content: Object
  }
}
</script>

<style lang="scss">
.quote {
  display: flex;
  justify-content: center;
}
</style>
