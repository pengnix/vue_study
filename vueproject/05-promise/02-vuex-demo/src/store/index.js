import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    counter: 0,
    students: [
      { id: 'Monday', age: 1 },
      { id: 'Tuesday', age: 10 }
    ]
  },
  mutations: {
    increment(state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    },
    addCount(state, count) {
      state.counter += count
    },
    addCountNew(state, payload) {
      console.log(payload)
      state.counter += payload.num
    },
    addPerson(state, stu) {
      state.students.push(stu)
    }
  },
  actions: {

  },
  getters: {//类似于计算属性
    powerCounter(state) {
      return state.counter * state.counter
    },
    more5Person(state) {
      return state.students.filter(s => s.age > 5)
    },
    more5PersonLen(state, getters) {
      return getters.more5Person.length
    },
    moreAgePerson(state) {
      // return function(age){
      //   return state.students.filter(s => s.age > 0)
      // }
      return age => state.students.filter(s => s.age > age)
    }
  },
  modules: {

  }
})

export default store
