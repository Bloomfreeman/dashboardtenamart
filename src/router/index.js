import { createRouter, createWebHistory } from 'vue-router'
import homeview from '@/views/homeview.vue'
import usersview from '@/views/usersview.vue'
import notfoundview from '@/views/notfoundview.vue'
import searchview from '@/views/searchview.vue'
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
      path:'/search/:value/:rd',
      name:'search',
      component:searchview,
    },
    {
      path: '/:catchAll(.*)',
      name:'not-found',
      component: notfoundview,
    }
  ],
})

export default router
