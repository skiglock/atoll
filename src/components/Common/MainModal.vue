<template>
  <div class="backdrop">
    <div class="modal">
      <div class="modal__close">
        <div class="close" @click="$emit('close')"></div>
      </div>
      <div class="modal__wrapper center">
        <h1 class="title">
          Оставьте заявку {{ modalTitle ? `на ${modalTitle}` : '' }}
        </h1>
        <p class="text" :style="{ marginTop: '10px' }">
          Менеджер свяжется с вами в ближайшее время!
        </p>
        <main-form title="Modal" class="modal__form modal__form--center" />
      </div>
    </div>
  </div>
</template>

<script>
import MainForm from './MainForm'
export default {
  name: 'MainModal',
  props: {
    name: String
  },
  components: {
    MainForm
  },
  computed: {
    modalTitle() {
      return this.$store.state.modal.modalTitle
    }
  }
}
</script>

<style lang="scss">
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba($black_color, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 90;
}
.modal {
  background: $white_color;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  padding: 40px 60px 20px;
  max-width: 450px;
  .center {
    text-align: center;
  }
  position: relative;
  &__close {
    position: absolute;
    top: 15px;
    right: 15px;
  }
  &__wrapper {
    z-index: 91;
  }
}

.close {
  width: 30px;
  height: 30px;
  border-radius: 30px;
  position: relative;
  z-index: 1;
  cursor: pointer;
}
.close:before {
  content: '+';
  color: $black_color;
  position: absolute;
  z-index: 2;
  transform: rotate(45deg);
  font-size: 50px;
  line-height: 1;
  top: -10px;
  left: 2px;
  transition: all 0.3s cubic-bezier(0.77, 0, 0.2, 0.85);
}
.close:after {
  content: '';
  position: absolute;
  top: 0;
  left: -2px;
  width: 100%;
  height: 100%;
  border-radius: 100%;
  background: $black_color;
  z-index: 1;
  transition: all 0.3s cubic-bezier(0.77, 0, 0.2, 0.85);
  transform: scale(0.01);
}
.close:hover:after {
  transform: scale(1);
}
.close:hover:before {
  transform: scale(0.8) rotate(45deg);
  color: #fff;
}
.modal__form {
  &--center {
    text-align: center;
  }
}
</style>
