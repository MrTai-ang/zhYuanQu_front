import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BigScreenView from '../views/BigScreenView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component:HomeView
    },
    {
      path: '/',
      name: 'big-screen',
      component:BigScreenView
    }
   
  ]
})

export default router
