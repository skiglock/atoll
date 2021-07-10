<template>
  <section class="section services">
    <div class="container">
      <div class="services__inner">
        <div class="row">
          <div
            class="column column-30"
            v-for="{ node } in $static.allProducts.edges"
            :key="node.id"
          >
            <section-services-item
              :title="node.title"
              :desc="node.desc"
              :url="$getPath(node.path)"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<static-query>
query {
  allProducts {
    edges {
      node {
        title
        desc
        path
      }
    }
  }
}
</static-query>

<script>
import SectionServicesItem from './SectionServicesItem'
export default {
  name: 'SectionServices',
  props: {
    content: Object
  },
  components: {
    SectionServicesItem
  }
}
</script>

<style lang="scss">
.services {
  .text {
    font-size: 14px;
  }
  // margin-top: 103px;
  &__inner {
    padding: 50px 0;
  }
}
</style>
