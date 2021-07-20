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
            <div class="order__form">
              <script type="application/javascript">
                !(function (a, m, o, c, r, m) {
                  ;(a[o + c] = a[o + c] || {
                    setMeta: function (p) {
                      this.params = (this.params || []).concat([p])
                    }
                  }),
                    (a[o + r] =
                      a[o + r] ||
                      function (f) {
                        a[o + r].f = (a[o + r].f || []).concat([f])
                      }),
                    a[o + r]({
                      id: '809104',
                      hash: '1ddb76014be94a11cd0fb4f91a69cbfb',
                      locale: 'ru'
                    })
                })(window, 0, 'amo_forms_', 'params', 'load')
              </script>
              <script
                type="application/javascript"
                id="amoforms_script_809104"
                async="async"
                charset="utf-8"
                src="https://forms.amocrm.ru/forms/assets/js/amoforms.js?1626781522"
              ></script>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SectionOrder',
  props: {
    content: Object
  }
}
</script>

<style lang="scss">
.order {
  .row {
    align-items: center;
  }
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
    margin-left: 15px;

    // @media screen and (max-width: 992px) {
    //   margin-left: 80px;
    // }
    // @media screen and (max-width: 768px) {
    //   margin-left: 15px;
    // }
    @media screen and (max-width: 576px) {
      margin-left: 0;
    }
  }
}
</style>
