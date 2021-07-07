const state = () => ({
  isNavOpen: false
})

const getters = {}

const actions = {}

const mutations = {
  setIsNavOpen(state, status) {
    state.isNavOpen = status
  },
  toggleNav(state) {
    state.isNavOpen = !state.isNavOpen
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
