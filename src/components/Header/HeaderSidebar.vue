<template>
  <div class="sidebar">
    <ul class="sidebar__menu">
      <li class="sidebar__menu-item">
        <a class="sidebar__menu-link">Продукты</a>
        <header-drop-down-item
          v-for="{ node } in $static.allProducts.edges"
          :key="node.id"
          :title="node.title"
          :desc="node.description"
          :url="$getPath(node.path)"
          @click.native="$emit('closeSidebar')"
        />
      </li>
      <li class="sidebar__menu-item" v-for="item in menu" :key="item.id">
        <g-link
          @click.native="$emit('closeSidebar')"
          :to="item.link"
          class="sidebar__menu-link"
          >{{ item.title }}</g-link
        >
      </li>
    </ul>
  </div>
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
import HeaderDropDownItem from './HeaderDropDown/HeaderDropDownItem'
export default {
  name: 'HeaderSidebar',
  props: {
    menu: Array
  },
  components: {
    HeaderDropDownItem
  },
  computed: {}
}
</script>

<style lang="scss">
.sidebar {
  background-color: $section_color;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 50;
  padding: 60px;
  width: 100%;
  height: 100%;
  display: flex;
  @media screen and (min-width: 768px) {
    display: none;
  }
  @media screen and (max-width: 768px) {
    padding-top: 50px;
    padding-bottom: 50px;
    .dropdown__item {
      margin-top: 20px;
    }
    .dropdown__desc {
    }
  }
  @media screen and (max-width: 360px) {
  }
  &__menu {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    @media screen and (max-width: 320px) {
    }
    &-item + &-item {
      @media screen and (max-width: 576px) {
        margin-top: 20px;
      }
    }
    &-link {
      font-size: 40px;
      color: $text_color;
      font-weight: $font_bold;
      @media screen and (max-width: 768px) {
        font-size: 35px;
      }
      @media screen and (max-width: 576px) {
        font-size: 30px;
      }
      @media screen and (max-width: 460px) {
        font-size: 25px;
      }

      &:hover {
      }
    }
  }
}
</style>
