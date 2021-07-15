/* eslint-disable no-undef */

export default createClass({
  render: () => {
    return h(
      'div',
      { className: 'card blog__card' },
      h('h2', {
        className: 'title blog__card-title',
        style: {
          width: '100%',
          height: '20px',
          backgroundColor: '#e5e5e5'
        }
      }),
      h('a', { className: 'blog__card-link' }, 'Открыть')
    )
  }
})
