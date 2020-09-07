import { INCREMENT } from './mutations-types'

export default {
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
}
