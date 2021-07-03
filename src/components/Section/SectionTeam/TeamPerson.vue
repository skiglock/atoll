<template>
  <div class="person">
    <div class="person-circle">
      <img class="person-avatar" src="@/assets/img/team/1.png" alt="" />
    </div>
    <h2 class="person-name">Сергей Иванов</h2>
    <h3 class="person-position">Руководитель проектов</h3>
    <h4 class="person-practice">2 года опыта работы с amoCRM</h4>
  </div>
</template>

<script>
export default {
  name: 'TeamPerson'
}
</script>

<style lang="scss">
.person {
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
</style>
