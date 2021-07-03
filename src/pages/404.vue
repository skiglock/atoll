<template>
  <Layout>
    <h1 class="error-msg">
      404: Данная страница не существует, проверьте правильность адреса
    </h1>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: '404'
  }
}
</script>

<style lang="scss">
.error-msg {
  text-align: center;
  font-size: 30px;
  padding: 50px;
  font-weight: $font_semibold;
}
</style>
