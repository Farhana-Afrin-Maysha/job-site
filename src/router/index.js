import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Browsejob from "../views/Browsejob.vue";
import Pages from "../views/Pages.vue";
import Contact  from "../views/Contact.vue";
import Loginpage from "../views/Loginpage.vue";
import Loginpage2 from "../views/Loginpage2.vue";
import Registrationpage2 from "../views/Registrationpage2.vue";
import Jobdetail from "../views/Jobdetail.vue";
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
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/login',
    name: 'Loginpage',
    component: Loginpage
  },
  {
    path: '/loginemployer',
    name: 'Loginpage2',
    component: Loginpage2
  },
  {
    path: '/registrationemployer',
    name: 'Registrationpage2',
    component: Registrationpage2
  },
  {
    path: '/jobdetail/:jobid',
    name: 'Jobdetail',
    component: Jobdetail
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
