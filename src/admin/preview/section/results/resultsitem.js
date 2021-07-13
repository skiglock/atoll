/* eslint-disable no-undef */

export default createClass({
  render: () => {
    return h(
      'div',
      { className: 'results__item' },
      h(
        'div',
        { className: 'results__item-inner' },
        h('div', { className: 'results__item-logo' }, h('img', {})),
        h('p', { className: 'text results__item-text' }),
        h('button', { className: 'btn results__item-btn' }, 'Подробнее')
      )
    )
  }
})
