import faqItem from './faqitem'

/* eslint-disable no-undef */

export default createClass({
  render: () => {
    return h(
      'section',
      { className: 'section faq' },
      h(
        'div',
        { className: 'faq__inner' },
        h(
          'div',
          { className: 'container' },
          h('div', { className: 'title' }),
          h('div', { className: 'row' }, h(faqItem, {}, null))
        )
      )
    )
  }
})
