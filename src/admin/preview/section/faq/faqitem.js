/* eslint-disable no-undef */

export default createClass({
  render: function () {
    const { title, desc } = this.props
    return h(
      'div',
      { className: 'column column-50' },
      h(
        'div',
        { className: 'faq__item' },
        h(
          'div',
          { className: 'card faq__item-question' },
          h('p', { className: 'text' }, title)
        ),
        h(
          'div',
          { className: 'card faq__item-answer' },
          h('p', { className: 'text' }, desc)
        )
      )
    )
  }
})
