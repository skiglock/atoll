<template>
  <Layout>
    <section class="about">
      <div class="container">
        <div class="about__inner">
          <div class="about__head">
            <h1 class="about__head-title">{{ $page.about.title }}</h1>
            <h2 class="about__head-subtitle">Atollon — интегратор amoCRM</h2>
            <p class="about__head-desc">
              специализирующийся на цифровой трансформации продаж. Мы
              фокусируемся исключительно на amoCRM как платформе,на базе которой
              делаем сложные проекты по внедрению и интеграции.
            </p>
            <div class="about__head-subcircle">
              <g-image
                src="@/assets/img/about/team-img.png"
                class="about__head-img"
              />
            </div>
          </div>
          <div class="about__body">
            <div class="story">
              <div class="story__item">
                <h3 class="story__item-text">
                  В конце 2018 года был реализован первый проект - клининговая
                  компания. У нас были клиентоориентированные сотрудники, но к
                  сожалению он закрылся с большими финансовыми проблемами. От
                  чего мы сделали самый главный вывод - нехватка системных
                  продаж и нового уровня обслуживания клиентов.
                </h3>
              </div>
              <div class="story__item">
                <h3 class="story__item-text">
                  После осознания ошибок мы решили учиться у лучших. Мы поняли,
                  что одной техники продаж недостаточно. Важно нести ценность и
                  быть открытыми понимая, чего хочет клиент и давать новый опыт
                  взаимодействия с ним. Именно поэтому весь накопленный опыт мы
                  применяем при работе с нашими клиентами и внедряем то, что
                  проверили лично.
                </h3>
              </div>
            </div>
            <div class="about__team">
              <h1 class="about__team-title">Команда</h1>
              <div class="row">
                <div class="column">
                  <team-person />
                </div>
                <div class="column">
                  <team-person />
                </div>
                <div class="column">
                  <team-person />
                </div>
                <div class="column">
                  <team-person />
                </div>
                <div class="column">
                  <team-person />
                </div>
                <div class="column">
                  <team-person />
                </div>
                <div class="column">
                  <team-person />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  about (id: $id) {
    title
  }
}
</page-query>

<script>
import TeamPerson from '@/components/Section/SectionTeam/TeamPerson'

export default {
  components: {
    TeamPerson
  },
  metaInfo() {
    return {
      title: this.$page.about.title
    }
  }
}
</script>

<style lang="scss">
.about {
  &__inner {
    text-align: center;
  }
  &__head {
    &-title {
      color: #222222;
      font-size: 30px;
      font-weight: $font_semibold;
    }
    &-subtitle {
      margin-top: 48px;
      color: #222222;
      font-size: 24px;
      font-weight: $font_semibold;
    }
    &-desc {
      line-height: 1.547;
      margin-top: 14px;
      color: #222222;
      font-weight: $font_regular;
      font-size: 18px;
    }
    &-img {
      max-width: 791px;
    }
    &-subcircle {
      position: relative;
      &::before {
        position: absolute;
        content: '';
        border: 20px solid $main_color;
        width: 900px;
        height: 360px;
        border-radius: 50% / 100%;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        border-top: 0;
        top: 190px;
        left: 0;
        right: 0;
        bottom: 0;
      }
    }
  }
  &__team {
    text-align: left;
    margin-top: 163px;
    &-title {
      margin-bottom: 61px;
      font-size: 30px;
      font-weight: $font_semibold;
      color: #222222;
    }
  }
}

.story {
  margin-top: 100px;
  &__item + &__item {
    margin-top: 86px;
  }
  &__item {
    position: relative;
    &::after {
      position: absolute;
      content: '';
      width: 11px;
      height: 100%;
      background-color: $main_color;
      top: 0px;
      border-radius: $border_radius;
    }
    &:nth-child(odd) {
      text-align: left;
      &::after {
        left: -25px;
      }
    }
    &:nth-child(even) {
      text-align: right;
      &::after {
        right: -25px;
      }
    }
    &-text {
      line-height: 1.615;
      color: #242424;
      font-weight: $font_regular;
      font-size: 18px;
    }
  }
}
</style>
