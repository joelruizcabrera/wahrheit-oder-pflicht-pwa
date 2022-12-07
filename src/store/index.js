import { createStore } from 'vuex'

export default createStore({
  state: {
    gameModes: [],
    config: {},
    questions: {
      truth: [],
      dare: []
    }
  },
  getters: {
  },
  mutations: {
    configChange(state, config) {
      state.config = config
    },
    addGameModes(state, modes) {
      state.gameModes = modes
    },
    addQuestions(state, questions) {
      state.questions = questions
    }
  },
  actions: {
  },
  modules: {
  }
})
