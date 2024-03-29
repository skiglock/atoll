/* eslint-disable no-undef */

export default createClass({
  render: function () {
    const { desc, img } = this.props
    return h(
      'div',
      { className: 'results__item', style: { backgroundImage: `url(${img})` } },
      h(
        'div',
        { className: 'results__item-inner' },
        h('div', {
          className: 'results__item-logo',
          style: { width: '100px', height: '27px', backgroundColor: '#e5e5e5' }
        }),
        h('p', { className: 'text results__item-text' }, desc),
        h(
          'button',
          {
            className: 'btn results__item-btn',
            style: {
              fontWeight: '600',
              fontSize: '20px',
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
  }
})
