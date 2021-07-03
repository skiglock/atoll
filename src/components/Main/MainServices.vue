<template>
  <section class="services">
    <div class="container">
      <div class="services__inner">
        <div class="row">
          <div class="column">
            <div class="services__card">
              <h1 class="services__card-title">
                Аудит и стратегия развития amoCRM
              </h1>

              <p class="services__card-desc">
                Проанализируем вашу систему продажи составим карту внедрения или
                развития вашей amoCRM
              </p>
              <main-button class="services__card-btn">Подробнее</main-button>
            </div>
          </div>
          <div class="column">
            <div class="services__card">
              <h1 class="services__card-title">Внедрение amoCRM</h1>
              <p class="services__card-desc">
                Изучим процессы вашей компании, настроим воронки продаж,
                интеграции и обучим сотрудников работе с системой
              </p>
              <main-button class="services__card-btn">Подробнее</main-button>
            </div>
          </div>
          <div class="column">
            <div class="services__card">
              <h1 class="services__card-title">Сопровождение amoCRM</h1>
              <p class="services__card-desc">
                Получите в распоряжение команду экспертов для ежемесячного
                развития и гарантии работоспособности CRM-системы
              </p>
              <main-button class="services__card-btn">Подробнее</main-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import MainButton from '@/components/Common/MainButton'
export default {
  name: 'MainServices',
  components: {
    MainButton
  }
}
</script>

<style lang="scss">
.services {
  // margin-top: 103px;
  &__inner {
    padding: 50px 20px;
  }
  &__card + &__card {
    margin-right: 100px;
  }
  &__card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 37px 45px 18px;
    border-radius: 25px;
    background-color: $white_color;
    position: relative;
    min-height: 264px;
    min-width: 254px;
    &::after {
      content: '';
      width: 100%;
      position: absolute;
      height: 2px;
      background-color: #1f1f1f;
      opacity: 0.07;
      top: 102px;
    }
    &-title {
      text-align: center;
      font-size: 22px;
      color: #222222;
      font-weight: $font_medium;
    }
    &-desc {
      font-size: 14px;
      color: #1f1f1f;
      font-weight: $font_light;
    }
    &-btn {
      font-weight: $font_semibold;
      font-size: 11px;
      width: 105px;
      height: 30px;
      align-self: flex-end;
    }
  }
}
</style>
