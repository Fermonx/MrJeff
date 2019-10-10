import Vue from 'vue'
import Router from 'vue-router'
import List from '@/components/List'
import Detail from '@/components/Detail'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/orders',
      name: 'list',
      component: List
    },
    {
      path: '/orderId',
      name: 'detail',
      component: Detail
    }
  ]
})
