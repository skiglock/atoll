import cardsItem from './cardsitem'

/* eslint-disable no-undef */

export default createClass({
  render: () => {
    return h(
      'section',
      { className: 'section cards' },
      h(
        'div',
        { className: 'container' },
        h(
          'div',
          { className: 'cards__head' },
          h('h1', { className: 'title' }),
          h('p', { className: 'text cards__text' })
        ),
        h(
          'div',
          { className: 'card__body' },
          h('div', { className: 'row' }, h(cardsItem, {}, null))
        )
      )
    )
  }
})
