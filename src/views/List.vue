<template>
    <div>
        <h3>Vuex的模块化</h3>
        <a href="javascript:;" style="text-decoration: none;outline:none;" @click="infoFs()">点击</a>
        <button style="cursor:pointer;padding:6px;margin:8px">点击</button>
        <h4>模块化list.js下的state的name值:{{$store.state.list.name}}</h4>
        <h4>模块化store/index.js下的state的name值:{{$store.state.name}}</h4>
    </div>
</template>
<script>
    export default {
        name: "List",
        methods : {
            infoFs : function(){
                console.info(this.$store.state.list.name);
                this.$store.dispatch('list/infoFun');//已启用命名空间的 namespaced : true, 的调用方式
                //this.$store.dispatch('infoFun');//未启用命名空间的调用方式
            },
        }
    }
</script>
<style scoped>
</style>
