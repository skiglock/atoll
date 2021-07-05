<template>
  <form class="form">
    <div class="form__item">
      <input type="text" class="form__input" placeholder="Ваше имя" />
    </div>
    <div class="form__item">
      <input type="text" class="form__input" placeholder="Телефон" />
    </div>
    <div class="form__item">
      <input type="text" class="form__input" placeholder="E-mail" />
    </div>
    <main-button type="submit" class="form__btn"> Оставить заявку </main-button>
    <p class="form__agree">
      Нажимая на кнопку "Оставить заявку" вы даете свое согласие на обработку
      персональных данных
    </p>
  </form>
</template>

<script>
import MainButton from '@/components/Common/MainButton'

export default {
  name: 'MainForm',
  components: {
    MainButton
  }
}
</script>

<style lang="scss">
.form {
  &__item {
    margin-top: 30px;
  }
  &__input {
    font-size: 14px;
    font-family: 'Raleway', sans-serif;
    width: 100%;
    font-weight: $font_light;
    color: #1b1b1b;
    border: none;
    border-bottom: 2px solid rgba(#1c1c1c, 0.149);
    outline: none;
    padding: 9px 3px;
    &::placeholder {
      font-weight: $font_light;
      color: #1b1b1b;
    }
  }
  &__btn {
    margin-top: 29px;
    height: 44px;
  }
  &__agree {
    margin-top: 9px;
    font-size: 9px;
    font-weight: $font_light;
    color: #404040;
    opacity: 0.5;
  }
}
</style>
