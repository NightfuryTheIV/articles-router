import { reactive } from 'vue'

// Le panier ("mes favoris") est un état partagé en mémoire, comme les
// articles. Ici, pas de quantité : soit une chanson est dans mes favoris,
// soit elle n'y est pas — pas de sens à l'ajouter "deux fois".
const items = reactive([]) // tableau de chansons (objets article)

export function useCart() {
  function estDansPanier(id) {
    return items.some((chanson) => chanson.id === id)
  }

  function ajouterAuPanier(article) {
    if (!estDansPanier(article.id)) {
      items.push(article)
    }
  }

  function retirerDuPanier(articleId) {
    const index = items.findIndex((chanson) => chanson.id === articleId)
    if (index !== -1) items.splice(index, 1)
  }

  function toggleFavori(article) {
    if (estDansPanier(article.id)) {
      retirerDuPanier(article.id)
    } else {
      ajouterAuPanier(article)
    }
  }

  return { items, estDansPanier, ajouterAuPanier, retirerDuPanier, toggleFavori }
}
