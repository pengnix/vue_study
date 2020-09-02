<template>
  <div id="app">
    <router-link to="/home" tag="button" replace>首页</router-link>
    <router-link to="/about" tag="button" replace>关于</router-link>
    <router-link v-bind:to="'/user/'+name" tag="button" replace>用户</router-link>
    <router-link :to="{path:'/profile', query:{name:'go',age:17}}" tag="button" replace>profile</router-link>
    <!-- <router-link to="/profile" tag="button" replace>profile</router-link> -->

    <!-- <router-link to='/home' tag="button" replace active-class="active">首页</router-link>
    <router-link to='/about' tag="button" replace active-class="active">关于</router-link>-->
    <!-- <button @click="clickHome">首页</button>
    <button @click="clickAbout">关于</button>-->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      name: "lisi",
    };
  },
  methods: {
    clickHome() {
      this.$router.push("/home");
    },
    clickAbout() {
      this.$router.push("/about");
    },
  },
};
</script>

<style>
.active {
  color: brown;
}
</style>
