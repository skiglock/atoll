/* eslint-disable no-undef */

export default createClass({
  render: function () {
    const { title, number } = this.props
    return h(
      'div',
      { className: 'price__list-item' },
      h('span', { className: 'price__list-number' }, number),
      h('p', { className: 'text price__list-text' }, title)
    )
  }
})
