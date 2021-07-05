<template>
  <div class="block plans-block">
    <div class="title">Вы должны регулярно заниматься своей CRM-системой</div>
    <div class="text">
      Вопросы и проблемы появляются регулярно, но их решение не влияет на успех
      отдела продаж.
    </div>
    <div class="plans-block__steps">
      <div class="row">
        <div class="column column-30">
          <div class="plans-block__item">
            <h1 class="plans-block__item-title">Грамотная архитектура</h1>
            <p class="plans-block__item-desc">
              Построим масштабируемую архитектуру отдела продаж на базе amoCRM
            </p>
          </div>
        </div>
        <div class="column column-30">
          <div class="plans-block__item">
            <h1 class="plans-block__item-title">Грамотная архитектура</h1>
            <p class="plans-block__item-desc">
              Построим масштабируемую архитектуру отдела продаж на базе amoCRM
            </p>
          </div>
        </div>
        <div class="column column-30">
          <div class="plans-block__item">
            <h1 class="plans-block__item-title">Грамотная архитектура</h1>
            <p class="plans-block__item-desc">
              Построим масштабируемую архитектуру отдела продаж на базе amoCRM
            </p>
          </div>
        </div>
        <div class="column column-30">
          <div class="plans-block__item">
            <h1 class="plans-block__item-title">Грамотная архитектура</h1>
            <p class="plans-block__item-desc">
              Построим масштабируемую архитектуру отдела продаж на базе amoCRM
            </p>
          </div>
        </div>
        <div class="column column-30">
          <div class="plans-block__item">
            <h1 class="plans-block__item-title">Грамотная архитектура</h1>
            <p class="plans-block__item-desc">
              Построим масштабируемую архитектуру отдела продаж на базе amoCRM
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PlansBlock'
}
</script>

<style lang="scss">
.plans-block {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .text {
    margin-top: 23px;
    line-height: 1.448;
  }
  &__steps {
    .row {
      justify-content: center;
    }
  }
  &__item {
    max-width: 303px;
    min-height: 236px;
    border-radius: 26px;
    background-color: $white_color;
    box-shadow: 0px 4px 7px 0px rgba($black_color, 0.17);
    padding: 40px 60px 60px 26px;
    &-title {
      font-size: 25px;
      color: #232323;
      font-weight: $font_medium;
    }
    &-desc {
      margin-top: 20px;
      font-size: 17px;
      font-weight: $font_regular;
      color: #232323;
    }
  }
}
</style>
