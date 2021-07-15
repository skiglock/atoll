/* eslint-disable no-undef */

export default createClass({
  render: function () {
    const { title, desc, img } = this.props
    return h(
      'section',
      { className: 'section consultation' },
      h(
        'div',
        { className: 'container' },
        h(
          'div',
          { className: 'consultation__inner' },
          h(
            'div',
            { className: 'row' },
            h(
              'div',
              { className: 'column column-50' },
              h(
                'div',
                { className: 'consultation__left' },
                h('h1', { className: 'title consultation__title' }, title),
                h('p', { className: 'text consultation__text' }, desc),
                h(
                  'button',
                  {
                    className: 'btn consultation__btn',
                    style: {
                      fontWeight: '600',
                      fontSize: '20px',
                      color: '#fff',
                      backgroundColor: '#487bfa',
                      borderRadius: '60px',
                      padding: '10px 40px'
                    }
                  },
                  'Консультация'
                )
              )
            ),
            h(
              'div',
              { className: 'column column-50' },
              h(
                'div',
                { className: 'consultation__right' },
                h(
                  'div',
                  { className: 'consultation__img' },
                  h('img', { src: img })
                )
              )
            )
          )
        )
      )
    )
  }
})
