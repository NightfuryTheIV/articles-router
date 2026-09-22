import { reactive } from 'vue'

// "Base de données" en mémoire : un simple tableau réactif.
// Comme il vit dans un module à part (et pas dans un seul composant),
// toutes les vues qui l'importent partagent le même état,
// même après avoir changé de page (le composant est démonté par le router,
// mais ce module, lui, reste chargé tant que l'appli tourne).
const articles = reactive([
  { id: 1, titre: 'Remember Summer Days', artiste: 'Anri', album: 'Timely!!', genre: 'City Pop', cover: '🌆' },
  { id: 2, titre: "World's Smallest Violin", artiste: 'AJR', album: 'OK ORCHESTRA', genre: 'Pop', cover: '🎻' },
  { id: 3, titre: 'Levitating', artiste: 'Dua Lipa', album: 'Future Nostalgia', genre: 'Pop', cover: '🪩' },
  { id: 4, titre: 'Sunflower', artiste: 'Post Malone & Swae Lee', album: 'Spider-Man: Into the Spider-Verse', genre: 'Hip-Hop', cover: '🌻' },
  { id: 5, titre: 'I Feel It Coming', artiste: 'The Weeknd & Daft Punk', album: 'Starboy', genre: 'Électro-Pop', cover: '🤖' },
  { id: 6, titre: 'Lady (Hear Me Tonight)', artiste: 'Modjo', album: 'Modjo (Remastered)', genre: 'House', cover: '🕺' },
  { id: 7, titre: 'Mr. Blue Sky', artiste: 'Electric Light Orchestra', album: 'Out of the Blue', genre: 'Rock', cover: '🎸' },
  { id: 8, titre: 'What Is Love', artiste: 'Haddaway', album: 'The Album', genre: 'Dance', cover: '💃' },
  { id: 9, titre: 'Am I Dreaming', artiste: 'Metro Boomin, A$AP Rocky & Roisee', album: 'Spider-Man: Across the Spider-Verse', genre: 'Hip-Hop', cover: '🕷️' },
  { id: 10, titre: 'All The Stars', artiste: 'Kendrick Lamar & SZA', album: 'Black Panther', genre: 'Hip-Hop', cover: '⭐' },
  { id: 11, titre: 'Symphony', artiste: 'Clean Bandit & Zara Larsson', album: 'What Is Love? (Deluxe)', genre: 'Pop', cover: '🎹' },
  { id: 12, titre: 'Love Me Again', artiste: 'John Newman', album: 'Tribute', genre: 'Soul', cover: '🎤' },
  { id: 13, titre: 'Glorious', artiste: 'Macklemore & Skylar Grey', album: 'Gemini', genre: 'Soul', cover: '🌟' },
  { id: 14, titre: 'Ma Meilleure Ennemie', artiste: 'Stromae & Pomme', album: 'Arcane', genre: 'Soul', cover: '💙' },
  { id: 15, titre: 'Break Free', artiste: 'Teminite', album: 'Unstoppable EP', genre: 'Electronic', cover: '✌️' },
  { id: 16, titre: 'Come Alive', artiste: 'San-Z Studio', album: 'Zenless Zone Zero', genre: 'Rock', cover: '❄️' },
])

let prochainId = articles.length + 1

export function useArticles() {
  function ajouterArticle(article) {
    articles.push({ id: prochainId++, ...article })
  }

  function supprimerArticle(id) {
    const index = articles.findIndex((a) => a.id === id)
    if (index !== -1) articles.splice(index, 1)
  }

  function getArticleById(id) {
    return articles.find((a) => a.id === Number(id))
  }

  return { articles, ajouterArticle, supprimerArticle, getArticleById }
}
