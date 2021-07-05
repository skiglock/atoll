<template>
  <section class="consultation">
    <div class="container">
      <div class="consultation__inner">
        <div class="row">
          <div class="column column-50">
            <h1 class="title consultation__title">С чего мне начать?</h1>
            <p class="text consultation__text">
              Оставьте заявку и наш эксперт расскажет обо всех возможностях
              развития вашего отдела продаж
            </p>
            <main-button class="btn consultation__btn"
              >Консультация</main-button
            >
          </div>
          <div class="column column-50">
            <g-image
              class="consultation__img"
              src="@/assets/img/consultation.png"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import MainButton from '@/components/Common/MainButton.vue'
export default {
  components: { MainButton },
  name: 'MainConsultation'
}
</script>

<style lang="scss">
.consultation {
  .column {
    padding-bottom: 0;
  }
  &__inner {
    padding: 55px 85px 0;
  }
  &__title {
  }
  &__text {
    margin-top: 24px;
  }
  &__img {
    max-width: 330px;
    max-height: 399px;
  }
  &__btn {
    margin-top: 30px;
    font-size: 18px;
    font-weight: $font_medium;
    // letter-spacing: 1.436px;
  }
}
</style>
