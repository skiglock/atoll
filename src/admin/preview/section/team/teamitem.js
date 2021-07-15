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
          h('div', {
            className: 'person__avatar',
            style: {
              width: '147px',
              height: '147px',
              borderRadius: '50%',
              backgroundColor: '#e5e5e5'
            }
          })
        ),
        h('h2', {
          className: 'title person__name',
          style: {
            width: '100px',
            height: '10px',
            backgroundColor: '#e5e5e5'
          }
        }),
        h('h3', {
          className: 'person__position',
          style: {
            width: '100px',
            height: '6px',
            backgroundColor: '#e5e5e5'
          }
        }),
        h('h4', {
          className: 'person__practice',
          style: {
            width: '100px',
            height: '4px',
            backgroundColor: '#e5e5e5'
          }
        })
      )
    )
  }
})
