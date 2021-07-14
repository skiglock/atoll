const state = () => ({
  isModalOpen: false,
  modalName: '',
  modalTitle: ''
})

const getters = {}

const actions = {}

const mutations = {
  setIsModalOpen(state, status) {
    state.isModalOpen = status
  },
  setModalName(state, name) {
    state.modalName = name
  },
  setModalTitle(state, name) {
    state.modalTitle = name
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
