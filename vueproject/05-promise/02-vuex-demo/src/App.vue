<template>
  <div id="app">
    <h1>{{$store.state.a.name}}</h1>
    <h1>{{$store.getters.fullName}}</h1>
    <h1>{{$store.getters.fullName2}}</h1>
    <h1>{{$store.getters.fullName3}}</h1>
    <button @click="updateName">updateName</button>
    <h1>{{$store.state.info}}</h1>
    <button @click="changeInfo">change</button>
    <h1>{{message}}</h1>
    <h1>{{$store.state.counter}}</h1>
    <button @click="addition">+</button>
    <button @click="subtraction">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCountNew(5)">+5</button>
    <button @click="addStu">add person</button>
    <h2>{{$store.getters.powerCounter}}</h2>
    <h2>{{$store.getters.more5Person}}</h2>
    <h2>???{{$store.getters.more5PersonLen}}</h2>
    <h2>{{$store.getters.moreAgePerson(0)}}</h2>

    <hello-vuex></hello-vuex>
  </div>
</template>

<script>
import HelloVuex from "./components/HelloVuex";
import { INCREMENT } from "./store/mutations-types";

export default {
  name: "App",
  components: {
    HelloVuex,
  },
  data() {
    return {
      message: "App组件",
      counter: 0,
    };
  },
  methods: {
    addition() {
      this.$store.commit(INCREMENT);
    },
    subtraction() {
      this.$store.commit("decrement");
    },
    addCount(num) {
      this.$store.commit("addCount", 5);
    },
    addCountNew(num) {
      console.log("A:" + num);
      this.$store.commit({
        type: "addCountNew",
        num,
      });
    },
    addStu() {
      const stu = { id: "Wednesday", age: 7 };
      this.$store.commit("addPerson", stu);
    },
    changeInfo() {
      // this.$store.commit("changeInfo");
      this.$store.dispatch("aUpdateInfo", "payload").then((res) => {
        console.log(res);
      });
    },
    updateName() {
      this.$store.commit("updateName");
    },
  },
};
</script>

<style>
</style>
