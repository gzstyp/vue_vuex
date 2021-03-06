import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Person from "../views/Person";
import List from "../views/List";
Vue.use(VueRouter)
const routes = [
    {
        path: '/', name: 'Home', component: Home
    },
    {
        path: '/person', name: 'Person', component: Person
    },
    {
        path: '/list', name: 'List', component: List
    },
    {
        path: '/about', name: 'About', component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
]
const router = new VueRouter({
    mode: 'history', base: process.env.BASE_URL, routes
})
export default router
