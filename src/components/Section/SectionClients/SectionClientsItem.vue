<template>
  <g-link :to="url" class="clients__item">
    <g-image class="clients__item-img" :src="logo" />
  </g-link>
</template>

<script>
export default {
  name: 'SectionClientsItem',
  props: {
    logo: String,
    url: String
  }
}
</script>

<style lang="scss">
.clients {
  &__item {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 400px;
    max-height: 249px;
    border-radius: 28px;
    padding: 106px 85px 95px 77px;

    background-color: $white_color;
    &-img {
      max-width: 202px;
      max-height: 48px;
    }
  }
}
</style>
