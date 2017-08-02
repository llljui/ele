import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Lei from '@/components/Lei'
import User from '@/components/User'
import Shelf from '@/components/Shelf'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/Lei',
      name: 'Lei',
      component: Lei
    },
    {
      path: '/User',
      name: 'User',
      component: User
    },
    {
      path: '/Shelf',
      name: 'Shelf',
      component: Shelf
    }
  ]
})
