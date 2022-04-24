import { createRouter, createWebHashHistory } from 'vue-router'
import First from '../views/First.vue'

const routes = [
  {
    path: '/',
    redirect: '/first'
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/first',
    name: 'First',
    component:First
  },
  {
    path:'/index',
    name: 'Index',
    component:() => import(/* webpackChunkName: "about" */ '../views/Index.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
