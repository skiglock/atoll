/* eslint-disable no-undef */

export default createClass({
  render: function () {
    const { title } = this.props
    return h(
      'section',
      { className: 'section message' },
      h(
        'div',
        { className: 'container' },
        h('div', { className: 'title message__title' }, title),
        h('button', { className: 'btn message__btn' }, 'Стать клиентом')
      )
    )
  }
})
