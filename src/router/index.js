import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/page/a',
    name: 'a',
    component: () => import('../views/A.vue'),
  },
  {
    path: '/page/b',
    name: 'b',
    component: () => import('../views/B.vue'),
  }, {
    path: '/page/c',
    name: 'c',
    component: () => import('../views/C.vue'),
  },
];

export default routes;
