/* eslint-disable no-undef */

export default createClass({
  render: function () {
    const { title, desc, img } = this.props
    return h(
      'section',
      { className: 'section target' },
      h(
        'div',
        { className: 'container' },
        h('h1', { className: 'title target__title' }, title),
        h('h2', { className: 'text' }, desc),
        h(
          'div',
          { className: 'target__img' },
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
      )
    )
  }
})
