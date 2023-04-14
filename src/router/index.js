import Vue from 'vue'
import VueRouter from 'vue-router'

import Layout from '@/layout/layout.vue'
import HomeView from '@/views/HomeView.vue'
import vGoods from 'views/goods'
import vAbout from 'views/about'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: 'home',
    component: Layout,
    children: [
      {
        path: 'home',
        name: 'home',
        component: HomeView
      },
    ]
  },

  {
    path: '/goods',
    component: Layout,
    children: [
      {
        path: '/',
        name: 'goods',
        component: vGoods
      },
    ]
  },
  
  {
    path: '/about',
    component: Layout,
    children: [
      {
        path: '/',
        name: 'about',
        component: vAbout
      },
    ]
  },

  {
    path: '/sample01',
    name: 'sample01',
    component: Layout,
  },

  // {
  //   path: '/about',
  //   name: 'about',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // },
  {
    path: '/testHome',
    name: 'testHome',
    component: HomeView,
    // component: vSample01,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
