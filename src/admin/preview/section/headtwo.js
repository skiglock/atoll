/* eslint-disable no-undef */

export default createClass({
  render: () => {
    return h(
      'section',
      { className: 'section head-two' },
      h(
        'div',
        { className: 'container' },
        h(
          'div',
          { className: 'head-two__inner' },
          h('h1', { className: 'title head-two__title' }),
          h('p', { className: 'text head-two__text' })
        )
      )
    )
  }
})
