import { createRouter, createWebHashHistory } from 'vue-router'
import First from '../views/First.vue'

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path:'/login',
    name: 'Login',
    component:() => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/first',
    name: 'First',
    component:First,
    meta: {
      requireAuth: true
    },
    children:[
      {
        path: '/about',
        name: 'About',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
      },
    ]
  }
  
];



const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
