/* eslint-disable no-undef */

export default createClass({
  render: () => {
    return h(
      'div',
      { className: 'card blog__card' },
      h('h2', { className: 'title blog__card-title' }),
      h('a', { className: 'blog__card-link' }, 'Открыть')
    )
  }
})
