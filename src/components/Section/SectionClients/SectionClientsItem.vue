<template>
  <g-link :to="url" class="card clients__item">
    <g-image class="clients__item-img" :src="logo" :alt="title" />
    <p class="clients__item-title">
      {{ title }}
    </p>
  </g-link>
</template>

<script>
export default {
  name: 'SectionClientsItem',
  props: {
    logo: Object,
    url: String,
    title: String
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
    max-width: 100%;
    max-height: 249px;
    border-radius: 28px;
    padding: 106px 85px 95px 77px;

    background-color: $white_color;
    &:hover {
      flex-direction: column;
      .clients__item-title {
        display: inline-block;
      }
      .clients__item-img {
        max-width: 102px;
        max-height: 48px;
      }
    }
    &-img {
      max-width: 202px;
      max-height: 48px;
    }
    &-title {
      margin-top: 20px;
      text-align: center;
      display: none;
    }
  }
}
</style>
