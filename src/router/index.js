import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store';
import Registration from "@/views/Registration";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter: (to, from, next) => {
      if (store.getters.isLoggedIn) next('/dashboard');
      else next();
    }
  },
  {
    path: '/registration',
    name: 'Registration',
    component: Registration,
    beforeEnter: (to, from, next) => {
      if (store.getters.isLoggedIn) next('/dashboard');
      else next();
    }
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "dashboard" */ '../views/members/Dashboard.vue'),
    beforeEnter: (to, from, next) => {
      if (store.getters.isLoggedIn) next();
      else next('/');
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach((to, from, next) => {
//   if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
//   else next()
// })

export default router
