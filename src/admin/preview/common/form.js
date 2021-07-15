/* eslint-disable no-undef */
export default createClass({
  render: function () {
    return h(
      'form',
      { className: 'form' },
      h(
        'div',
        { className: 'form__item' },
        h('input', { className: 'form__input', placeholder: 'Ваше имя' })
      ),
      h(
        'div',
        { className: 'form__item' },
        h('input', { className: 'form__input', placeholder: 'Телефон' })
      ),
      h(
        'div',
        { className: 'form__item' },
        h('input', { className: 'form__input', placeholder: 'E-mail' })
      ),
      h('button', { className: 'btn form__btn' }, 'Оставить заявку'),
      h(
        'p',
        { className: 'form__agree' },
        'Нажимая на кнопку "Оставить заявку" вы даете свое согласие на обработку персональных данных'
      )
    )
  }
})
