import cardsItem from './cardsitem'

/* eslint-disable no-undef */

export default createClass({
  render: function () {
    const { title, desc, elements, getAsset } = this.props
    return h(
      'section',
      { className: 'section cards' },
      h(
        'div',
        { className: 'container' },
        h(
          'div',
          { className: 'cards__head' },
          h('h1', { className: 'title' }, title),
          h('p', { className: 'text cards__text' }, desc)
        ),
        h(
          'div',
          { className: 'card__body' },
          h(
            'div',
            { className: 'row' },
            elements
              ? elements.map((el) => {
                  const image = el.getIn(['img'])
                  const img = getAsset(image)
                  return h(
                    cardsItem,
                    {
                      title: el.getIn(['title']),
                      desc: el.getIn(['desc']),
                      img: img
                    },
                    null
                  )
                })
              : null
          )
        )
      )
    )
  }
})
