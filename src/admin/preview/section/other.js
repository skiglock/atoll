/* eslint-disable no-undef */

export default createClass({
  render: function () {
    const { title, desc, img } = this.props
    return h(
      'section',
      { className: 'section other' },
      h(
        'div',
        { className: 'container' },
        h('h1', { className: 'title title-center' }),
        h(
          'div',
          { className: 'other__inner' },
          h(
            'div',
            { className: 'row' },
            h(
              'div',
              { className: 'column column-50' },
              h(
                'div',
                { className: 'other__img' },
                img
                  ? h('img', { src: img })
                  : h('div', {
                      style: {
                        backgroundColor: '#e5e5e5',
                        width: '100%',
                        height: '100%'
                      }
                    })
              )
            ),
            h(
              'div',
              { className: 'column column-50' },
              h(
                'div',
                { className: 'other__text' },
                h('h1', { className: 'title' }, title),
                h('p', { className: 'text' }, desc)
              )
            )
          )
        )
      )
    )
  }
})
