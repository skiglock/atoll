<template>
  <section class="demonstration">
    <div class="container">
      <div class="row">
        <div class="column column-30">
          <div class="demonstration__img">
            <g-image :src="content.img" />
          </div>
        </div>
        <div class="column column-60">
          <div class="demonstration__desc">
            <div class="title">
              {{ content.title }}
            </div>
            <div class="text">
              {{ content.desc }}
            </div>
            <main-button :fontsize="15" @click.native="setModalIntroduction"
              >Заказать проект внедрения</main-button
            >
            <main-button
              class="card"
              :fontsize="15"
              color="#000"
              backgroundcolor="#fff"
              hover="#e5e5e5"
              @click.native="setModalDemonstration"
              >Записаться на демонстрацию</main-button
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import MainButton from '@/components/Common/MainButton'
export default {
  name: 'SectionDemonstration',
  components: { MainButton },
  props: {
    content: Object
  },
  methods: {
    setModalDemonstration() {
      this.$store.commit('setModalTitle', 'демонстрацию')
      this.$store.commit('setIsModalOpen', true)
    },
    setModalIntroduction() {
      this.$store.commit('setModalTitle', 'внедрение')
      this.$store.commit('setIsModalOpen', true)
    }
  }
}
</script>

<style lang="scss">
.demonstration {
  .column {
    padding-bottom: 0;
  }
  &__img {
    @media screen and (max-width: 768px) {
      display: flex;
      justify-content: center;
    }
    img {
      max-width: 341px;
      max-height: 482px;
    }
  }
  &__desc {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
    @media screen and (max-width: 768px) {
      text-align: center;
      align-items: center;
      .title,
      .text,
      .btn {
        margin-top: 20px;
      }
    }
  }
  .btn {
    min-width: 302px;
    min-height: 50px;
    @media screen and (max-width: 768px) {
      min-width: auto;
      min-height: auto;
    }
  }
}
</style>
