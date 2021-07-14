import resultsItem from './resultsitem'

/* eslint-disable no-undef */

export default createClass({
  render: function () {
    const { title } = this.props
    return h(
      'section',
      { className: 'section results' },
      h(
        'div',
        { className: 'container' },
        h('h1', { className: 'title' }, title),
        h('h1', { className: 'results__inner' }, h(resultsItem, {}, null))
      )
    )
  }
})
