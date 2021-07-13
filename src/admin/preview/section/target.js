/* eslint-disable no-undef */

export default createClass({
  render: () => {
    return h(
      'section',
      { className: 'section target' },
      h(
        'div',
        { className: 'container' },
        h('h1', { className: 'title target__title' }),
        h('h2', { className: 'text' }),
        h('div', { className: 'target__img' }, h('img', {}))
      )
    )
  }
})
