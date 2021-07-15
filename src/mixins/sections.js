// import SectionServices from '@/components/Section/SectionServices/SectionServices'
// import SectionPlans from '@/components/Section/SectionPlans/SectionPlans'
// import SectionPrice from '@/components/Section/SectionPrice/SectionPrice'
// import SectionOther from '@/components/Section/SectionOther'
// import SectionResults from '@/components/Section/SectionResults/SectionResults'
// import SectionConsultation from '@/components/Section/SectionConsultation'
// import SectionQuote from '@/components/Section/SectionQuote'
// import SectionOrder from '@/components/Section/SectionOrder'
// import SectionHead from '@/components/Section/SectionHead'
// import SectionHeadTwo from '@/components/Section/SectionHeadTwo'
// import SectionHeadThree from '@/components/Section/SectionHeadThree'
// import SectionMessage from '@/components/Section/SectionMessage'
// import SectionCards from '@/components/Section/SectionCards/SectionCards'
// import SectionContacts from '@/components/Section/SectionContacts'
// import SectionFaq from '@/components/Section/SectionFaq/SectionFaq'
// import SectionTarget from '@/components/Section/SectionTarget'
// import SectionTeam from '@/components/Section/SectionTeam'
// import SectionClients from '@/components/Section/SectionClients/SectionClients'
// import SectionDemonstration from '@/components/Section/SectionDemonstration'
// import SectionBlog from '@/components/Section/SectionBlog/SectionBlog'

export default {
  components: {
    SectionServices: () =>
      import('@/components/Section/SectionServices/SectionServices'),
    SectionHeadTwo: () => import('@/components/Section/SectionHeadTwo'),
    SectionPlans: () =>
      import('@/components/Section/SectionPlans/SectionPlans'),
    SectionPrice: () =>
      import('@/components/Section/SectionPrice/SectionPrice'),
    SectionOther: () => import('@/components/Section/SectionOther'),
    SectionResults: () =>
      import('@/components/Section/SectionResults/SectionResults'),
    SectionConsultation: () =>
      import('@/components/Section/SectionConsultation'),
    SectionQuote: () => import('@/components/Section/SectionQuote'),
    SectionOrder: () => import('@/components/Section/SectionOrder'),
    SectionHead: () => import('@/components/Section/SectionHead'),
    SectionCards: () =>
      import('@/components/Section/SectionCards/SectionCards'),
    SectionContacts: () => import('@/components/Section/SectionContacts'),
    SectionFaq: () => import('@/components/Section/SectionFaq/SectionFaq'),
    SectionHeadThree: () => import('@/components/Section/SectionHeadThree'),
    SectionMessage: () => import('@/components/Section/SectionMessage'),
    SectionTarget: () => import('@/components/Section/SectionTarget'),
    SectionTeam: () => import('@/components/Section/SectionTeam'),
    SectionClients: () =>
      import('@/components/Section/SectionClients/SectionClients'),
    SectionDemonstration: () =>
      import('@/components/Section/SectionDemonstration'),
    SectionBlog: () => import('@/components/Section/SectionBlog/SectionBlog')
  },
  props: ['components']
}
