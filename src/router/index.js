import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/main',
    name: 'Home',
    component: Home
  },
  {
    path: '/main',
    redirect: 'main/list',
    name: 'Main',
    component: () => import(/* webpackChunkName: "main" */ '@/components/MainLayout.vue'),
    children: [
      {
        path: 'list',
        name: 'List',
        component: () => import(/* webpackChunkName: "main" */ '@/components/List.vue'),
      },
    ],
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
