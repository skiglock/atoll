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

    return h(
      'main',
      { className: 'main' },
      h(
        'section',
        { className: 'cases-post' },
        h(
          'div',
          { className: 'container' },
          h(
            'div',
            { className: 'cases-post__inner' },
            h(
              'div',
              { className: 'cases-post__top' },
              h('img', {
                className: 'cases-post__img',
                src: entry.getIn(['data', 'logo'])
              }),
              h(
                'div',
                { className: 'cases-post__title' },
                entry.getIn(['data', 'title'])
              )
            ),
            h(
              'div',
              { className: 'cases-post__body' },
              h(
                'div',
                { className: 'cases-post__item' },
                h(
                  'div',
                  { className: 'title cases-post__item-title' },
                  'О компании'
                ),
                h('div', {
                  className: 'cases-post__item-text',
                  dangerouslySetInnerHTML: {
                    __html: convertToHTML(entry.getIn(['data', 'about']))
                  }
                })
              ),
              h(
                'div',
                { className: 'cases-post__item' },
                h(
                  'div',
                  { className: 'title cases-post__item-title' },
                  'История'
                ),
                h('div', {
                  className: 'cases-post__item-text',
                  dangerouslySetInnerHTML: {
                    __html: convertToHTML(entry.getIn(['data', 'history']))
                  }
                })
              ),
              h(
                'div',
                { className: 'cases-post__item' },
                h(
                  'div',
                  { className: 'title cases-post__item-title' },
                  'Что мы сделали?'
                ),
                h('div', {
                  className: 'cases-post__item-text',
                  dangerouslySetInnerHTML: {
                    __html: convertToHTML(entry.getIn(['data', 'made']))
                  }
                })
              ),
              h(
                'div',
                { className: 'cases-post__item' },
                h(
                  'div',
                  { className: 'title cases-post__item-title' },
                  'Результат'
                ),
                h('div', {
                  className: 'cases-post__item-text',
                  dangerouslySetInnerHTML: {
                    __html: convertToHTML(entry.getIn(['data', 'result']))
                  }
                })
              )
            )
          )
        )
      )
    )
  }
})
