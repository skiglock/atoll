<template>
  <div class="person">
    <div class="person__circle">
      <g-image class="person__avatar" src="@/assets/img/team/1.png" alt="" />
    </div>
    <h2 class="person__name">Сергей Иванов</h2>
    <h3 class="person__position">Руководитель проектов</h3>
    <h4 class="person__practice">2 года опыта работы с amoCRM</h4>
  </div>
</template>

<script>
export default {
  name: 'TeamPerson'
}
</script>

<style lang="scss">
.person + .person {
  margin-bottom: 20px;
}
.person {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &__avatar {
    max-width: 147px;
    max-height: 147px;
  }
  &__name {
    font-size: 20px;
    color: #222222;
    font-weight: $font_medium;
    margin-top: 29px;
  }
  &__position {
    font-size: 14px;
    color: #222222;
    font-weight: $font_light;
    margin-top: 4px;
  }
  &__practice {
    margin-top: 9px;
    font-size: 10px;
    font-weight: $font_light;
    color: #6a6a6a;
  }
}
</style>
