<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useAuth } from '../composables/useAuth'

const nom = ref('')
const route = useRoute()
const router = useRouter()
const { login } = useAuth()

function seConnecter() {
  login(nom.value)
  // Si on a été redirigé depuis /admin, on y retourne après connexion.
  // Sinon (accès direct à /login), on va sur /admin par défaut.
  router.push(route.query.redirect || '/admin')
}
</script>

<template>
  <div class="page-login">
    <h1>Connexion</h1>
    <p class="info">
      Aucune vérification réelle ici : entrez n'importe quel nom pour accéder
      à l'espace admin (c'est juste une démonstration de garde de route).
    </p>
    <form @submit.prevent="seConnecter">
      <label>
        Nom d'utilisateur
        <input v-model="nom" type="text" placeholder="admin" />
      </label>
      <button type="submit" class="btn btn-primaire">Se connecter</button>
    </form>
  </div>
</template>
