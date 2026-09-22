<script setup>
import { useArticles } from '../composables/useArticles'
import ListeArticles from '../components/ListeArticles.vue'

const { articles } = useArticles()
</script>

<template>
  <div class="page-articles">
    <h1>Toutes les chansons</h1>
    <ListeArticles :articles="articles" />
  </div>
</template>
