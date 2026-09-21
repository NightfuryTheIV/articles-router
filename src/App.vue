<script setup>
  import { RouterLink, RouterView } from 'vue-router'
</script>

<template>

  <div id="superdiv">

    <nav>
      <RouterLink to="/">Home</RouterLink> | 
      <RouterLink to="/articles">List of songs</RouterLink>
    </nav>
    
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style>
  body {
    background-color: rgb(0, 35, 88);
  }
</style>