<template>
  <li class="navbar__list-item">
    <a href @click.prevent="toggleDropdown" class="navbar__list-link"
      >Продукты</a
    >
    <transition name="fade">
      <ul class="dropdown" v-if="isDropdownOpen">
        <header-drop-down-item
          v-for="{ node } in $static.allProducts.edges"
          :key="node.id"
          :title="node.title"
          :desc="node.description"
          :url="$getPath(node.path)"
          @closeDropdown="isDropdownOpen = false"
        />
      </ul>
    </transition>
  </li>
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
  },
  data() {
    return {
      isDropdownOpen: false
    }
  },
  methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen
    },
    close(e) {
      if (!this.$el.contains(e.target)) {
        this.isDropdownOpen = false
      }
    }
  },
  mounted() {
    document.addEventListener('click', this.close)
  },
  beforeDestroy() {
    document.removeEventListener('click', this.close)
  }
}
</script>

<style lang="scss">
.dropdown {
  z-index: 60;
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
