<template>
  <section class="section order">
    <div class="container">
      <div class="order__inner">
        <div class="row">
          <div class="column column-50">
            <h1 class="title order__title">{{ content.title }}</h1>
            <p class="text order__text">
              {{ content.desc }}
            </p>
          </div>
          <div class="column column-50">
            <main-form class="order__form" :title="content.title" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import MainForm from '@/components/Common/MainForm'
export default {
  name: 'SectionOrder',
  components: {
    MainForm
  },
  props: {
    content: Object
  }
}
</script>

<style lang="scss">
.order {
  // .row {
  //   align-items: center;
  // }
  &__inner {
  }
  &__title,
  &__text {
    text-align: right;
    @media screen and (max-width: 576px) {
      text-align: center;
    }
  }
  &__text {
    margin-top: 21px;
  }
  &__form {
    margin-left: 25px;

    @media screen and (max-width: 992px) {
      margin-left: 80px;
    }
    @media screen and (max-width: 768px) {
      margin-left: 15px;
    }
    @media screen and (max-width: 576px) {
      margin-left: 0;
    }
  }
}
</style>
