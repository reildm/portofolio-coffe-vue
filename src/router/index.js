import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import HotDrink from '@/views/HotDrink'
import ColdDrink from '@/views/ColdDrink'
import Food from '@/views/Food'
import Snack from '@/views/Snack'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/hot-drink',
    name: 'HotDrink',
    component: HotDrink
  },
  {
    path: '/cold-drink',
    name: 'ColdDrink',
    component: ColdDrink
  },
  {
    path: '/food',
    name: 'Food',
    component: Food
  },
  {
    path: '/snack',
    name: 'Snack',
    component: Snack
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
