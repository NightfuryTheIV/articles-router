<script setup>
import { useRouter } from 'vue-router'
import { useArticles } from '../composables/useArticles'
import { useAuth } from '../composables/useAuth'
import ListeArticles from '../components/ListeArticles.vue'

const { articles, supprimerArticle } = useArticles()
const { username, logout } = useAuth()
const router = useRouter()

function seDeconnecter() {
  logout()
  router.push('/')
}
</script>

<template>
  <div class="page-admin">
    <div class="admin-header">
      <h1>Administration</h1>
      <div>
        <span>Connecté en tant que {{ username }}</span>
        <button class="btn btn-secondaire" @click="seDeconnecter">Se déconnecter</button>
      </div>
    </div>

    <p>{{ articles.length }} chanson(s) au catalogue.</p>

    <ListeArticles :articles="articles" mode-admin @supprimer="supprimerArticle" />
  </div>
</template>
