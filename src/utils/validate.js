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

export function isPeopleName(value) {
  if (
    value &&
    !value.match(/^[a-zA-Zа-яА-я]+(([',. -][a-zа-яA-ZА-я ])?[a-zа-яA-ZА-я]*)*$/)
  ) {
    return 'Введите правильное имя'
  }
  return undefined
}

export function isValidPhone(value) {
  if (
    value &&
    value.match(
      /^[\+]?([0-9][\s]?|[0-9]?)([(][0-9]{3}[)][\s]?|[0-9]{3}[-\s\.]?)[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
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
