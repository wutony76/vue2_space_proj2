import Vue from 'vue'
import VueRouter from 'vue-router'

import Layout from '@/layout/layout.vue'
import HomeView from '@/views/_HomeView.vue'
import JumpHomeView from '@/views/JumpHomePage.vue'
import vGoods from 'views/goods'
import vAbout from 'views/about'
import vIcons from 'views/icons'
import modulesRoutes from './routes'

Vue.use(VueRouter)
const baseRoutes = [
  {
    path: '/',
    name: 'home',
    component: JumpHomeView
  },
  {
    path: '/home',
    name: 'home',
    component: JumpHomeView
  },

  // {
  //   path: '/',
  //   redirect: 'home',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'home',
  //       name: 'home',
  //       // component: HomeView
  //       component: JumpHomeView
  //     },
  //   ]
  // },
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

  // {
  //   path: '/micro',
  //   component: Layout,
  //   children: [
  //     {
  //       path: '/',
  //       name: 'micro',
  //       component: () => import('views/micro/index')
  //     },
  //   ]
  // },
  // {
  //   path: '/micro/*',
  //   component: Layout,
  //   children: [
  //     {
  //       path: '/',
  //       component: () => import('views/micro/index')
  //     },
  //   ]
  // }

  // {
  //   path: '/pageA',
  //   name: 'A',
  //   component: () => import('views/A')
  // },

  {
    path: '/pageB',
    name: 'B',
    component: () => import('views/page/B')
  },
]

// console.log('start modulesRoutes.')
const addressRoutes = [] 
modulesRoutes.forEach((route) => {
  const routerDict = Object.assign({}, route)
  // console.log('r objs >>> ', routerDict)
  addressRoutes.push(routerDict) 
}) 
// console.log('ttt addressRoutes >>> ', addressRoutes)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: baseRoutes.concat(addressRoutes)
})

router.beforeEach((to, from, next) => {
  console.log('to.matched.length > ', to.matched.length)
  if (!to.matched.length) {
    //沒有對應到設定的路由，回重新導向404
    next("/404");
  } else {
    //有對應到設定的路由，繼續執行
    next();
  }
})

export default router
