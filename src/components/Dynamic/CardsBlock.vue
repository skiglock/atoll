<template>
  <div class="block cards-block">
    <div class="cards-block__head">
      <h1 class="title">Что такое технический аудит</h1>
      <p class="text cards-block__text">
        Проанализируем вашу систему продаж и составим карту внедрения или
        развития вашей amoCRM
      </p>
      <div class="cards-block__body">
        <div class="row">
          <div class="column column-50">
            <div class="card cards-block__card">
              <h1 class="title">Потенциал прибыли от текущих клиентов.</h1>
              <p class="text text cards-block__card-text">
                Часто компании делают ставку на новых клиентов и не работают с
                текущей базой.
              </p>
            </div>
          </div>
          <div class="column column-50">
            <div class="card cards-block__card">
              <h1 class="title">Потенциал прибыли от текущих клиентов.</h1>
              <p class="text cards-block__card-text">
                Часто компании делают ставку на новых клиентов и не работают с
                текущей базой.
              </p>
            </div>
          </div>
          <div class="column column-50">
            <div class="card cards-block__card">
              <h1 class="title">Потенциал прибыли от текущих клиентов.</h1>
              <p class="text cards-block__card-text">
                Часто компании делают ставку на новых клиентов и не работают с
                текущей базой.
              </p>
            </div>
          </div>
          <div class="column column-50">
            <div class="card cards-block__card">
              <h1 class="title">Потенциал прибыли от текущих клиентов.</h1>
              <p class="text cards-block__card-text">
                Часто компании делают ставку на новых клиентов и не работают с
                текущей базой.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardBlock'
}
</script>

<style lang="scss">
.cards-block {
  &__head {
    text-align: center;
  }
  &__text {
    margin-top: 24px;
  }
  &__body {
    margin-top: 57px;
  }
  &__card {
    position: relative;
    padding: 52px 66px 40px 69px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 442px;
    max-height: 344px;
    &::after {
      position: absolute;
      z-index: 12;
      content: '';
      width: 58px;
      height: 58px;
      border-radius: 50%;
      background-color: $white_color;
      box-shadow: 0px 2px 0px 0px rgba(0, 0, 0, 0.18);
      top: -22px;
      left: -5px;
    }
    &-text {
      margin-top: 33px;
    }
  }
}
</style>
