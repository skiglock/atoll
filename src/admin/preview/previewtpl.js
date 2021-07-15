/* eslint-disable no-undef */

import blog from './section/blog/blog'
import cards from './section/cards/cards'
import clients from './section/clients/clients'
import faq from './section/faq/faq'
import plans from './section/plans/plans'
import price from './section/price/price'
import results from './section/results/results'
import services from './section/services/services'
import team from './section/team/team'
import consultation from './section/consultation'
import contacts from './section/contacts'
import demonstration from './section/demonstration'
import head from './section/head'
import headthree from './section/headthree'
import headtwo from './section/headtwo'
import message from './section/message'
import order from './section/order'
import other from './section/other'
import quote from './section/quote'
import target from './section/target'

export default createClass({
  render: function () {
    const { entry, widgetsFor } = this.props
    return h(
      'main',
      { className: 'main', style: { padding: '40px 0' } },
      entry.getIn(['data', 'layout'])
        ? widgetsFor('layout').map((layout) => {
            if (layout.getIn(['data', 'name']) === 'blog') {
              return h(
                blog,
                {
                  title: layout.getIn(['data', 'title']),
                  desc: layout.getIn(['data', 'desc'])
                },
                null
              )
            } else if (layout.getIn(['data', 'name']) === 'cards') {
              return h(
                cards,
                {
                  title: layout.getIn(['data', 'title']),
                  desc: layout.getIn(['data', 'desc']),
                  elements: layout.getIn(['data', 'elements'])
                },
                null
              )
            } else if (layout.getIn(['data', 'name']) === 'clients') {
              return h(
                clients,
                {
                  title: layout.getIn(['data', 'title'])
                },
                null
              )
            } else if (layout.getIn(['data', 'name']) === 'faq') {
              return h(
                faq,
                {
                  title: layout.getIn(['data', 'title']),
                  elements: layout.getIn(['data', 'elements'])
                },
                null
              )
            } else if (layout.getIn(['data', 'name']) === 'plans') {
              return h(
                plans,
                {
                  title: layout.getIn(['data', 'title']),
                  desc: layout.getIn(['data', 'desc']),
                  elements: layout.getIn(['data', 'elements'])
                },
                null
              )
            } else if (layout.getIn(['data', 'name']) === 'price') {
              return h(
                price,
                {
                  title: layout.getIn(['data', 'title']),
                  desc: layout.getIn(['data', 'desc']),
                  num: layout.getIn(['data', 'num']),
                  num_desc: layout.getIn(['data', 'num_desc'])
                },
                null
              )
            } else if (layout.getIn(['data', 'name']) === 'results') {
              return h(
                results,
                {
                  title: layout.getIn(['data', 'title']),
                  elements: layout.getIn(['data', 'elements'])
                },
                null
              )
            } else if (layout.getIn(['data', 'name']) === 'services') {
              return h(services, {}, null)
            } else if (layout.getIn(['data', 'name']) === 'consultation') {
              return h(
                consultation,
                {
                  title: layout.getIn(['data', 'title']),
                  desc: layout.getIn(['data', 'desc']),
                  img: layout.getIn(['data', 'img'])
                },
                null
              )
            } else if (layout.getIn(['data', 'name']) === 'contacts') {
              return h(contacts, {}, null)
            } else if (layout.getIn(['data', 'name']) === 'demonstration') {
              return h(
                demonstration,
                {
                  title: layout.getIn(['data', 'title']),
                  desc: layout.getIn(['data', 'desc']),
                  img: layout.getIn(['data', 'img'])
                },
                null
              )
            } else if (layout.getIn(['data', 'name']) === 'head') {
              return h(
                head,
                {
                  title: layout.getIn(['data', 'title']),
                  desc: layout.getIn(['data', 'desc']),
                  img: layout.getIn(['data', 'img'])
                },
                null
              )
            } else if (layout.getIn(['data', 'name']) === 'head-three') {
              return h(
                headthree,
                {
                  title: layout.getIn(['data', 'title']),
                  desc: layout.getIn(['data', 'desc']),
                  img: layout.getIn(['data', 'img'])
                },
                null
              )
            } else if (layout.getIn(['data', 'name']) === 'head-two') {
              return h(
                headtwo,
                {
                  title: layout.getIn(['data', 'title']),
                  desc: layout.getIn(['data', 'desc']),
                  img: layout.getIn(['data', 'img'])
                },
                null
              )
            } else if (layout.getIn(['data', 'name']) === 'message') {
              return h(
                message,
                {
                  title: layout.getIn(['data', 'title'])
                },
                null
              )
            } else if (layout.getIn(['data', 'name']) === 'order') {
              return h(
                order,
                {
                  title: layout.getIn(['data', 'title']),
                  desc: layout.getIn(['data', 'desc'])
                },
                null
              )
            } else if (layout.getIn(['data', 'name']) === 'other') {
              return h(
                other,
                {
                  title: layout.getIn(['data', 'title']),
                  desc: layout.getIn(['data', 'desc']),
                  img: layout.getIn(['data', 'img'])
                },
                null
              )
            } else if (layout.getIn(['data', 'name']) === 'quote') {
              return h(quote, { title: layout.getIn(['data', 'title']) }, null)
            } else if (layout.getIn(['data', 'name']) === 'target') {
              return h(
                target,
                {
                  title: layout.getIn(['data', 'title']),
                  desc: layout.getIn(['data', 'desc']),
                  img: layout.getIn(['data', 'img'])
                },
                null
              )
            } else if (layout.getIn(['data', 'name']) === 'team') {
              return h(team, { title: layout.getIn(['data', 'title']) }, null)
            }
          })
        : h(
            'div',
            { className: 'title', style: { textAlign: 'center' } },
            'Добавьте какую нибудь секцию'
          )
    )
  }
})
