/* eslint-disable no-undef */

export default createClass({
  render: () => {
    return h(
      'section',
      { className: 'section head-three' },
      h(
        'div',
        { className: 'container' },
        h(
          'div',
          { className: 'head-three__inner' },
          h('h2', { className: 'head-three__subtitle' }),
          h('p', { className: 'text head-three__text' }),
          h('div', { className: 'head-three__subcircle' }, h('img', {}))
        )
      )
    )
  }
})
