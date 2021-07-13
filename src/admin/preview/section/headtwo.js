/* eslint-disable no-undef */

export default createClass({
  render: function () {
    const { title, desc, img } = this.props

    return h(
      'section',
      { className: 'section head-two' },
      h(
        'div',
        { className: 'container' },
        h(
          'div',
          {
            className: 'head-two__inner',
            style: { background: `url(${img}) no-repeat` }
          },
          h('h1', { className: 'title head-two__title' }, title),
          h('p', { className: 'text head-two__text' }, desc)
        )
      )
    )
  }
})
