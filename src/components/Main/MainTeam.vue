<template>
  <section class="team">
    <div class="container">
      <h1 class="team__title">Наша команда экспертов</h1>
      <div class="team__inner">
        <div class="column">
          <div class="team__person">
            <div class="team__person-circle">
              <img class="team__person-avatar" src="./img/team/1.png" alt="" />
            </div>
            <h2 class="team__person-name">Сергей Иванов</h2>
            <h3 class="team__person-position">Руководитель проектов</h3>
            <h4 class="team__person-practice">2 года опыта работы с amoCRM</h4>
          </div>
        </div>
        <div class="column">
          <div class="team__person">
            <div class="team__person-circle">
              <img class="team__person-avatar" src="./img/team/1.png" alt="" />
            </div>
            <h2 class="team__person-name">Константин Григорьев</h2>
            <h3 class="team__person-position">CEO</h3>
            <h4 class="team__person-practice">4 года работы с CRM системами</h4>
          </div>
        </div>
        <div class="column">
          <div class="team__person">
            <div class="team__person-circle">
              <img class="team__person-avatar" src="./img/team/1.png" alt="" />
            </div>
            <h2 class="team__person-name">Андрей Емельянов</h2>
            <h3 class="team__person-position">Эксперт по продажам</h3>
            <h4 class="team__person-practice">2 года опыта работы с amoCRM</h4>
          </div>
        </div>
      </div>
      <div class="team__dots">
        <div class="team__dots-item team__dots-item--active"></div>
        <div class="team__dots-item"></div>
        <div class="team__dots-item"></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'MainTeam'
}
</script>

<style lang="scss">
.team {
  padding: 105px 0;
  &__inner {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  &__title {
    font-weight: $font_bold;
    font-size: 26px;
    color: #222222;
    text-align: center;
    margin-bottom: 51px;
  }
  &__person {
    text-align: center;
    &-name {
      font-size: 20px;
      color: #222222;
      font-weight: $font_medium;
      margin-top: 29px;
    }
    &-position {
      font-size: 14px;
      color: #222222;
      font-weight: $font_light;
      margin-top: 4px;
    }
    &-practice {
      margin-top: 9px;
      font-size: 10px;
      font-weight: $font_light;
      color: #6a6a6a;
    }
  }
  &__dots {
    margin-top: 38px;
    display: flex;
    justify-content: center;
    align-items: center;
    &-item {
      cursor: pointer;
      margin-right: 8px;
      border-radius: 50%;
      width: 8px;
      height: 8px;
      background-color: #bababa;
      &--active {
        background-color: #487bfa;
        width: 12px;
        height: 12px;
      }
    }
  }
}
</style>
