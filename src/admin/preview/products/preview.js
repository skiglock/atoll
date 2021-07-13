import blog from '../section/blog'
import cards from '../section/cards'
import clients from '../section/clients'

/* eslint-disable no-undef */

export default createClass({
  render: () => {
    return h(
      'main',
      { className: 'main' },
      h(blog, {}, null),
      h(cards, {}, null),
      h(clients, {}, null)
      // h(faq, {}, null),
      // h(plans, {}, null),
      // h(price, {}, null),
      // h(results, {}, null),
      // h(sevices, {}, null),
      // h(consultation, {}, null),
      // h(contacts, {}, null),
      // h(demonstration, {}, null),
      // h(head, {}, null),
      // h(headthree, {}, null),
      // h(headtwo, {}, null),
      // h(message, {}, null),
      // h(order, {}, null),
      // h(other, {}, null),
      // h(quote, {}, null),
      // h(target, {}, null)
      // h(team, {}, null)
    )
  }
})
