<template>
  <section class="section target">
    <div class="container">
      <h1 class="title target-title">Наша большая цель</h1>
      <h2 class="text">
        поменять устаревший подход к управлению продажами и доказать, что
        правильные инструменты позволяют системно выполнять план продаж с
        минимальными затратами ресурсов.
      </h2>
      <div class="target-img">
        <g-image src="@/assets/img/about/team-img-two.png" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SectionTarget'
}
</script>

<style lang="scss">
.target {
  text-align: center;
  &-title {
    font-weight: $font_bold;
    margin-bottom: 20px;
  }
  &-img {
    max-width: 921px;
  }
}
</style>
