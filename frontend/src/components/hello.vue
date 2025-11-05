<template>
  <div class="flex flex-col items-center justify-center h-[80vh] text-center">
    <h1 class="text-3xl font-bold text-violet-700 mb-4">
      Bonjour {{ username }}
    </h1>
    <p class="text-gray-600 mb-8">
      Vous êtes connecté avec succès !
    </p>

    <div class="flex gap-4">
      <button
          @click="handleLogout"
          class="px-4 py-2 border border-violet-600 text-violet-700 rounded-lg hover:bg-violet-50 transition"
      >
        Déconnexion
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const username = ref<string>('Utilisateur')

onMounted(() => {
  const token = localStorage.getItem('token')
  if (!token) {
    router.push('/login')
  } else {
    username.value = 'Jean-Baptiste'
  }
})

function handleLogout() {
  localStorage.removeItem('token')
  router.push('/login')
}
</script>