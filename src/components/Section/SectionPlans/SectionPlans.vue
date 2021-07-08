<template>
  <section class="section plans">
    <div class="container">
      <div class="title plans__title">
        {{ content.title }}
      </div>
      <div class="text plans__text">
        Вопросы и проблемы появляются регулярно, но их решение не влияет на
        успех отдела продаж.
      </div>
      <div class="plans__steps">
        <div class="row">
          <div
            class="column column-30"
            v-for="item in content.elements"
            :key="item.id"
          >
            <section-plans-item :title="item.title" :desc="item.desc" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SectionPlansItem from './SectionPlansItem'
export default {
  name: 'SectionPlans',
  props: {
    content: Object
  },
  components: {
    SectionPlansItem
  }
}
</script>

<style lang="scss">
.plans {
  &__title,
  &__text {
    text-align: center;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &__text {
    margin-top: 23px;
    line-height: 1.448;
  }
  &__steps {
    margin-top: 47px;

    .row {
      justify-content: center;
    }
  }
}
</style>
