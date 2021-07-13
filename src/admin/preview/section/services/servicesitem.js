/* eslint-disable no-undef */

export default createClass({
  render: () => {
    return h(
      'div',
      { className: 'column column-30' },
      h(
        'div',
        { className: 'card services__card' },
        h('h1', { className: 'title services__card-title' }),
        h('span', { className: 'separator' }),
        h(
          'div',
          { className: 'services__card-body' },
          h('p', { className: 'services__card-text' }),
          h('button', { className: 'btn services__card-btn' }, 'Подробнее')
        )
      )
    )
  }
})
