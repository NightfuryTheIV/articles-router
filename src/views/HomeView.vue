<script setup>
import { computed } from 'vue'
import { useArticles } from '../composables/useArticles'
import ArticleItem from '../components/ArticleItem.vue'

const { articles } = useArticles()

const coupsDeCoeur = computed(() => articles.slice(0, 3))
</script>

<template>
  <div class="page-accueil">
    <section class="hero">
      <h1>Mes chansons favorites</h1>
      <div class="hero-actions">
        <RouterLink to="/articles" class="btn btn-primaire">Voir toutes les chansons</RouterLink>
        <RouterLink to="/ajouter" class="btn btn-secondaire">Ajouter une chanson</RouterLink>
      </div>
    </section>

    <section>
      <h2>Coups de cœur</h2>
      <div class="grille">
        <ArticleItem v-for="article in coupsDeCoeur" :key="article.id" :article="article" />
      </div>
    </section>
  </div>
</template>
