<script setup>
import { useCart } from '../composables/useCart'
import Panier from '../components/Panier.vue'

const { items, retirerDuPanier } = useCart()
</script>

<template>
  <div class="page-panier">
    <h1>Mes favoris</h1>
    <Panier :items="items" @retirer="retirerDuPanier" />
  </div>
</template>
