<template>
  <Layout>
    <section class="about">
      <div class="container">
        <div class="about__inner">
          <div class="about__head">
            <h1 class="title">{{ $page.about.title }}!</h1>
            <h2 class="about__head-subtitle">Atollon — интегратор amoCRM</h2>
            <p class="text about__head-text">
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
                  <blockquote>
                    В конце 2018 года был реализован первый проект - клининговая
                    компания. У нас были клиентоориентированные сотрудники, но к
                    сожалению он закрылся с большими финансовыми проблемами. От
                    чего мы сделали самый главный вывод - нехватка системных
                    продаж и нового уровня обслуживания клиентов.
                  </blockquote>
                </h3>
              </div>
              <div class="story__item">
                <h3 class="story__item-text">
                  <blockquote>
                    После осознания ошибок мы решили учиться у лучших. Мы
                    поняли, что одной техники продаж недостаточно. Важно нести
                    ценность и быть открытыми понимая, чего хочет клиент и
                    давать новый опыт взаимодействия с ним. Именно поэтому весь
                    накопленный опыт мы применяем при работе с нашими клиентами
                    и внедряем то, что проверили лично.
                  </blockquote>
                </h3>
              </div>
            </div>
            <div class="about__team">
              <h1 class="title about__team-title">Команда</h1>
              <div class="row">
                <div class="column column-30">
                  <main-person />
                </div>
                <div class="column column-30">
                  <main-person />
                </div>
                <div class="column column-30">
                  <main-person />
                </div>
                <div class="column column-30">
                  <main-person />
                </div>
                <div class="column column-30">
                  <main-person />
                </div>
                <div class="column column-30">
                  <main-person />
                </div>
                <div class="column column-30">
                  <main-person />
                </div>
              </div>
            </div>
          </div>
          <div class="about__target">
            <h1 class="title about__target-title">Наша большая цель</h1>
            <h2 class="text">
              поменять устаревший подход к управлению продажами и доказать, что
              правильные инструменты позволяют системно выполнять план продаж с
              минимальными затратами ресурсов.
            </h2>
            <div class="about__target-img">
              <g-image src="@/assets/img/about/team-img-two.png" />
            </div>
          </div>
          <div class="about__bottom">
            <div class="text about__bottom-text">
              Мы делаем смелые и нужные вещи вместе. Вы с нами?
            </div>
            <main-button class="about__bottom-btn">Стать клиентом</main-button>
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
import MainButton from '@/components/Common/MainButton'
import MainPerson from '@/components/Common/MainPerson'

export default {
  components: {
    MainButton,
    MainPerson
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
    &-subtitle {
      margin-top: 48px;
      color: #222222;
      font-size: 24px;
      font-weight: $font_semibold;
    }
    &-text {
      line-height: 1.547;
      margin-top: 14px;
    }
    &-img {
      display: inline-block;
      max-width: 791px;
    }
    &-subcircle {
      position: relative;
      img {
        border-radius: 50% / 100%;
      }
      &::before {
        z-index: 5;
        position: absolute;
        content: '';
        border: 20px solid $main_color;
        max-width: 900px;
        max-height: 360px;
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
    }
  }
  &__target {
    margin-top: 128px;
    &-title {
      font-weight: $font_bold;
    }
    &-img {
      max-width: 921px;
    }
  }
  &__bottom {
    margin-top: 130px;
    &-text {
      font-size: 28px;
      line-height: 1.324;
    }
    &-btn {
      margin-top: 35px;
    }
  }
}

.story {
  margin-top: 100px;
  &__item + &__item {
    margin-top: 86px;
  }
  &__item {
    blockquote {
      &:nth-child(odd) {
        &::after {
          right: 0;
          left: -25px;
        }
      }
      &:nth-child(even) {
        &::after {
          left: 0;
          right: -25px;
        }
      }
    }
    &:nth-child(odd) {
      text-align: left;
    }
    &:nth-child(even) {
      text-align: right;
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
