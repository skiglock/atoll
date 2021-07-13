/* eslint-disable no-undef */

export default createClass({
  render: () => {
    return h(
      'section',
      { className: 'section order' },
      h(
        'div',
        { className: 'container' },
        h(
          'div',
          { className: 'order__inner' },
          h(
            'div',
            { className: 'row' },
            h(
              'div',
              { className: 'column column-50' },
              h('h1', { className: 'title order__title' }),
              h('p', { className: 'text order__text' })
            ),
            h('div', { className: 'column column-50' })
          )
        )
      )
    )
  }
})
