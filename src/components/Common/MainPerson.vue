<template>
  <div class="person">
    <div class="person__circle">
      <g-image class="person__avatar" :src="avatar" alt="" />
    </div>
    <h2 class="title person__name">{{ name }}</h2>
    <h3 class="person__position">{{ position }}</h3>
    <h4 class="person__practice">{{ practice }}</h4>
  </div>
</template>

<script>
export default {
  name: 'SectionTeamItem',
  props: {
    avatar: String,
    name: String,
    position: String,
    practice: String
  }
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
    border-radius: 50%;
    img {
      border-radius: 50%;
    }
  }
  &__name {
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
