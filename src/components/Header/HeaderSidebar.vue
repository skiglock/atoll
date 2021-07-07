<template>
  <div class="sidebar">
    <ul class="sidebar__menu">
      <li class="sidebar__menu-item">
        <a class="sidebar__menu-link">Продукты</a>
        <header-drop-down-item />
        <header-drop-down-item />
        <header-drop-down-item />
      </li>
      <li class="sidebar__menu-item">
        <a class="sidebar__menu-link">О команде</a>
      </li>
      <li class="sidebar__menu-item">
        <a class="sidebar__menu-link">Блог </a>
      </li>
      <li class="sidebar__menu-item">
        <a class="sidebar__menu-link">Контакты</a>
      </li>
    </ul>
  </div>
</template>

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
  z-index: 30;
  padding: 80px 60px;
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
  &__menu {
    &-item + &-item {
      margin-top: 10%;
    }
    &-link {
      font-size: 30px;
      font-weight: $font_bold;
      color: $text_color;
      &:hover {
      }
    }
  }
}
</style>
