<template>
    <div>
        <h2>我是{{userId}}</h2>
    </div>
</template>

<script>
export default {
    name:"User",
    computed:{
        userId(){
            return this.$route.params.userId
        }
    }
}
</script>

<style scoped>

</style>