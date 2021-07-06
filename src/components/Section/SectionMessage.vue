<template>
  <section class="section message">
    <div class="container">
      <div class="title message__title">
        Мы делаем смелые и нужные вещи вместе. Вы с нами?
      </div>
      <main-button class="message__btn">Стать клиентом</main-button>
    </div>
  </section>
</template>

<script>
import MainButton from '@/components/Common/MainButton'

export default {
  name: 'SectionMessage',
  components: {
    MainButton
  }
}
</script>

<style lang="scss">
.message {
  text-align: center;
  &__title {
    line-height: 1.324;
    font-weight: $font_semibold;
  }
  &__btn {
    margin-top: 35px;
  }
}
</style>
