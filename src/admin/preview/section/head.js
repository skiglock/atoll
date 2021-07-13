/* eslint-disable no-undef */

export default createClass({
  render: () => {
    return h(
      'section',
      { className: 'section head' },
      h(
        'div',
        { className: 'container' },
        h(
          'div',
          { className: 'head__inner' },
          h(
            'div',
            { className: 'row' },
            h(
              'div',
              { className: 'column column-60' },
              h('h1', { className: 'title head__title' }),
              h('p', { className: 'text head__text' })
            ),
            h(
              'div',
              { className: 'column column-30' },
              h('div', { className: 'head__img' }, h('img', {}))
            )
          )
        )
      )
    )
  }
})
