/* eslint-disable no-undef */

export default createClass({
  render: () => {
    return h(
      'div',
      { className: 'column column-50' },
      h(
        'div',
        { className: 'card faq__item-question' },
        h('p', { className: 'text' })
      ),
      h(
        'div',
        { className: 'card faq__item-answer' },
        h('p', { className: 'text' })
      )
    )
  }
})
