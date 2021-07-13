/* eslint-disable no-undef */

export default createClass({
  render: function () {
    const { title, desc, img } = this.props
    return h(
      'div',
      { className: 'column column-50' },
      h(
        'div',
        { className: 'card cards__card' },
        h('span', { className: 'cards__card-icon' }, h('img', { src: img })),
        h('h1', { className: 'title' }, title),
        h('p', { className: 'text cards__card-text' }, desc)
      )
    )
  }
})
