<template>
    <div>
        <h1>我是cpn组件标题</h1>
        <p>我是cpn组件内容</p>
        <h2>{{name}}</h2>
    </div>
</template>

<script>
    export default {
        name: "Cpn",
        data(){
            return{
                name:'cpn组件的name'
            }
        }
    }
</script>

<style scoped>

</style>