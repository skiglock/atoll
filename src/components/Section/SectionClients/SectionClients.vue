<template>
  <section
    class="section clients"
    :class="$route.path !== '/' ? 'clients--white' : ''"
  >
    <div class="container">
      <div class="clients__inner">
        <h1 class="section-title clients__title">{{ content.title }}</h1>
        <div class="row">
          <div
            class="column column-50"
            v-for="{ node } in $static.allCasesPost.edges"
            :key="node.id"
          >
            <section-clients-item
              :logo="node.logo"
              :url="$getPath(node.path)"
              :title="node.title"
            />
          </div>
        </div>
        <div class="clients__bottom">
          <main-button to="/cases">Все кейсы</main-button>
        </div>
      </div>
    </div>
  </section>
</template>

<static-query>
query {
  allCasesPost {
    edges {
      node {
        id
        logo
        path
        title
      }
    }
  }
}
</static-query>

<script>
import SectionClientsItem from './SectionClientsItem'
import MainButton from '@/components/Common/MainButton'
export default {
  name: 'SectionClients',
  props: {
    content: Object
  },
  components: {
    SectionClientsItem,
    MainButton
  }
}
</script>

<style lang="scss">
.clients {
  &--white {
    background-color: $white_color;
  }
  &__inner {
    padding: 55px 0;
  }
  &__title {
    text-align: center;
    margin-bottom: 55px;
    @media screen and (max-width: 576px) {
      margin-bottom: 40px;
    }
  }

  &__bottom {
    text-align: center;
    margin-top: 45px;
  }
}
</style>
