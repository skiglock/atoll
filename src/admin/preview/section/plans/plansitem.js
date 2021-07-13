/* eslint-disable no-undef */

export default createClass({
  render: () => {
    return h(
      'div',
      { className: 'column column-30' },
      h(
        'div',
        { className: 'plans__item' },
        h('h1', { className: 'title plans__item-title' }),
        h('p', { className: 'text plans__item-text' })
      )
    )
  }
})
