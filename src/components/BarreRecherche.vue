<script setup>
// v-model "maison" : on reçoit modelValue, on émet update:modelValue.
// Ça permet au parent d'écrire <BarreRecherche v-model="recherche" />
defineProps({
  modelValue: { type: String, default: '' },
  placeholder: { type: String, default: 'Rechercher un article...' },
})
defineEmits(['update:modelValue'])
</script>

<template>
  <div class="barre-recherche">
    <input
      type="text"
      :value="modelValue"
      :placeholder="placeholder"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>
