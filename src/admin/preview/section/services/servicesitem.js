/* eslint-disable no-undef */

export default createClass({
  render: () => {
    return h(
      'div',
      { className: 'column column-30' },
      h(
        'div',
        { className: 'card services__card' },
        h('h1', {
          className: 'title services__card-title',
          style: {
            width: '170px',
            minHeight: '30px',
            backgroundColor: '#e5e5e5',
            margin: '20px'
          }
        }),
        h('span', { className: 'separator' }),
        h(
          'div',
          { className: 'services__card-body' },
          h('p', {
            className: 'services__card-text',
            style: {
              width: '100%',
              height: '80px',
              backgroundColor: '#e5e5e5'
            }
          }),
          h(
            'button',
            {
              className: 'btn services__card-btn',
              style: {
                fontWeight: '600',
                fontSize: '11px',
                color: '#fff',
                backgroundColor: '#487bfa',
                borderRadius: '60px',
                padding: '10px 40px'
              }
            },
            'Подробнее'
          )
        )
      )
    )
  }
})
