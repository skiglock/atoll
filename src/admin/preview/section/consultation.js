/* eslint-disable no-undef */

export default createClass({
  render: () => {
    return h(
      'section',
      { className: 'section consultation' },
      h(
        'div',
        { className: 'container' },
        h(
          'div',
          { className: 'consultation__inner' },
          h(
            'div',
            { className: 'row' },
            h(
              'div',
              { className: 'column column-50' },
              h(
                'div',
                { className: 'consultation__left' },
                h('h1', { className: 'title consultation__title' }),
                h('p', { className: 'text consultation__text' }),
                h('button', { className: 'btn consultation__btn' })
              )
            ),
            h(
              'div',
              { className: 'column column-50' },
              h(
                'div',
                { className: 'consultation__right' },
                h('div', { className: 'consultation__img' }, h('img', {}))
              )
            )
          )
        )
      )
    )
  }
})
