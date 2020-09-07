import Vue from 'vue'
import Vuex from 'vuex'
import { INCREMENT } from './mutations-types'

Vue.use(Vuex)

const moduleA = {
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

const store = new Vuex.Store({
  state: {
    counter: 0,
    students: [
      { id: 'Monday', age: 1 },
      { id: 'Tuesday', age: 10 }
    ],
    info: {
      id: 'cool',
      age: 99
    }
  },
  mutations: {
    [INCREMENT](state) {
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
    },
    changeInfo(state) {
      state.info.id = "ffff"
      // Vue.set(state.info,'address','go')
      // Vue.delete(state.info,'age')
    }
  },
  actions: {
    aUpdateInfo(context, payload) {
      return new Promise((resolve) => {
        setTimeout(() => {
          context.commit('changeInfo')
          console.log(payload)
          resolve('success')
        }, 2000)
      })
    }
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
    a: moduleA
  }
})

export default store

const obj = {
  id: 1,
  name:'2222',
  age:1
}

const { id, name } = obj//对象的解构，名字对应
