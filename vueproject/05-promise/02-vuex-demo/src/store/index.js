import Vue from 'vue'
import Vuex from 'vuex'
import { INCREMENT } from './mutations-types'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import moduleA from './modules/moduleA'

Vue.use(Vuex)

const state={
  counter: 0,
  students: [
    { id: 'Monday', age: 1 },
    { id: 'Tuesday', age: 10 }
  ],
  info: {
    id: 'cool',
    age: 99
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    a: moduleA
  }
})

export default store

// const obj = {
//   id: 1,
//   name:'2222',
//   age:1
// }

// const { id, name } = obj//对象的解构，名字对应
