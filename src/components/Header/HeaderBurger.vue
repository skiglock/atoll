<template>
  <div class="burger" role="button" :class="active ? 'burger--active' : ''">
    <div class="burger__item burger__item--1"></div>
    <div class="burger__item burger__item--2"></div>
    <div class="burger__item burger__item--3"></div>
  </div>
</template>

<script>
export default {
  name: 'HeaderBurger',
  props: {
    active: Boolean
  }
}
</script>

<style lang="scss">
.burger {
  height: 28px;
  width: 32px;
  display: none;
  flex-direction: column;
  justify-content: space-around;
  z-index: 60;
  &:hover {
    cursor: pointer;
  }
  @media screen and (max-width: 768px) {
    display: flex;
  }
  &__item {
    border-radius: 5px;
    height: 4px;
    width: 100%;
    background-color: $black_color;
    transition: transform 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95),
      opacity 300ms linear;

    &--1 {
      .burger--active & {
        transform: translate(0, 10px) rotate(45deg);
      }
    }

    &--2 {
      .burger--active & {
        opacity: 0;
      }
    }

    &--3 {
      .burger--active & {
        transform: translate(0, -9px) rotate(-45deg);
      }
    }
  }
}
</style>
