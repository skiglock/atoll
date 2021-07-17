/* eslint-disable no-undef */

export default createClass({
  render: function () {
    const { title, desc, img } = this.props

    return h(
      'section',
      { className: 'section head-two' },
      h(
        'div',
        { className: 'container' },
        h(
          'div',
          {
            className: 'head-two__inner'
          },
          h(
            'div',
            { className: 'head-two__img' },
            img
              ? h('img', { src: img })
              : h('div', {
                  style: {
                    backgroundColor: '#e5e5e5',
                    width: '100%',
                    height: '100%'
                  }
                })
          ),
          h(
            'div',
            { className: 'head-two__desc' },
            h('h1', { className: 'title head-two__title' }, title),
            h('p', { className: 'text head-two__text' }, desc)
          )
        )
      )
    )
  }
})
