import faqItem from './faqitem'

/* eslint-disable no-undef */

export default createClass({
  render: function () {
    const { title, elements } = this.props

    return h(
      'section',
      { className: 'section faq' },
      h(
        'div',
        { className: 'faq__inner' },
        h(
          'div',
          { className: 'container' },
          h('div', { className: 'title' }, title),
          h(
            'div',
            { className: 'row' },
            elements
              ? elements.map((el) => {
                  return h(
                    faqItem,
                    { title: el.getIn(['title']), desc: el.getIn(['desc']) },
                    null
                  )
                })
              : null
          )
        )
      )
    )
  }
})
