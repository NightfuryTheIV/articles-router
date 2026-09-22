<script setup>
import { computed } from 'vue'
import { useArticles } from '../composables/useArticles'
import { useCart } from '../composables/useCart'

// La route est déclarée avec `props: true` dans le router, donc l'id
// de l'URL (/article/:id) arrive directement ici comme une prop.
const props = defineProps({ id: { type: [String, Number], required: true } })

const { getArticleById } = useArticles()
const { estDansPanier, toggleFavori } = useCart()

const article = computed(() => getArticleById(props.id))
const estFavori = computed(() => article.value && estDansPanier(article.value.id))
</script>

<template>
  <div class="page-detail">
    <RouterLink to="/articles" class="lien-retour">← Retour à la liste</RouterLink>

    <div v-if="article" class="detail-carte">
      <div class="detail-image">{{ article.cover }}</div>
      <div>
        <span class="badge">{{ article.genre }}</span>
        <h1>{{ article.titre }}</h1>
        <p class="artiste">{{ article.artiste }}</p>
        <p class="album">{{ article.album }}</p>
        <button
          class="btn"
          :class="estFavori ? 'btn-favori-actif' : 'btn-primaire'"
          @click="toggleFavori(article)"
        >
          {{ estFavori ? '♥ Dans mes favoris' : '♡ Ajouter aux favoris' }}
        </button>
      </div>
    </div>

    <p v-else>Cette chanson n'existe pas (ou a été supprimée).</p>
  </div>
</template>
