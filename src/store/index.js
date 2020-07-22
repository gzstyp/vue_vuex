import Vue from 'vue';
//Vuex 有两个特性,1.它是响应式的，2.不能直接改变store状态值的! 安装好后它会在src目录下创建store/index.js文件
import Vuex from 'vuex';
Vue.use(Vuex);
//Vuex处理流程: actions 获取数据--> mutations修改处理 --> 修改后 state 状态更新 --> Vue组件渲染
export default new Vuex.Store({
    state: {         // 状态值
        count: 0,
        name: '引路者',
        gender: '男',
        age: 100
    },
    mutations: {     // mutations修改状态值的途径,它是同步的函数,仅用于同步的方法,若要异步的请在 actions 属性里添加!!!
        //名字随便取,把上面的state传进来
        yinlz(state,payload){//第2个参数是调用者传的
            console.info(payload);
            state.count++;
        },
        setAgeValue(state,payload){//如果本Vuex的方法名和参数来改变值
            state.age = payload;
        }
    },
    actions: {       // 异步,接口异步请求，Backend后端服务器请求数据
    },
    //模块化
    modules: {

    }
});
