import { createRouter, createWebHistory } from 'vue-router'
import { useAuth } from '../composables/useAuth'

import HomeView from '../views/HomeView.vue'
import ArticlesView from '../views/ArticlesView.vue'
import ArticleDetailView from '../views/ArticleDetailView.vue'
import AjouterView from '../views/AjouterView.vue'
import PanierView from '../views/PanierView.vue'
import LoginView from '../views/LoginView.vue'
import AdminView from '../views/AdminView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/articles', name: 'articles', component: ArticlesView },
    { path: '/article/:id', name: 'article-detail', component: ArticleDetailView, props: true },
    { path: '/ajouter', name: 'ajouter', component: AjouterView },
    { path: '/panier', name: 'panier', component: PanierView },
    { path: '/login', name: 'login', component: LoginView },
    {
      path: '/admin',
      name: 'admin',
      component: AdminView,
      beforeEnter: (to, from, next) => {
        // Garde de route "maison" : pas de vraie sécurité, juste une
        // condition sur le flag réactif isLoggedIn (voir useAuth.js).
        const { isLoggedIn } = useAuth()
        if (!isLoggedIn.value) {
          next({ name: 'login', query: { redirect: to.fullPath } })
        } else {
          next()
        }
      },
    },
  ],
})

export default router
