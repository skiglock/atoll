<template>
  <section class="clients">
    <div class="container">
      <h1 class="clients__title">Наши клиенты</h1>
      <div class="clients__inner">
        <div class="column" style="width: 50%">
          <div class="clients__item">
            <g-image
              class="clients__item-img"
              src="@/assets/img/clients/delight.png"
            />
          </div>
        </div>
        <div class="column" style="width: 50%">
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
  padding: 55px 90px;

  &__inner {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  &__title {
    text-align: center;
    color: #222222;
    font-size: 26px;
    font-weight: $font_bold;
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
