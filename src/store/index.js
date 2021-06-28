import Vue from 'vue'
import Vuex from 'vuex'
import api from '@/services/http/api_requests'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    mode: 'Start',
    modesList: ['Start', 'Quiz', 'Result'],
    amount: '10',
    difficulty: 'easy',
    questions: [],
    currentQuestionId: 0
  },
  getters: {
    currentQuestion(state) {
      return state.questions[state.currentQuestionId]
    },
    quizCompleted(state) {
      return state.currentQuestionId === state.questions.length - 1
    },
    answeredAmount(state) {
      return state.currentQuestionId + 1
    },
    totalQuestionsAmount(state) {
      return state.questions.length
    },
    trueAnswersAmount(state) {
      return state.questions.filter((question) => question.answer === question.correct_answer).length
    },
    successRate(state, getters) {
      return (getters.trueAnswersAmount/getters.totalQuestionsAmount).toFixed(2)
    }
  },
  mutations: {
    SET_DIFFICULTY: (state, payload) => state.difficulty = payload,
    SET_AMOUNT: (state, payload) => state.amount = payload,
    SET_QUESTIONS: (state, payload) => state.questions = payload,
    SET_NEXT_MODE: (state) => {
      let index = state.modesList.findIndex(element => element === state.mode)
      if (index === state.modesList.length-1) {
        state.mode = state.modesList[0]
        return
      }
      state.mode = state.modesList[++index]
    },
    SET_NEXT_QUESTION_ID: (state) => state.currentQuestionId++,
    SET_CURRENT_QUESTION_ANSWER: (state, payload) => {
      if (payload) {
        state.questions[state.currentQuestionId].answer = 'True'
        return
      }
      state.questions[state.currentQuestionId].answer = 'False'
    },
    RESET_STATE_TO_DEFAULT(state) {
      state.questions = []
      state.currentQuestionId = 0
    }
  },
  actions: {
    async startGame({ state, commit }) {
      await api.fetchQuestions(state.amount, state.difficulty)
          .then(res => commit('SET_QUESTIONS', res.data.results))
      commit('SET_NEXT_MODE')
    },
    acceptAnswer({ getters, commit }, answer) {
      commit('SET_CURRENT_QUESTION_ANSWER', answer)
      if (getters.quizCompleted) {
        commit('SET_NEXT_MODE')
      }
      commit('SET_NEXT_QUESTION_ID')
    },
    startAgain({ commit }) {
      commit('RESET_STATE_TO_DEFAULT')
      commit('SET_NEXT_MODE')
    }
  },
  modules: {
  }
})
