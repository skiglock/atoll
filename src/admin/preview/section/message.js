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
        h(
          'button',
          {
            className: 'btn message__btn',
            style: {
              fontWeight: '600',
              fontSize: '20px',
              color: '#fff',
              backgroundColor: '#487bfa',
              borderRadius: '60px',
              padding: '10px 40px'
            }
          },
          'Стать клиентом'
        )
      )
    )
  }
})
