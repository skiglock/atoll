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
      h(
        'div',
        { className: 'form__item' },
        h('label', { className: 'form__label', for: 'message' }),
        h('textarea', {
          className: 'card form__input form__input--message',
          placeholder: 'Сфера и название компании'
        })
      ),
      h(
        'button',
        {
          className: 'btn form__btn',
          style: {
            fontWeight: '600',
            fontSize: '20px',
            color: '#fff',
            backgroundColor: '#487bfa',
            borderRadius: '60px',
            padding: '10px 40px'
          }
        },
        'Оставить заявку'
      ),
      h(
        'p',
        { className: 'form__agree' },
        'Нажимая на кнопку "Оставить заявку" вы даете свое согласие на обработку персональных данных'
      )
    )
  }
})
