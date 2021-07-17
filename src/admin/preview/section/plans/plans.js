import plansItem from './plansitem'

/* eslint-disable no-undef */

export default createClass({
  render: function () {
    const { title, desc, elements } = this.props

    return h(
      'section',
      { className: 'section plans' },
      h(
        'div',
        { className: 'container' },
        h('div', { className: 'title plans__title' }, title),
        h('div', { className: 'text plans__text' }, desc),
        h(
          'div',
          { className: 'plans__steps' },
          h(
            'div',
            { className: 'row' },
            elements
              ? elements.map((el) => {
                  return h(
                    plansItem,
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
