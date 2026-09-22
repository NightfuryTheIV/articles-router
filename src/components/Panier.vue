<script setup>
defineProps({
  items: { type: Array, required: true }, // tableau de chansons (pas de doublons possibles)
})
const emit = defineEmits(['retirer'])
</script>

<template>
  <div class="panier">
    <p v-if="items.length === 0" class="vide">
      Aucune chanson dans vos favoris pour le moment.
    </p>

    <table v-else class="table-panier">
      <thead>
        <tr>
          <th>Chanson</th>
          <th>Artiste</th>
          <th>Album</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="chanson in items" :key="chanson.id">
          <td>{{ chanson.cover }} {{ chanson.titre }}</td>
          <td>{{ chanson.artiste }}</td>
          <td>{{ chanson.album }}</td>
          <td>
            <button class="btn btn-danger" @click="emit('retirer', chanson.id)">
              Retirer
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
