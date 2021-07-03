<template>
  <section class="order">
    <div class="container">
      <div class="order__inner">
        <div class="column">
          <h1 class="order__title">Заказать интеграцию</h1>
          <p class="order__desc">
            Менеджер узнает про вашу задачу и подскажет что делать дальше
          </p>
        </div>
        <div class="column">
          <form class="order__form">
            <div class="order__form-item">
              <input
                type="text"
                class="order__form-input"
                placeholder="Ваше имя"
              />
            </div>
            <div class="order__form-item">
              <input
                type="text"
                class="order__form-input"
                placeholder="Телефон"
              />
            </div>
            <div class="order__form-item">
              <input
                type="text"
                class="order__form-input"
                placeholder="E-mail"
              />
            </div>
            <main-button type="submit" class="order__form-btn">
              Оставить заявку
            </main-button>
            <p class="order__form-agree">
              Нажимая на кнопку "Оставить заявку" вы даете свое согласие на
              обработку персональных данных
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import MainButton from '@/components/Common/MainButton'
export default {
  name: 'MainOrder',
  components: {
    MainButton
  }
}
</script>

<style lang="scss">
.order {
  margin-top: 222px;
  &__inner {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  &__title,
  &__desc {
    text-align: right;
  }
  &__title {
    font-size: 28px;
    color: #1b1b1b;
    font-weight: $font_bold;
  }
  &__desc {
    font-size: 18px;
    color: #1b1b1b;
    font-weight: $font_regular;
    margin-top: 21px;
  }
  &__form {
    margin-left: 114px;
    &-item {
      margin-top: 30px;
    }
    &-input {
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
    &-btn {
      margin-top: 29px;
      font-size: 14px;
      width: 230px;
      height: 44px;
    }
    &-agree {
      margin-top: 9px;
      font-size: 9px;
      font-weight: $font_light;
      color: #404040;
      opacity: 0.5;
    }
  }
}
</style>
