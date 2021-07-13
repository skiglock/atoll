import plansItem from './plansitem'

/* eslint-disable no-undef */

export default createClass({
  render: () => {
    return h(
      'section',
      { className: 'section plans' },
      h(
        'div',
        { className: 'container' },
        h('div', { className: 'title plans__title' }),
        h('div', { className: 'text plans__text' }),
        h(
          'div',
          { className: 'plans__steps' },
          h('div', { className: 'row' }, h(plansItem, {}, null))
        )
      )
    )
  }
})
