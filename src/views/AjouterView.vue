<script setup>
import { useArticles } from '../composables/useArticles'
import FormulaireArticle from '../components/FormulaireArticle.vue'

const { ajouterArticle } = useArticles()
</script>

<template>
  <div class="page-ajouter">
    <h1>Ajouter une chanson</h1>
    <FormulaireArticle @ajouter="ajouterArticle" />
  </div>
</template>
