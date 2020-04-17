import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Browsejob from "../views/Browsejob.vue";
import Pages from "../views/Pages.vue";
import Blog from "../views/Blog.vue";


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/browsejob',
    name: 'Browsejob',
    component: Browsejob
  },
  {
    path: '/pages',
    name: 'Pages',
    component: Pages
  },{
    path: '/blog',
    name: 'Blog',
    component: Blog
  },

  
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
