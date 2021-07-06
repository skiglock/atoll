<template>
  <section class="section quote">
    <div class="container">
      <blockquote>
        <p class="text">
          Кроме этого, вы узнаете, как улучшить работу с текущей базой клиентов,
          добиться более эффективной работы менеджеров, упростить взаимодействие
          с CRM для всей команды и научить руководителей управлять отделом,
          используя возможности системыи данные аналитики.
        </p>
      </blockquote>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SectionQuote'
}
</script>

<style lang="scss">
.quote {
  display: flex;
  justify-content: center;
  blockquote {
    position: relative;
    &::after {
      position: absolute;
      content: '';
      width: 11px;
      height: 100%;
      background-color: #487bfa;
      top: 0px;
      left: -25px;
      bottom: 0;
      right: 0;
      border-radius: $border_radius;
      z-index: 8;
      @media screen and (max-width: 992px) {
        width: 9px;
        left: -20px;
      }
      @media screen and (max-width: 768px) {
        font-size: 7px;
        left: -18px;
      }
      @media screen and (max-width: 576px) {
        font-size: 5px;
        left: -16px;
      }
    }
  }
}
</style>
