<template>
  <div id="app">
    <h1>{{message}}</h1>
    <h1>{{$store.state.counter}}</h1>
    <button @click="addition">+</button>
    <button @click="subtraction">-</button>
    <hello-vuex></hello-vuex>
  </div>
</template>

<script>
import HelloVuex from "./components/HelloVuex";

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
      this.$store.commit("increment");
    },
    subtraction() {
      this.$store.commit("decrement");
    },
  },
};
</script>

<style>
</style>
