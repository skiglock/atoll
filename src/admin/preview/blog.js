/* eslint-disable no-undef */
import marked from 'marked'

const mdOptions = {
  // whether to conform to original MD implementation
  pedantic: false,
  // Github Flavoured Markdown
  gfm: true,
  // tables extension
  tables: true,
  // smarter list behavior
  smartLists: true,
  // "smart" typographic punctuation for things like quotes and dashes
  smartypants: true,
  // sanitize HTML tags
  sanitize: true
  // ... other options
}

function convertToHTML(markdownText) {
  marked.setOptions(mdOptions)
  return marked(markdownText)
}

export default createClass({
  render: function () {
    const { entry } = this.props
    const formatDate = () => {
      const newDate = new Date(entry.getIn(['data', 'date']))
      const year = newDate.getFullYear()
      const day = newDate.getDate()
      const month = newDate.getMonth()
      return `${day}.${month}.${year}`
    }
    return h(
      'main',
      { className: 'main', style: { padding: '40px 0' } },
      h(
        'section',
        { className: 'blog-post' },
        h(
          'div',
          { className: 'container' },
          h(
            'div',
            { className: 'blog-post__top', style: { marginTop: '20px' } },
            h(
              'div',
              {
                className: 'title'
              },
              entry.getIn(['data', 'title'])
            ),
            h('div', { className: 'date' }, formatDate())
          ),
          h('div', {
            className: 'blog-post__body',
            dangerouslySetInnerHTML: {
              __html: convertToHTML(entry.getIn(['data', 'full']))
            }
          })
        )
      )
    )
  }
})
