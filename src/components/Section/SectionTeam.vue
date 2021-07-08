<template>
  <section class="section team">
    <div class="container">
      <div class="team__inner">
        <h1 class="title team__title">{{ content.title }}</h1>
        <div class="row">
          <div
            class="column column-30"
            v-for="{ node } in $static.allTeam.edges"
            :key="node.id"
            :avatar="node.avatar"
            :name="node.name"
            :position="node.position"
            :practice="node.practice"
          >
            <main-person />
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

<static-query>
query {
  allTeam {
    edges {
      node {
        id
        avatar
        name
        position
        practice
      }
    }
  }
}
</static-query>

<script>
import MainPerson from '@/components/Common/MainPerson'
export default {
  name: 'SectionTeam',
  props: {
    content: Object
  },
  components: {
    MainPerson
  }
}
</script>

<style lang="scss">
.team {
  &__inner {
    padding: 60px 0;
    @media screen and (max-width: 576px) {
      padding: 20px 0;
    }
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
