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
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 364px;
    max-height: 249px;
    border-radius: 28px;
    padding: 106px 85px 95px 77px;

    background-color: $white_color;
    &-img {
      max-width: 202px;
      max-height: 48px;
    }
  }

  &__btn {
    margin-top: 45px;
    max-width: 206px;
  }
}
</style>
