<template>
  <form class="form">
    <!-- <script type="application/javascript">
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
            </script> -->
  </form>
</template>

<script>
export default {
  name: 'MainForm'
}
</script>

<style lang="scss">
.form {
  @media screen and (max-width: 576px) {
    text-align: center;
  }
}
</style>
