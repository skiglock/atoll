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
              <span class="cards-block__card-icon"
                ><g-image src="@/assets/img/dynamic/icon_1.png"
              /></span>
              <h1 class="title">Потенциал прибыли от текущих клиентов.</h1>
              <p class="text text cards-block__card-text">
                Часто компании делают ставку на новых клиентов и не работают с
                текущей базой.
              </p>
            </div>
          </div>
          <div class="column column-50">
            <div class="card cards-block__card">
              <span class="cards-block__card-icon"
                ><g-image src="@/assets/img/dynamic/icon_2.png"
              /></span>

              <h1 class="title">Потенциал прибыли от текущих клиентов.</h1>
              <p class="text cards-block__card-text">
                Часто компании делают ставку на новых клиентов и не работают с
                текущей базой.
              </p>
            </div>
          </div>
          <div class="column column-50">
            <div class="card cards-block__card">
              <span class="cards-block__card-icon"
                ><g-image src="@/assets/img/dynamic/icon_3.png"
              /></span>

              <h1 class="title">Потенциал прибыли от текущих клиентов.</h1>
              <p class="text cards-block__card-text">
                Часто компании делают ставку на новых клиентов и не работают с
                текущей базой.
              </p>
            </div>
          </div>
          <div class="column column-50">
            <div class="card cards-block__card">
              <span class="cards-block__card-icon"
                ><g-image src="@/assets/img/dynamic/icon_4.png"
              /></span>

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
    padding: 45px 18px;
  }
  .column {
    @media screen and (max-width: 768px) {
      padding: 20px;
    }
  }
  &__card {
    position: relative;
    padding: 52px 66px 40px 69px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 442px;
    min-height: 344px;
    &-icon {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      z-index: 12;
      width: 58px;
      height: 58px;
      border-radius: 50%;
      background-color: $white_color;
      box-shadow: 0px 2px 0px 0px rgba(0, 0, 0, 0.18);
      top: -22px;
      left: -5px;
      img {
        width: 42px;
        height: 42px;
        border-radius: 10%;
      }
    }
    &-text {
      margin-top: 33px;
    }
  }
}
</style>
