<template>
  <section class="section clients">
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
        </div>
        <div class="clients__bottom">
          <main-button class="btn">Все кейсы</main-button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SectionClientsItem from './SectionClientsItem'
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
  &__inner {
    padding: 55px 0;
  }
  &__title {
    text-align: center;
    margin-bottom: 68px;
    @media screen and (max-width: 576px) {
      margin-bottom: 40px;
    }
  }

  &__bottom {
    text-align: center;
    margin-top: 45px;
  }
}
</style>
