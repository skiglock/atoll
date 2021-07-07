<template>
  <transition name="sidebar">
    <div class="sidebar">
      <div class="sidebar__panel">
        <div class="sidebar__body">
          <slot></slot>
          <p class="sidebar__copyright">© 2021 Atollon</p>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'HeaderSidebar'
}
</script>

<style lang="scss">
.sidebar-enter-active,
.sidebar-leave-active {
  transition: transform 0.3s ease;
}
.sidebar-enter,
.sidebar-leave-to {
  transition: translateX(100%);
  transition: all 300ms ease-in 0s;
}
.sidebar {
  &__panel {
    overflow-y: auto;
    background-color: $section_color;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 30;
    height: 100%;
    padding: 35px 25px 15px;
    width: 100%;
    height: 100%;
    @media screen and (max-width: 576px) {
    }
  }
  &__close {
    position: absolute;
    top: 12px;
    right: 12px;
    cursor: pointer;
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color 0.3s ease-in-out;
  }
  &__body {
    margin-top: 14px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: calc(100% - 25px);
  }
  &__copyright {
    font-size: 14px;
  }
}
</style>
