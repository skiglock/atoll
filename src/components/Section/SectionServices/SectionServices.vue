<template>
  <section class="section services">
    <div class="container">
      <div class="services__inner">
        <div class="row">
          <div class="column column-30">
            <section-services-item />
          </div>
          <div class="column column-30">
            <section-services-item />
          </div>
          <div class="column column-30">
            <section-services-item />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

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
