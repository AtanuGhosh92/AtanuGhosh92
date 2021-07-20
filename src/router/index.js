import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/user-detals/:id',
    name: 'UserDetals',
    component: () => import('../views/UserDetals.vue')
  },
  {
    path: '/add-post/:id',
    name: 'AddPost',
    component: () => import('../views/AddPost.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
