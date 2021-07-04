<template>
  <div class="block price-block">
    <div class="container">
      <h1 class="title">Стоимость и формат сопровождения.</h1>
      <p class="text price-block__text">
        Выделенный аналитик будет планомерно развивать вашу CRM-систему и станет
        единым окном для всех возникающих проблем и вопросов.
      </p>
      <div class="price-block__services">
        <div class="row price-block__row">
          <div class="column column-50">
            <div class="price-block__card">
              <h1 class="price-block__card-title">35000 руб.</h1>
              <p class="price-block__card-desc">в месяц</p>
              <main-button
                backgroundcolor="#fff"
                color="#000"
                :fontsize="11"
                :width="155"
                :height="40"
                class="price-block__card-btn"
                >Выбрать</main-button
              >
            </div>
          </div>
          <div class="column column-50">
            <div class="price-block__list">
              <h1 class="title price-block__list-title">
                В рамках тарифа вам доступно:
              </h1>

              <div class="price-block__list-item">
                <span class="price-block__list-number">1</span>
                <p class="text price-block__list-text">
                  Личный чат с Аналитиком
                </p>
              </div>
              <div class="price-block__list-item">
                <span class="price-block__list-number">2</span>
                <p class="text price-block__list-text">
                  Высокий приоритет на срочые запросы и сообщения в чате
                </p>
              </div>
              <div class="price-block__list-item">
                <span class="price-block__list-number">3</span>
                <p class="text price-block__list-text">
                  Персональная доска в Asana с бэклогом идеи минимум тремя
                  задачами на реализацию
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MainButton from '@/components/Common/MainButton'
export default {
  components: { MainButton },
  name: 'PriceBlock'
}
</script>

<style lang="scss">
.price-block {
  &__row {
    justify-content: inherit;
  }
  &__text {
    margin-top: 19px;
  }
  &__services {
    margin-top: 64px;
  }
  &__card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 307px;
    height: 272px;
    border-radius: 37px;
    background-color: $main_color;
    &-title {
      font-size: 31px;
      color: $white_color;
      font-weight: $font_bold;
    }
    &-desc {
      margin-top: 7px;
      color: $white_color;
      font-weight: $font_regular;
      font-size: 15px;
    }
    &-btn {
      margin-top: 23px;
    }
  }
  &__list {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    &-item + &-item {
      margin-top: 10px;
    }
    &-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      justify-content: center;
    }
    &-number {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      background-color: $white_color;
      box-shadow: 0px 3px 3px 0px rgba($black_color, 0.15);
      width: 45px;
      height: 45px;
      font-size: 18px;
      color: #131313;
      font-weight: $font_light;
    }
    &-text {
      width: 100%;
      margin-left: 22px;
    }
    &-title {
      margin-top: 18px;
      margin-bottom: 25px;
    }
  }
}
</style>
