/* eslint-disable no-undef */

export default createClass({
  render: () => {
    return h(
      'section',
      { className: 'section message' },
      h(
        'div',
        { className: 'container' },
        h('div', { className: 'title message__title' }),
        h('button', { className: 'btn message__btn' }, 'Стать клиентом')
      )
    )
  }
})
