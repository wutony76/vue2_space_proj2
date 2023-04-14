import Vue from 'vue';
import VueRouter from 'vue-router';

// import view componente
import layout from '@/layout/layout.vue'

import vHome from 'views/home.vue';
import vGoods from 'views/goods';
// import vSample01 from 'views/sample01.vue';
import vAbout from 'views/about.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: 'home',
    childern: [
      {
        path: 'home',
        name: 'home',
        component: vHome 
        // component: () => import('views/home.vue'),
        // component: () => import('views/common/dashboard/index'),
        // meta: {
        //   title: '最新公告', icon: 'fas fa-home', noCache: true, affix: true
        // }
      },
      {
        path: 'goods',
        name: 'goods',
        component: vGoods 
      },
    ]
    // component: vHome,
  },
  {
    path: '/about',
    name: 'about',
    component: vAbout,
    // meta: { layout: 'default' }
  },
  {
    path: '/sample01',
    name: 'sample01',
    component: layout,
    // component: vSample01,
  },
  {
    path: '/testHome',
    name: 'testHome',
    component: vHome,
    // component: vSample01,
  },

  // {
  //   path: '/goods',
  //   name: 'goods',
  //   component: vGoods,
  // },

  // {
  //   path: '/icons',
  //   component: Layout,
  //   hidden: process.env.NODE_ENV !== 'development',
  //   redirect: '/icons/index',
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('views/common/icons/index'),
  //       name: 'Icons',
  //       meta: { title: '图标库', icon: 'fas fa-icons', noCache: true }
  //     }
  //   ]
  // },

  // // 微應用路徑 start.
  // {
  //   path: '/micro',
  //   name: 'micro',
  //   component: () => import('../views/micro.vue'),
  // },
  // {
  //   path: '/micro/*',
  //   component: () => import('../views/micro.vue'),
  // },
  // // 微應用路徑 end.

  // {
  //   path: '/page/a',
  //   name: 'a',
  //   component: () => import('../views/A.vue'),
  // },
  // {
  //   path: '/page/b',
  //   name: 'b',
  //   component: () => import('../views/B.vue'),
  // },
];

// export default routes;
// console.log(routes)

function generateSysRouter() {
  const ro = routes
  // const permissions = store.getters['user/permissions']
  // const rrc = filterAsyncRouter(ro, permissions)
  // rrc.push({ path: '*', redirect: '/404', hidden: true })
  // return rrc
  console.log('ro >>> ', ro)
}

/**
 * asyncRoutes
 * 权限菜单
 */
// export const asyncRoutes = generateSysRouter()

const router = new VueRouter({
  base: '',
  mode: 'hash',
  routes
})
export default router;
