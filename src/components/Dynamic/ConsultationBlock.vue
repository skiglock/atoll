<template>
  <div class="block consultation-block">
    <div class="row">
      <div class="column column-50">
        <div class="consultation-block__left">
          <div class="title consultation-block__title">
            Примените экспертизу нашей команды, чтобы усилить вашу систему
            продаж
          </div>
          <div class="text consultation-block__text">
            Оставьте заявку, чтобы получить приглашение на бесплатную
            консультацию
          </div>
          <main-button
            class="consultation-block__btn"
            :width="304"
            :fontsize="14"
            backgroundcolor="#000"
            color="#fff"
            >Получить консультацию</main-button
          >
        </div>
      </div>
      <div class="column column-50">
        <div class="consultation-block__right">
          <div class="consultation-block__img">
            <g-image src="@/assets/img/dynamic/girl.png" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MainButton from '@/components/Common/MainButton'
export default {
  name: 'ConsultationBlock',
  components: { MainButton }
}
</script>

<style lang="scss">
.consultation-block {
  &__left {
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
  }
  &__title {
    width: 100%;
    text-align: left;
    line-height: 1.5;
  }
  &__text {
    margin-top: 19px;
    width: 70%;
    line-height: 1.4;
  }
  &__img {
    position: relative;
    &::after {
      z-index: 13;
      position: absolute;
      content: '';
      border: 15px solid #487bfa;
      max-width: 440px;
      max-height: 144px;
      border-radius: 50% / 100%;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      border-top: 0;
      left: 0;
      right: 0;
      bottom: -2px;
      top: 345px;
    }
  }
  &__btn {
    margin-top: 35px;
  }
}
</style>
