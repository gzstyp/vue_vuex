<template>
  <div class="about">
    <h1>关于页面,共享:{{$store.state.count}}</h1>
    <button @click="jisuanPlus()">共享+</button>
  </div>
</template>
<script>
  export default {
    name : 'About',
    data (){
      return {

      }
    },
    methods : {
      jisuanPlus : function(){
        this.$store.commit('yinlz',512);//指定在Vuex模块内的方法名及参数
      },
    }
  }
</script>
