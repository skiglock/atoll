<template>
  <section class="team">
    <div class="container">
      <div class="team__inner">
        <h1 class="title team__title">Наша команда экспертов</h1>
        <div class="row">
          <div class="column column-30">
            <main-team-person />
          </div>
          <div class="column column-30">
            <main-team-person />
          </div>
          <div class="column column-30">
            <main-team-person />
          </div>
        </div>
        <div class="team__dots">
          <div class="team__dots-item team__dots-item--active"></div>
          <div class="team__dots-item"></div>
          <div class="team__dots-item"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import MainTeamPerson from '@/components/Main/MainTeam/MainTeamPerson'
export default {
  name: 'MainTeam',
  components: { MainTeamPerson }
}
</script>

<style lang="scss">
.team {
  &__inner {
    padding: 105px 0;
  }
  &__title {
    text-align: center;
    margin-bottom: 51px;
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
