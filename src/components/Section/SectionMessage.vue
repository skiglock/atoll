<template>
  <section class="section message">
    <div class="container">
      <div class="title message__title">
        {{ content.title }}
      </div>
      <main-button class="message__btn" @click.native="setModalMessage"
        >Стать клиентом</main-button
      >
    </div>
  </section>
</template>

<script>
import MainButton from '@/components/Common/MainButton'

export default {
  name: 'SectionMessage',
  props: {
    content: Object
  },
  components: {
    MainButton
  },
  methods: {
    setModalMessage() {
      this.$store.commit('setModalName', 'Подключение')
      this.$store.commit('setModalTitle', 'подключение')
      this.$store.commit('setIsModalOpen', true)
    }
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
