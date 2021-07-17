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
  return markdownText ? marked(markdownText) : 'Введите что нибудь'
}

export default createClass({
  render: function () {
    const { entry } = this.props

    return h(
      'main',
      { className: 'main', style: { padding: '40px 0' } },
      h('h1', { className: 'page-title' }, entry.getIn(['data', 'title'])),
      h(
        'section',
        { className: 'other-page' },
        h('div', {
          className: 'container',
          dangerouslySetInnerHTML: {
            __html: convertToHTML(entry.getIn(['data', 'text']))
          }
        })
      )
    )
  }
})
