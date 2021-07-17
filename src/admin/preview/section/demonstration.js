/* eslint-disable no-undef */

export default createClass({
  render: function () {
    const { title, desc, img } = this.props

    return h(
      'section',
      { className: 'section demonstration' },
      h(
        'div',
        { className: 'container' },
        h(
          'div',
          { className: 'row' },
          h(
            'div',
            { className: 'column column-30' },
            h(
              'div',
              { className: 'consultation__img' },
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
            { className: 'column column-60' },
            h(
              'div',
              { className: 'consultation__desc' },
              h('div', { className: 'title' }, title),
              h('div', { className: 'text' }, desc),
              h(
                'button',
                {
                  className: 'btn',
                  style: {
                    fontWeight: '600',
                    fontSize: '20px',
                    color: '#fff',
                    backgroundColor: '#487bfa',
                    borderRadius: '60px',
                    padding: '10px 40px'
                  }
                },
                'Заказать проект внедрения'
              ),
              h(
                'button',
                {
                  className: 'btn',
                  style: {
                    fontWeight: '600',
                    fontSize: '20px',
                    color: '#000',
                    backgroundColor: '#fff',
                    borderRadius: '60px',
                    padding: '10px 40px'
                  }
                },
                'Записаться на демонстрацию'
              )
            )
          )
        )
      )
    )
  }
})
