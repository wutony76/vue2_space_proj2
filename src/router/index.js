import Vue from 'vue';
import VueRouter from 'vue-router';

// import view component
import vHome from '../views/home.vue';
// import vAbout from '../views/about.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: vHome,
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   component: vAbout,
  //   // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
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
const router = new VueRouter({
  base:'/',
  mode:'history',
  routes
})
export default router;
