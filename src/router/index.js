import Vue from 'vue'
import VueRouter from 'vue-router'

import Layout from '@/layout/layout.vue'
import HomeView from '@/views/HomeView.vue'
import vGoods from 'views/goods'
import vAbout from 'views/about'
import vIcons from 'views/icons'

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
    path: '/icons',
    component: Layout,
    children: [
      {
        path: '/',
        name: 'Icons',
        component: vIcons,
        meta: { title: '图标库', icon: 'fas fa-icons', noCache: true }
      }
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

  {
    path: '/testHome',
    name: 'testHome',
    component: HomeView,
  },


  // 微應用
  // {
  //   path: '/micro',
  //   name: 'micro',
  //   component: () => import('views/micro/index')
  // },
  // {
  //   path: '/micro/*',
  //   component: () => import('views/micro/index')
  // },

  {
    path: '/micro',
    component: Layout,
    children: [
      {
        path: '/',
        name: 'micro',
        component: () => import('views/micro/index')
      },
    ]
  },
  {
    path: '/micro/*',
    component: Layout,
    children: [
      {
        path: '/',
        component: () => import('views/micro/index')
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
