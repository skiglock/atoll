<template>
  <section class="services">
    <div class="container">
      <div class="services__inner">
        <div class="row">
          <div class="column column-30">
            <div class="card services__card">
              <h1 class="title services__card-title">
                Аудит и стратегия развития amoCRM
              </h1>
              <span class="separator"></span>

              <div class="services__card-body">
                <p class="text services__card-text">
                  Проанализируем вашу систему продажи составим карту внедрения
                  или развития вашей amoCRM
                </p>
                <main-button class="services__card-btn">Подробнее</main-button>
              </div>
            </div>
          </div>
          <div class="column column-30">
            <div class="card services__card">
              <h1 class="title services__card-title">Внедрение amoCRM</h1>
              <span class="separator"></span>
              <div class="services__card-body">
                <p class="text services__card-text">
                  Изучим процессы вашей компании, настроим воронки продаж,
                  интеграции и обучим сотрудников работе с системой
                </p>
                <main-button class="services__card-btn">Подробнее</main-button>
              </div>
            </div>
          </div>
          <div class="column column-30">
            <div class="card services__card">
              <h1 class="title services__card-title">Сопровождение amoCRM</h1>
              <span class="separator"></span>
              <div class="services__card-body">
                <p class="text services__card-text">
                  Получите в распоряжение команду экспертов для ежемесячного
                  развития и гарантии работоспособности CRM-системы
                </p>
                <main-button class="services__card-btn">Подробнее</main-button>
              </div>
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
  .text {
    font-size: 14px;
  }
  // margin-top: 103px;
  &__inner {
    padding: 50px 0;
  }
  &__card {
    border-radius: 25px;
    background-color: $white_color;
    min-height: 264px;
    min-width: 260px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    &-title {
      min-height: 100px;
      padding: 30px;
      text-align: center;
      font-weight: $font_medium;
    }
    &-text {
      color: #1f1f1f;
      font-weight: $font_light;
    }
    &-btn {
      margin-top: 10px;
      font-size: 11px;
      text-align: center;
      height: 30px;
      align-self: flex-end;
    }
    &-body {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      padding: 27px;
    }
  }
}
</style>
