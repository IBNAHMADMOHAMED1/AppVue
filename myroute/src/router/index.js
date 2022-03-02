  import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path : '/Contact',
    name:'ContactView',
    component: () => import('../views/ContactView.vue')
  },
  {
    path : '/User',
    name:'UserView',
    // redirect:'/Contact',
    component: () => import('../views/UsersView.vue')
  },
  {
    path : '/profile/:name/:price',
    name:'ProfileView',
    component: () => import('../views/ProfileView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
