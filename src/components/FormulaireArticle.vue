<script setup>
import { reactive, ref } from 'vue'

const emit = defineEmits(['ajouter'])

const form = reactive({
  titre: '',
  artiste: '',
  album: '',
  genre: '',
  cover: '🎵',
})

const messageConfirmation = ref(false)

function soumettre() {
  if (!form.titre || !form.artiste || !form.genre) return

  emit('ajouter', { ...form })

  // Réinitialise le formulaire
  form.titre = ''
  form.artiste = ''
  form.album = ''
  form.genre = ''
  form.cover = '🎵'

  // Bonus : message de confirmation temporaire
  messageConfirmation.value = true
  setTimeout(() => (messageConfirmation.value = false), 2500)
}
</script>

<template>
  <form class="formulaire-article" @submit.prevent="soumettre">
    <label>
      Titre de la chanson
      <input v-model="form.titre" type="text" required />
    </label>

    <label>
      Artiste
      <input v-model="form.artiste" type="text" required />
    </label>

    <label>
      Album
      <input v-model="form.album" type="text" />
    </label>

    <label>
      Genre
      <input v-model="form.genre" type="text" placeholder="Ex : Pop, Rock, Hip-Hop..." required />
    </label>

    <label>
      Emoji / pochette
      <input v-model="form.cover" type="text" maxlength="4" />
    </label>

    <button type="submit" class="btn btn-primaire">Ajouter la chanson</button>

    <p v-if="messageConfirmation" class="confirmation">✅ Chanson ajoutée avec succès !</p>
  </form>
</template>
