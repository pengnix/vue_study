<template>
  <div id="app">
    <!-- <router-link to='/home' tag="button" replace>首页</router-link>
    <router-link to='/about' tag="button" replace>关于</router-link> -->
        <!-- <router-link to='/home' tag="button" replace active-class="active">首页</router-link>
    <router-link to='/about' tag="button" replace active-class="active">关于</router-link> -->
    <button @click="clickHome">首页</button>
    <button @click="clickAbout">关于</button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
    clickHome(){
      this.$router.push('/home')
    },
    clickAbout(){
      this.$router.push('/about')
    }
  }
}
</script>

<style>
  .active{
    color: brown;
  }
</style>
