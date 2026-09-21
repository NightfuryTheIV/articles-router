import { createRouter, createWebHistory } from 'vue-router'
import Homepage from '../components/Homepage.vue'
import ListArticles from '../components/ListeArticles.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Homepage,
    },
    {
      path: '/articles',
      name: 'articles',
      component: ListArticles,
    },
  ],
})

export default router
