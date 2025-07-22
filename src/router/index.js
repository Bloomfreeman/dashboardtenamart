import { createRouter, createWebHistory } from 'vue-router'
import homeview from '@/views/homeview.vue'
import usersview from '@/views/usersview.vue'
import notfoundview from '@/views/notfoundview.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      name: 'home',
      component: homeview,
    },
    {
      path:'/users',
      name: 'users',
      component: usersview,
    },
    {
      path: '/:catchAll(.*)',
      name:'not-found',
      component: notfoundview,
    }
  ],
})

export default router
