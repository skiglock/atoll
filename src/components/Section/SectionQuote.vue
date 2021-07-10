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
  name: 'SectionQuote',
  props: {
    content: Object
  }
}
</script>

<style lang="scss">
.quote {
  display: flex;
  justify-content: center;
}
</style>
