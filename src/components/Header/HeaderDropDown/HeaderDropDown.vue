<template>
  <ul class="dropdown">
    <header-drop-down-item
      v-for="{ node } in $static.allProducts.edges"
      :key="node.id"
      :title="node.title"
      :desc="node.description"
      :url="$getPath(node.path)"
    />
  </ul>
</template>

<static-query>
query {
  allProducts {
    edges {
      node {
        id
        title
        description
        path
      }
    }
  }
}
</static-query>

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
  max-width: 394px;
  min-height: 283px;
  border: 1px solid rgba($black_color, 0.18);
  padding: 33px 50px;
}
</style>
