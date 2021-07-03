<template>
  <section class="clients">
    <div class="container">
      <h1 class="clients__title">Наши клиенты</h1>
      <div class="clients__inner">
        <div class="column" style="width: 50%">
          <div class="clients__item">
            <img class="clients__item-img" src="./img/clients/delight.png" />
          </div>
        </div>
        <div class="column" style="width: 50%">
          <div class="clients__item">
            <img class="clients__item-img" src="./img/clients/Mesto.png" />
          </div>
        </div>
        <button class="btn clients__btn">Все кейсы</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'MainClients'
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
  }
  &__btn {
    margin-top: 45px;
    width: 206px;
    font-size: 20px;
  }
}
</style>
