<template>
  <section class="consultation">
    <div class="container">
      <div class="consultation__inner">
        <div class="column" style="width: 50%">
          <h1 class="consultation__title">С чего мне начать?</h1>
          <p class="consultation__desc">
            Оставьте заявку и наш эксперт расскажет обо всех возможностях
            развития вашего отдела продаж
          </p>
          <button class="btn consultation__btn">Консультация</button>
        </div>
        <div class="column" style="width: 50%">
          <img class="consultation__img" src="img/consultation.png" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'MainConsultation'
}
</script>

<style lang="scss">
.consultation {
  padding: 55px 85px 0;

  &__inner {
    display: flex;
    flex-wrap: wrap;
  }
  &__title {
    color: #222222;
    font-weight: $font_bold;
    font-size: 33px;
  }
  &__desc {
    margin-top: 24px;
    font-size: 20px;
    color: #222222;
    font-weight: $font_light;
  }
  &__btn {
    margin-top: 30px;
    font-size: 18px;
    font-weight: $font_medium;
    letter-spacing: 1.436;
  }
}
</style>
