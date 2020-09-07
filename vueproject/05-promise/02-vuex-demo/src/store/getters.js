export default {//类似于计算属性
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
}
