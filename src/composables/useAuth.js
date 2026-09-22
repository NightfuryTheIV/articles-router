import { ref } from 'vue'

// Fausse authentification : aucun mot de passe n'est vérifié.
// Le but est juste de montrer comment bloquer une route avec Vue Router.
const isLoggedIn = ref(false)
const username = ref('')

export function useAuth() {
  function login(nom) {
    username.value = nom || 'admin'
    isLoggedIn.value = true
  }

  function logout() {
    isLoggedIn.value = false
    username.value = ''
  }

  return { isLoggedIn, username, login, logout }
}
