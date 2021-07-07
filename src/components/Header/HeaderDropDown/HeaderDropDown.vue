<template>
  <ul class="dropdown">
    <header-drop-down-item />
    <header-drop-down-item />
    <header-drop-down-item />
  </ul>
</template>

<script>
import HeaderDropDownItem from './HeaderDropDownItem'
export default {
  name: 'HeaderDropDown',
  components: {
    HeaderDropDownItem
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
}
</style>
