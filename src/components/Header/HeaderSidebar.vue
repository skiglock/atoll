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
        />
      </li>
      <li class="sidebar__menu-item">
        <g-link to="/about" class="sidebar__menu-link">О команде</g-link>
      </li>
      <li class="sidebar__menu-item">
        <g-link to="/about" class="sidebar__menu-link">Блог</g-link>
      </li>
      <li class="sidebar__menu-item">
        <g-link to="/contacts" class="sidebar__menu-link">Контакты</g-link>
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
  components: {
    HeaderDropDownItem
  }
}
</script>

<style lang="scss">
.sidebar {
  overflow-y: auto;
  background-color: $section_color;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 50;
  padding: 60px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 768px) {
    .dropdown__item {
      margin-top: 20px;
    }
    .dropdown__desc {
    }
  }
  @media screen and (max-width: 360px) {
    padding-top: 40px;
    padding-bottom: 40px;
  }
  &__menu {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    @media screen and (max-width: 320px) {
      justify-content: space-between;
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
