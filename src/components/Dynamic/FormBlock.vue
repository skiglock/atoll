<template>
  <div class="block form-block">
    <div class="row">
      <div class="column column-50">
        <div class="form-block__inner">
          <div class="title form-block__title">
            Готовы узнать потенциал своего отдела продаж?
          </div>
          <div class="text form-block__text">Оставьте заявку прямо сейчас!</div>
        </div>
      </div>
      <div class="column column-50"><main-form /></div>
    </div>
  </div>
</template>

<script>
import MainForm from '@/components/Common/MainForm'
export default {
  name: 'FormBlock',
  components: {
    MainForm
  }
}
</script>

<style lang="scss">
.form-block {
  &__inner {
    text-align: right;
    margin-right: 70px;
    @media screen and (max-width: 576px) {
      text-align: center;
      margin-right: 0;
    }
  }
  &__title {
    text-align: inherit;
    line-height: 1.101;
  }
  &__text {
    margin-top: 27px;
    @media screen and (max-width: 576px) {
      margin-top: 5px;
    }
  }
}
</style>
