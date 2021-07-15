/* eslint-disable no-undef */
import priceItem from './priceitem'

export default createClass({
  render: function () {
    const { title, desc, num, num_desc } = this.props
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
                h('h1', { className: 'price__card-title' }, num),
                h('p', { className: 'price__card-desc' }, num_desc),
                h('button', { className: 'btn price__card-btn' }, 'Выбрать')
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
