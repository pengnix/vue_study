<template>
  <div>
    <h2>我是首页</h2>
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      path: "/home/news",
    };
  },
  created() {
    console.log("home create");
    // this.$router.push("/home/news")
  },
  destroyed() {
    console.log("home destroy");
  },
  activated() {
    this.$router.push(this.path);
  },
  // deactivated() {
  //   this.path = this.$route.path;
  // },
  beforeRouteLeave(to, from, next){
    this.path = this.$route.path;
    next()
  }
};
</script>

<style scoped>
</style>
