export default {
  state: {
    name: 'good'
  },
  mutations: {
    updateName(state) {
      state.name = 'lisi'
    }
  },
  actions: {
    aUpdataName(context) {
      setTimeout(() => {
        context.commit('updateName')
      })
    }
  },
  getters: {//类似于计算属性
    fullName(state) {
      return state.name + " soso"
    },
    fullName2(state, getters) {
      return getters.fullName + "B"
    },
    fullName3(state, getters, rootState) {
      return getters.fullName2 + "C"
    }
  }
}
