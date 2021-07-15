import form from '../common/form'

/* eslint-disable no-undef */

export default createClass({
  render: function () {
    const { title, desc } = this.props
    return h(
      'section',
      { className: 'section order' },
      h(
        'div',
        { className: 'container' },
        h(
          'div',
          { className: 'order__inner' },
          h(
            'div',
            { className: 'row' },
            h(
              'div',
              { className: 'column column-50' },
              h('h1', { className: 'title order__title' }, title),
              h('p', { className: 'text order__text' }, desc)
            ),
            h('div', { className: 'column column-50' }, h(form, {}))
          )
        )
      )
    )
  }
})
