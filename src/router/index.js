import Vue from 'vue'
import VueRouter from 'vue-router'
import welcome from '@/components/welcome/welcome'
import signup from '@/components/auth/signup'
import signin from '@/components/auth/signin'
import dashboard from '@/components/dashboard/dashboard'
import store from '@/store/store'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: welcome
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
    path: '/signup',
    name: 'Sign-up',
    component: signup
  },
  {
    path: '/signin',
    name: 'Sign-in',
    component: signin
  },
  {
    path: '/dashbaord',
    name: 'Dashboard',
    component: dashboard,
    beforeEnter: (to, from, next) => {
      if (store.state.idToken) {
        next()
      } else {
        next('/signin')
      }
    }

  }
]

const router = new VueRouter({
  routes
})

export default router
