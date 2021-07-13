/* eslint-disable no-undef */

export default createClass({
  render: () => {
    return h(
      'div',
      { className: 'column column-30' },
      h(
        'div',
        { className: 'person' },
        h(
          'div',
          { className: 'person__circle' },
          h('img', { className: 'person__avatar' })
        ),
        h('h2', { className: 'title person__name' }),
        h('h3', { className: 'person__position' }),
        h('h4', { className: 'person__practice' })
      )
    )
  }
})
