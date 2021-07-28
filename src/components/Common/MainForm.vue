<template>
  <form
    :name="title"
    method="post"
    @submit.prevent="handleSubmit"
    :action="`/success`"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
    class="form"
    autocomplete="off"
  >
    <input type="hidden" name="form-name" :value="title" />
    <p hidden>
      <label> Don’t fill this out: <input name="bot-field" /> </label>
    </p>
    <div class="form__item">
      <input
        name="name"
        type="text"
        class="form__input"
        placeholder="Ваше имя"
        v-model="formData.name"
        @focus="clearValidation('name')"
        autocomplete="false"
      />
      <p class="form__error" v-if="errors.name">
        {{ errors.name }}
      </p>
    </div>
    <div class="form__item">
      <input
        name="phone"
        type="phone"
        class="form__input"
        placeholder="Телефон"
        v-model="formData.phone"
        @focus="clearValidation('phone')"
        autocomplete="false"
      />
      <p class="form__error" v-if="errors.phone">
        {{ errors.phone }}
      </p>
    </div>
    <div class="form__item">
      <input
        name="email"
        type="email"
        class="form__input"
        placeholder="E-mail"
        v-model="formData.email"
        @focus="clearValidation('email')"
        autocomplete="false"
      />
      <p class="form__error" v-if="errors.email">
        {{ errors.email }}
      </p>
    </div>
    <div class="form__item">
      <label for="message" class="form__label">Комментарий:</label>
      <textarea
        name="message"
        class="card form__input form__input--message"
        placeholder="Сфера и название компании"
        v-model="formData.message"
        @focus="clearValidation('message')"
        autocomplete="false"
      />
      <p class="form__error" v-if="errors.message">
        {{ errors.message }}
      </p>
    </div>
    <input type="hidden" name="from" v-model="formData.from" />
    <input type="hidden" name="ref" v-model="formData.ref" />
    <main-button type="submit" class="form__btn"> Оставить заявку </main-button>
    <p class="form__agree">
      Нажимая на кнопку "Оставить заявку" вы даете свое согласие на обработку
      персональных данных
    </p>
  </form>
</template>

<script>
import {
  isRequired,
  isValidPhone,
  minLength,
  isString,
  validEmail
} from '@/utils/validate.js'
import MainButton from '@/components/Common/MainButton'
export default {
  name: 'MainForm',
  components: {
    MainButton
  },
  props: {
    title: String
  },
  data() {
    return {
      formData: {
        name: '',
        phone: '',
        email: '',
        message: '',
        from: '',
        ref: null || 'Перешел по прямой ссылке'
      },
      errors: {}
    }
  },
  computed: {
    checkName() {
      return (
        isRequired(this.formData.name) ||
        isString(this.formData.name) ||
        minLength(this.formData.name, 2)
      )
    },
    checkPhone() {
      return (
        isRequired(this.formData.phone) || isValidPhone(this.formData.phone)
      )
    },
    checkEmail() {
      return isRequired(this.formData.email) || validEmail(this.formData.email)
    },
    checkMessage() {
      return (
        isRequired(this.formData.message) ||
        minLength(this.formData.message, 10)
      )
    }
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
        )
        .join('&')
    },
    handleSubmit(e) {
      if (
        this.checkName ||
        this.checkPhone ||
        this.checkEmail ||
        this.checkMessage
      ) {
        this.errors.name = this.checkName
        this.errors.phone = this.checkPhone
        this.errors.email = this.checkEmail
        this.errors.message = this.checkMessage
      } else {
        fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: this.encode({
            'form-name': e.target.getAttribute('name'),
            // eslint-disable-next-line prettier/prettier
            subject: 'Пришлая новая заявка с сайта',
            ...this.formData
          })
        })
          .then(() => this.$router.push('/success'))
          .catch((error) => alert(error))
        this.$store.commit('setIsModalOpen', false)
        this.formData = {
          name: '',
          phone: '',
          email: '',
          message: '',
          from: '',
          ref: ''
        }
      }
      this.$forceUpdate()
    },
    clearValidation(field) {
      this.errors[field] = undefined
      this.$forceUpdate()
    }
  },
  mounted() {
    this.formData.from = `https://atollon.ru${this.$route.path}`
    this.formData.ref = document.referrer
  },
  destroyed() {
    this.errors[0] = undefined
    this.$forceUpdate()
  }
}
</script>

<style lang="scss">
.form {
  @media screen and (max-width: 576px) {
    text-align: center;
  }
  &__item {
    margin-top: 30px;
  }
  &__label {
    font-size: 15px;
    color: #6d6d6d;
  }
  &__input {
    font-size: 14px;
    font-family: 'Open Sans Regular', sans-serif;
    width: 100%;
    font-weight: $font_light;
    color: #1b1b1b;
    border: none;
    border-bottom: 2px solid rgba(#1c1c1c, 0.149);
    outline: none;
    padding: 9px 3px;
    &--message {
      margin-top: 15px;
      border-radius: 40px;
      height: 80px;
      overflow: hidden;
      padding: 20px;
      resize: none;
    }
    &::placeholder {
      font-weight: $font_light;
      color: #1b1b1b;
    }
  }
  &__btn {
    margin-top: 29px;
  }
  &__agree {
    margin-top: 9px;
    font-size: 11px;
    font-weight: $font_light;
    color: #808080;
  }
  &__error {
    font-weight: $font_bold;
    color: red;
    margin-top: 5px;
    text-align: center;
    font-size: 10px;
  }
}
</style>
