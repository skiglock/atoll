<template>
  <section class="section team">
    <div class="container">
      <div class="team__inner">
        <h1 class="section-title team__title">{{ content.title }}</h1>
        <ClientOnly>
          <carousel
            v-if="$route.path === '/'"
            class="row"
            :per-page-custom="[
              [280, 1],
              [576, 2],
              [768, 3]
            ]"
            pagination-active-color="#487bfa"
          >
            <slide
              class=""
              v-for="{ node } in $static.allTeam.edges"
              :key="node.id"
            >
              <main-person
                :avatar="node.avatar"
                :name="node.name"
                :position="node.position"
                :practice="node.practice"
              />
            </slide>
          </carousel>
        </ClientOnly>
        <div v-if="$route.path !== '/'" class="row">
          <div
            class="column column-30"
            v-for="{ node } in $static.allTeam.edges"
            :key="node.id"
          >
            <main-person
              :avatar="node.avatar"
              :name="node.name"
              :position="node.position"
              :practice="node.practice"
            />
          </div>
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
    MainPerson,
    Carousel: () =>
      import('vue-carousel')
        .then((m) => m.Carousel)
        .catch(),
    Slide: () =>
      import('vue-carousel')
        .then((m) => m.Slide)
        .catch()
  },
  methods: {}
}
</script>

<style lang="scss">
.team {
  &__inner {
    @media screen and (max-width: 576px) {
      padding: 20px 0;
    }
  }
  &__title {
    text-align: center;
    margin-bottom: 50px;
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
