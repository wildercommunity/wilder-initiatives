import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Active from '@/pages/Active'
import Callback from '@/components/Callback'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/pending',
      name: 'Home',
      component: Home
    },
    {
      path: '/active',
      name: 'Active',
      component: Active
    },
    {
      path: '/callback',
      name: 'Callback',
      component: Callback
    },
    {
      path: '*',
      redirect: '/pending'
    }
  ]
})

export default router
