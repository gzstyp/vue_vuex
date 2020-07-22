// 这个文件的结构和\src\store\index.js一致,只是少了modules的属性
export default {
    namespaced : true,//需要注意这个命名空间,要是启用了命名空间的话，在调用同步方法this.$store.commit或异步方法this.$store.dispatch时要加 命名空间/方法名xxx,含方法及state属性
    /*数据值,本质上是和\src\store\index.js同一个state属性，所以用法和它一样,只是获值是 $store.state.list.xxx 或 this.$store.state.list.xxx,list是在src\store\index.js的modules挂载定义的!!!*/
    state : {
        name : 'no name'
    },
    getters : {
        getName(state){
            return '['+state.name+']'
        }
    },
    /*处理方法，本质上是和\src\store\index.js同一个state属性,所以用法和它一样,方法也是 this.$store.commit('setName',4096);*/
    mutations : {
        setName(state,value){
            state.name = value;
        }
    },
    /*异步处理|耗时处理，本质上是和\src\store\index.js同一个state属性,所以用法和它一样,方法也是 this.$store.dispatch('infoFun') */
    actions : {
        /*其中{commit}解构,可以删除它{commit}后，用console.info();输出里面的数据*/
        infoFun({commit}){
            setTimeout(()=>{
                commit('setName', 'www.yinlz.com');/*指定本文件的方法名,setName()*/
            },1000);
        }
    }
}
