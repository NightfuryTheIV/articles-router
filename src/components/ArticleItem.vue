<script setup>
import { computed } from 'vue'
import { useCart } from '../composables/useCart'

const props = defineProps({
  article: { type: Object, required: true },
  // Quand modeAdmin est vrai, on affiche "Supprimer" au lieu du bouton favori
  modeAdmin: { type: Boolean, default: false },
})
const emit = defineEmits(['supprimer'])

// Le panier est un état global : on le lit directement ici plutôt que de
// le faire descendre en props depuis 3 niveaux de composants parents.
// (contrairement à la suppression, qui elle reste une décision du parent
// -> voir ArticleItem émettre 'supprimer' plus bas)
const { estDansPanier, toggleFavori } = useCart()
const estFavori = computed(() => estDansPanier(props.article.id))

function confirmerSuppression() {
  // Bonus : petite alerte de confirmation avant de supprimer
  if (window.confirm(`Supprimer "${props.article.titre}" du catalogue ?`)) {
    emit('supprimer', props.article.id)
  }
}
</script>

<template>
  <div class="carte-article">
    <div class="carte-image">{{ article.cover }}</div>

    <div class="carte-corps">
      <span class="badge">{{ article.genre }}</span>
      <h3>{{ article.titre }}</h3>
      <p class="artiste">{{ article.artiste }}</p>
      <p class="album">{{ article.album }}</p>
    </div>

    <div class="carte-actions">
      <RouterLink :to="`/article/${article.id}`" class="btn btn-secondaire">Détails</RouterLink>

      <button
        v-if="!modeAdmin"
        class="btn"
        :class="estFavori ? 'btn-favori-actif' : 'btn-primaire'"
        @click="toggleFavori(article)"
      >
        {{ estFavori ? '♥ Dans mes favoris' : '♡ Ajouter aux favoris' }}
      </button>
      <button v-else class="btn btn-danger" @click="confirmerSuppression">
        Supprimer
      </button>
    </div>
  </div>
</template>
