import blogItem from './blogitem'
/* eslint-disable no-undef */

export default createClass({
  render: () => {
    return h(
      'section',
      { className: 'section blog' },
      h(
        'div',
        { className: 'container' },
        h(
          'div',
          { className: 'blog__inner' },
          h(
            'div',
            { className: 'blog__head' },
            h(
              'blockquote',
              { className: '' },
              h('h1', { className: 'title blog__title' }),
              h('p', { className: 'text blog__text' })
            )
          ),
          h('div', { className: 'blog__body' }, h(blogItem, {}, null))
        )
      )
    )
  }
})
