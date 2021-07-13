/* eslint-disable no-undef */

export default createClass({
  render: function () {
    const { title, desc, img } = this.props

    return h(
      'section',
      { className: 'section head' },
      h(
        'div',
        { className: 'container' },
        h(
          'div',
          { className: 'head__inner' },
          h(
            'div',
            { className: 'row' },
            h(
              'div',
              { className: 'column column-60' },
              h('h1', { className: 'title head__title' }, title),
              h('p', { className: 'text head__text' }, desc)
            ),
            h(
              'div',
              { className: 'column column-30' },
              h('div', { className: 'head__img' }, h('img', { src: img }))
            )
          )
        )
      )
    )
  }
})
