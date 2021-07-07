<template>
  <li class="dropdown__item">
    <g-link to="/" class="dropdown__link"
      >Аудит и стратегия развития amoCRM</g-link
    >
    <p class="dropdown__desc">
      Закажите анализ текущей системы и карту развития вашей CRM
    </p>
  </li>
</template>

<script>
export default {
  name: 'HeaderDropDownItem',
  data() {
    return {
      open: false
    }
  }
}
</script>

<style lang="scss">
.dropdown {
  &__item + &__item {
    margin-top: 20px;
  }
  &__item {
    position: relative;
    &::before {
      position: absolute;
      content: '';
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: rgb(54, 54, 54);
      top: 20px;
      left: -20px;
      z-index: 3;
    }
    flex-grow: 1;
    width: 100%;
  }
  &__desc {
    margin-top: 3px;
    font-size: 12px;
    color: rgba(24, 24, 24, 0.52);
    line-height: 1.684;
    font-weight: $font_regular;
  }
  &__link {
    font-size: 13px;
    color: rgb(24, 24, 24);
    line-height: 1.295;
    font-weight: $font_semibold;
  }
}
</style>
