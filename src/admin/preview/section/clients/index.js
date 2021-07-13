import clientsItem from './clientsitem'

/* eslint-disable no-undef */

export default createClass({
  render: () => {
    return h(
      'section',
      { className: 'section clients' },
      h(
        'div',
        { className: 'container' },
        h(
          'div',
          { className: 'clients__inner' },
          h('h1', { className: 'title clients__title' }),
          h('div', { className: 'row' }, h(clientsItem, {}, null))
        )
      )
    )
  }
})
