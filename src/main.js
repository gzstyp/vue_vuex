import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

new Vue({
  router,//挂载在Vue的实例上,然后实例内就可以通过 $router.xxx.xxx,如 $router.params.name 取值
  store,//挂载在Vue的实例上,然后就可以通过 $store.xxx.xxx
  render: h => h(App)
}).$mount('#app');
