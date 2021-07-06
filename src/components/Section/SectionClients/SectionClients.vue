<template>
  <section class="clients">
    <div class="container">
      <div class="clients__inner">
        <h1 class="title clients__title">Наши клиенты</h1>
        <div class="row">
          <div class="column column-50">
            <section-clients-item />
          </div>
          <div class="column column-50">
            <section-clients-item />
          </div>
          <main-button class="clients__btn">Все кейсы</main-button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SectionClientsItem from './SectionClientsItem.vue'
import MainButton from '@/components/Common/MainButton'
export default {
  name: 'SectionClients',
  components: {
    SectionClientsItem,
    MainButton
  }
}
</script>

<style lang="scss">
.clients {
  .row {
    justify-content: center;
  }
  &__inner {
    padding: 55px 0;
  }
  &__title {
    text-align: center;
    margin-bottom: 68px;
  }

  &__btn {
    margin-top: 45px;
    max-width: 206px;
  }
}
</style>
