/* eslint-disable no-useless-escape */
export function isRequired(value) {
  return value ? undefined : 'Поле обязательно для заполнения'
}

export function minLength(value, min) {
  if (value && value.length < min) {
    return `Минимальное количество символов ${min}`
  }
}

export function maxLength(value, max) {
  if (value && value.length > max) {
    return `Максимальное количество символов ${max}`
  }
}

export function isString(value) {
  if (value && value && value.match(/[^A-Za-zА-Яа-яЁё]/i)) {
    return 'Поле должно состоять из символов'
  }
  return undefined
}

export function isValidPhone(value) {
  if (
    value &&
    value.match(
      /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/
    )
  ) {
    return undefined
  }
  return 'Неправильно введен номер телефона'
}

export function validEmail(value) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  if (re.test(value)) {
    return undefined
  }
  return 'Введена неправильная почта'
}
