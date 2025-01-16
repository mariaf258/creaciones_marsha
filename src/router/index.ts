import { createRouter, createWebHistory } from 'vue-router'
import inicio from '@/views/inicio.vue'
import accesorios from '@/views/accesorios.vue'
import minidonas from '@/views/minidonas.vue'
import desayunoSorpresa from '@/views/desayunoSorpresa.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: inicio,
    }, 
    {
      path: '/accesorios',
      name: 'accesorios',
      component: accesorios,
    }, 
    {
      path: '/minidonas',
      name: 'minidonas',
      component: minidonas,
    }, 
    {
      path: '/desayunoSorpresa',
      name: 'desayunoSorpresa',
      component: desayunoSorpresa,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
