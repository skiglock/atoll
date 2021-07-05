<template>
  <ul class="dropdown">
    <drop-down-item />
    <drop-down-item />
    <drop-down-item />
  </ul>
</template>

<script>
import DropDownItem from '@/components/Header/HeaderNavbar/DropDown/DropDownItem'
export default {
  name: 'DropDown',
  components: {
    DropDownItem
  }
}
</script>

<style lang="scss">
.dropdown {
  z-index: 30;
  margin-top: 20px;
  margin-left: -115px;
  position: absolute;
  display: flex;
  flex-direction: column;
  border-radius: 28px;
  background-color: $white_color;
  width: 394px;
  height: 283px;
  border: 1px solid rgba($black_color, 0.18);
  padding: 33px 50px;

  &__desc {
    margin-top: 3px;
    font-size: 10px;
    color: rgba(24, 24, 24, 0.52);
    line-height: 1.684;
    font-weight: $font_light;
  }
  &__link {
    font-size: 13px;
    color: rgb(24, 24, 24);
    line-height: 1.295;
    font-weight: $font_semibold;
  }
}
</style>
