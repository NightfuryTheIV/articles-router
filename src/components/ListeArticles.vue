<script setup>
import { ref, computed, watch } from 'vue'
import BarreRecherche from './BarreRecherche.vue'
import ArticleItem from './ArticleItem.vue'

const props = defineProps({
  articles: { type: Array, required: true },
  modeAdmin: { type: Boolean, default: false },
  parPage: { type: Number, default: 8 },
})
const emit = defineEmits(['supprimer'])

const recherche = ref('')
const genreChoisi = ref('Tous')
const pageActuelle = ref(1)

// Bonus : filtre par genre (la "catégorie" d'une chanson), construit
// dynamiquement depuis les articles
const genres = computed(() => {
  const set = new Set(props.articles.map((a) => a.genre))
  return ['Tous', ...set]
})

const articlesFiltres = computed(() => {
  const texte = recherche.value.toLowerCase().trim()
  return props.articles.filter((a) => {
    const correspondTexte =
      a.titre.toLowerCase().includes(texte) || a.artiste.toLowerCase().includes(texte)
    const correspondGenre = genreChoisi.value === 'Tous' || a.genre === genreChoisi.value
    return correspondTexte && correspondGenre
  })
})

const totalPages = computed(() =>
  Math.max(1, Math.ceil(articlesFiltres.value.length / props.parPage))
)

const articlesPage = computed(() => {
  const debut = (pageActuelle.value - 1) * props.parPage
  return articlesFiltres.value.slice(debut, debut + props.parPage)
})

// Si on tape une recherche, on revient à la page 1 (sinon on peut se
// retrouver sur une page vide qui n'existe plus dans les résultats filtrés)
watch([recherche, genreChoisi], () => {
  pageActuelle.value = 1
})

function pagePrecedente() {
  if (pageActuelle.value > 1) pageActuelle.value--
}
function pageSuivante() {
  if (pageActuelle.value < totalPages.value) pageActuelle.value++
}
</script>

<template>
  <div class="liste-articles">
    <div class="controles">
      <BarreRecherche v-model="recherche" placeholder="Rechercher un titre ou un artiste..." />
      <select v-model="genreChoisi" class="filtre-categorie">
        <option v-for="genre in genres" :key="genre" :value="genre">{{ genre }}</option>
      </select>
    </div>

    <p v-if="articlesFiltres.length === 0" class="vide">
      Aucune chanson ne correspond à votre recherche.
    </p>

    <div v-else class="grille">
      <ArticleItem
        v-for="article in articlesPage"
        :key="article.id"
        :article="article"
        :mode-admin="modeAdmin"
        @supprimer="emit('supprimer', $event)"
      />
    </div>

    <div v-if="totalPages > 1" class="pagination">
      <button :disabled="pageActuelle === 1" @click="pagePrecedente">← Précédent</button>
      <span>Page {{ pageActuelle }} / {{ totalPages }}</span>
      <button :disabled="pageActuelle === totalPages" @click="pageSuivante">Suivant →</button>
    </div>
  </div>
</template>
