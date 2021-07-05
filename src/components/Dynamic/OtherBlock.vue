<template>
  <div class="block other-block">
    <div class="title">Мы думали, что CRM можно внедрить раз и навсегда</div>
    <div class="other-block__inner">
      <div class="row">
        <div class="column column-50">
          <div class="other-block__img">
            <g-image src="@/assets/img/dynamic/notebook.png" />
          </div>
        </div>
        <div class="column column-50">
          <div class="other-block__text">
            <p class="text">
              Сейчас мы понимаем, что развитие CRM схоже с развитием маркетинга,
              всегда нужно обновлять рекламные компании, смотреть конверсию
              переходов. CRM сопровождение - это планомерное развитие системы
              для отдела продаж.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OtherBlock'
}
</script>

<style lang="scss">
.other-block {
  &__inner {
    margin-top: 63px;
  }
  &__img {
    max-width: 359px;
    max-height: 302px;
  }
  &__text {
    height: 100%;
    display: flex;
    align-items: center;
    .text {
      text-align: right;
      line-height: 1.859;
    }
  }
}
</style>
