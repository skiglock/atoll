/* eslint-disable no-undef */

export default createClass({
  render: () => {
    return h(
      'section',
      { className: 'section quote' },
      h(
        'div',
        { className: 'container' },
        h('blockquote', { className: '' }, h('p', { className: 'text' }))
      )
    )
  }
})
