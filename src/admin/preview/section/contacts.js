/* eslint-disable no-undef */

export default createClass({
  render: () => {
    return h(
      'section',
      { className: 'section contacts' },
      h(
        'div',
        { className: 'container' },
        h('h1', { className: 'title' }),
        h(
          'div',
          { className: 'contacts__inner' },
          h(
            'div',
            { className: 'row' },
            h(
              'div',
              { className: 'column column-50' },
              h('h1', { className: 'title' }, 'Отдел продаж:'),
              h('p', { className: 'text' })
            ),
            h(
              'div',
              { className: 'column column-50' },
              h('h1', { className: 'title' }, 'Телефон:'),
              h('p', { className: 'text' })
            )
          )
        )
      )
    )
  }
})
