import resultsItem from './resultsitem'

/* eslint-disable no-undef */

export default createClass({
  render: function () {
    const { title, elements, getAsset } = this.props
    return h(
      'section',
      { className: 'section results' },
      h(
        'div',
        { className: 'container' },
        h('h1', { className: 'title' }, title),
        h(
          'h1',
          { className: 'results__inner' },
          elements
            ? elements.map((el) => {
                const image = el.getIn(['data', 'img'])
                const img = getAsset(image)
                return h(
                  resultsItem,
                  {
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
  }
})
