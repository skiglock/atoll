import priceItem from './priceItem'

/* eslint-disable no-undef */

export default createClass({
  render: function () {
    const { title, desc } = this.props
    return h(
      'section',
      { className: 'section price' },
      h(
        'div',
        { className: 'container' },
        h('h1', { className: 'title price__title' }, title),
        h('p', { className: 'text price__text' }, desc),
        h(
          'div',
          { className: 'price__services' },
          h(
            'div',
            { className: 'row' },
            h(
              'div',
              { className: 'column column-50' },
              h(
                'div',
                { className: 'price__card' },
                h('h1', { className: 'price__card-title' }),
                h('p', { className: 'price__card-desc' }),
                h('button', { className: 'btn price__card-btn' })
              )
            ),
            h(
              'div',
              { className: 'column column-50' },
              h(
                'div',
                { className: 'price__list' },
                h('h1', { className: 'title price__list-title' }),
                h(priceItem, {}, null)
              )
            )
          )
        )
      )
    )
  }
})
