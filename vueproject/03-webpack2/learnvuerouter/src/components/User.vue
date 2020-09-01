<template>
    <div>
        <h2>我是{{userId2}}</h2>
    </div>
</template>

<script>
export default {
    name:"User",
    computed:{
        userId2(){
            return this.$route.params.userId
        }
    }
}
</script>

<style scoped>

</style>