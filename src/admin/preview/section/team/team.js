import teamItem from './teamitem'

/* eslint-disable no-undef */

export default createClass({
  render: function () {
    const { title } = this.props
    return h(
      'section',
      { className: 'section team' },
      h(
        'div',
        { className: 'container' },
        h(
          'div',
          { className: 'team__inner' },
          h('h1', { className: 'title team__title' }, title),
          h(
            'div',
            { className: 'row' },
            h(teamItem, {}),
            h(teamItem, {}),
            h(teamItem, {})
          ),
          h(
            'div',
            { className: 'team__dots' },
            h('div', { className: 'team__dots-item team__dots-item--active' }),
            h('div', { className: 'team__dots-item' }),
            h('div', { className: 'team__dots-item' })
          )
        )
      )
    )
  }
})
