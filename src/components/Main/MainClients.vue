<template>
  <section class="clients">
    <div class="container">
      <div class="clients__inner">
        <h1 class="title clients__title">Наши клиенты</h1>
        <div class="row">
          <div class="column column-50">
            <div class="clients__item">
              <g-image
                class="clients__item-img"
                src="@/assets/img/clients/delight.png"
              />
            </div>
          </div>
          <div class="column column-50">
            <div class="clients__item">
              <g-image
                class="clients__item-img"
                src="@/assets/img/clients/Mesto.png"
              />
            </div>
          </div>
          <main-button class="clients__btn">Все кейсы</main-button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import MainButton from '@/components/Common/MainButton'
export default {
  name: 'MainClients',
  components: {
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
  &__item {
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 364px;
    min-height: 249px;
    background-color: $white_color;
    &-img {
      max-width: 202px;
      max-height: 48px;
    }
  }

  &__btn {
    margin-top: 45px;
    width: 206px;
    font-size: 20px;
  }
}
</style>
