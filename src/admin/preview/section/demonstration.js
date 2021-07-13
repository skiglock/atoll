/* eslint-disable no-undef */

export default createClass({
  render: function () {
    const { title, desc, img } = this.props

    return h(
      'section',
      { className: 'section demonstration' },
      h(
        'div',
        { className: 'container' },
        h(
          'div',
          { className: 'row' },
          h(
            'div',
            { className: 'column column-30' },
            h('div', { className: 'consultation__img' }, h('img', { src: img }))
          ),
          h(
            'div',
            { className: 'column column-60' },
            h(
              'div',
              { className: 'consultation__desc' },
              h('div', { className: 'title' }, title),
              h('div', { className: 'text' }, desc),
              h('button', { className: 'btn' }, 'Заказать проект внедрения'),
              h('button', { className: 'btn' }, 'Записаться на демонстрацию')
            )
          )
        )
      )
    )
  }
})
