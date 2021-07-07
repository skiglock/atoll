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
    padding: 0 30px;
    position: relative;
    &::after {
      position: absolute;
      content: '';
      width: 11px;
      height: 100%;
      background-color: #487bfa;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      border-radius: $border_radius;
      z-index: 8;
    }
  }
}
</style>
