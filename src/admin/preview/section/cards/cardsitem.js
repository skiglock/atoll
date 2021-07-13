/* eslint-disable no-undef */

export default createClass({
  render: () => {
    return h(
      'div',
      { className: 'column column-50' },
      h(
        'div',
        { className: 'card cards__card' },
        h(
          'div',
          { className: 'card cards__icon' },
          h('img', { className: '' })
        ),
        h('h1', { className: 'title' }),
        h('p', { className: 'text cards__card-text' })
      )
    )
  }
})
