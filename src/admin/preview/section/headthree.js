/* eslint-disable no-undef */

export default createClass({
  render: function () {
    const { title, desc, img } = this.props

    return h(
      'section',
      { className: 'section head-three' },
      h(
        'div',
        { className: 'container' },
        h(
          'div',
          { className: 'head-three__inner' },
          h('h2', { className: 'head-three__subtitle' }, title),
          h('p', { className: 'text head-three__text' }, desc),
          h(
            'div',
            { className: 'head-three__subcircle' },
            h('img', { src: img })
          )
        )
      )
    )
  }
})
