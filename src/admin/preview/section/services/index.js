import servicesItem from './servicesitem'

/* eslint-disable no-undef */

export default createClass({
  render: () => {
    return h(
      'section',
      { className: 'section services' },
      h(
        'div',
        { className: 'container' },
        h(
          'div',
          { className: 'services__inner' },
          h('div', { className: 'row' }, h(servicesItem, {}, null))
        )
      )
    )
  }
})
