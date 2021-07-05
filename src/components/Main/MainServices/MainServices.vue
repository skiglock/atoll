<template>
  <section class="services">
    <div class="container">
      <div class="services__inner">
        <div class="row">
          <div class="column column-30">
            <main-services-card />
          </div>
          <div class="column column-30">
            <main-services-card />
          </div>
          <div class="column column-30">
            <main-services-card />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import MainServicesCard from '@/components/Main/MainServices/MainServicesCard'
export default {
  name: 'MainServices',
  components: {
    MainServicesCard
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
