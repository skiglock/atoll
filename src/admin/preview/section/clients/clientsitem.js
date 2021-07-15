/* eslint-disable no-undef */

export default createClass({
  render: () => {
    return h(
      'div',
      { className: 'column column-50' },
      h(
        'a',
        { className: 'card clients__item' },
        h('img', {
          className: 'clients__item-img',
          style: {
            width: '250px',
            height: '40px',
            backgroundColor: '#e5e5e5'
          }
        })
      )
    )
  }
})
