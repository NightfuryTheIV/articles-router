<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useCart } from './composables/useCart'
import { useAuth } from './composables/useAuth'

const { items } = useCart()
const { isLoggedIn } = useAuth()
</script>

<template>
  <div id="app-shell">
    <header>
      <nav>
        <RouterLink to="/">Accueil</RouterLink>
        <RouterLink to="/articles">Chansons</RouterLink>
        <RouterLink to="/ajouter">Ajouter</RouterLink>
        <RouterLink to="/panier">Mes favoris ({{ items.length }})</RouterLink>
        <RouterLink to="/admin">Admin</RouterLink>
        <RouterLink v-if="!isLoggedIn" to="/login">Connexion</RouterLink>
      </nav>
    </header>

    <main>
      <RouterView />
    </main>
  </div>
</template>
