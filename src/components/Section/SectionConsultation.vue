<template>
  <section class="consultation" :class="$route.path === '/' ? '' : 'section'">
    <div class="container">
      <div
        class="consultation__inner"
        :style="content.variant ? '' : { paddingTop: '55px' }"
      >
        <div class="row" :class="content.variant ? 'row--variant' : ''">
          <div class="column column-50">
            <div :class="content.variant ? 'consultation__left' : ''">
              <h1 class="title consultation__title">
                {{ content.title }}
              </h1>
              <p class="text consultation__text" v-if="!content.variant">
                {{ content.desc }}
              </p>
              <main-button
                class="consultation__btn"
                :backgroundcolor="content.variant ? '#000' : '#487bfa'"
                :hover="content.variant ? '#4c4c4c' : '#7397f3'"
                @click.native="setModalConsultation"
                >{{ setButtonTitle }}</main-button
              >
            </div>
          </div>
          <div class="column column-50">
            <div
              :class="
                (content.variant ? 'consultation__right' : '',
                content.variant ? '' : 'consultation__img--center')
              "
            >
              <div
                class="consultation__img"
                :class="content.variant ? 'consultation__img--subcircle' : ''"
              >
                <g-image :src="content.img" :alt="content.title" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import MainButton from '@/components/Common/MainButton.vue'
export default {
  name: 'SectionConsultation',
  props: {
    content: Object
  },
  components: {
    MainButton
  },
  computed: {
    setButtonTitle() {
      let buttonTitle = 'Консультация'
      if (this.content.variant) {
        buttonTitle = 'Мне интересно'
      }
      return buttonTitle
    }
  },
  methods: {
    setModalConsultation() {
      this.$store.commit('setModalTitle', 'консультацию')
      this.$store.commit('setIsModalOpen', true)
    }
  }
}
</script>

<style lang="scss">
.consultation {
  .column {
    padding-bottom: 0;
  }
  .row--variant {
    align-items: center;
  }
  &__left {
    text-align: right;
    @media screen and (max-width: 576px) {
      text-align: center;
    }
  }
  &__right {
    display: flex;
    justify-content: center;
  }
  &__inner {
    @media screen and (max-width: 576px) {
      text-align: center;
    }
  }
  &__title {
  }
  &__text {
    margin-top: 24px;
  }
  &__img {
    &--center {
      @media screen and (max-width: 576px) {
        display: flex;
        justify-content: center;
      }
    }
    max-width: 435px;
    max-height: 605px;
    position: relative;
    &--subcircle {
      &::after {
        position: absolute;
        content: '';
        z-index: 35;
        border: 15px solid $main_color;
        width: 100%;
        height: 15%;
        border-radius: 50% / 100%;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        border-top: 0;
        left: 0;
        right: 0;
        bottom: -14px;
        @media screen and (max-width: 576px) {
          border-width: 10px;
          bottom: -10px;
        }
      }
    }
  }
  &__btn {
    margin-top: 30px;
    font-weight: $font_medium;
    // letter-spacing: 1.436px;
    &--black {
      background-color: $black_color;
    }
  }
}
</style>
