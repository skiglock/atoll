/* eslint-disable no-undef */

export default createClass({
  render: () => {
    return h(
      'div',
      { className: 'price__list-item' },
      h('span', { className: 'price__list-number' }),
      h('p', { className: 'text price__list-text' })
    )
  }
})
