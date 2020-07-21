<template>
    <div class="person">
        <ul>
            <li>姓名：{{name}},用到了属性计算 --> computed</li>
            <li>性别：{{$store.state.gender}}</li>
            <li>年龄：{{age}}</li>
            <li>count：{{count}}</li>
            <li @click="yinlz">共享+</li>
        </ul>
        <!-- 未做更改的代码: <input type="text" v-model="age"> -->
        <!-- 有因为 v-model会丢失属性,,把set和get改成事件 -->
        <input type="text" @input="setAgeValue":value="age">
    </div>
</template>
<!--
在共享的状态的state的值变多了之后,重复的代码会增多;
此时Vuex提供了一个mapState辅助函数来简化操作;
在需要使用辅助函数的地方导入即可,它是非默认的辅助函数，需要大括号{}且名称是固定!!!
-->
<script>
    import {mapState,mapMutations} from 'vuex';
    //import {mapState,mapMutations} from 'vuex';
    export default {
        name: "Person",
        /*属性计算,如果只是显示且状态名和模版插值名一致时用数组,也就是下面的可以写成 computed: mapState(['name','gender','age'])*/

        // computed : {
        //     name (){
        //         return this.$store.state.name;
        //     },
        //     /*有因为 v-model会丢失属性,此处的代码未做更改，下面的age已做 setAgeValue 事件更改*/
        //     count : {
        //         get (){
        //             return this.$store.state.count;
        //         },
        //         set(value){
        //             //this.$store.commit('setAgeValue',value);//指定Vuex方法名及传参数!!!
        //         }
        //     }
        // },
        computed: mapState(['name','gender','age','count']),//仅作显示的话，就可以使用这行代码,如果还有其他的业务的话，则可以用 下面的方式来处理!!!
        /*这个是个上面的配置使用的*/
        methods : {
            /*有因为 v-model会丢失属性,,把set和get改成事件,e是event事件对象*/
            setAgeValue : function(e){
                this.$store.commit('setAgeValue',e.target.value);//指定Vuex方法名及传参数!!!
            },
            /*当Vuex里的方法和调用Vuex其它组件的方法名一样时，可以用函数辅助mapMutations来简化代码*/
            ...mapMutations(['yinlz']),
        }
    }
</script>

<style scoped>

</style>
