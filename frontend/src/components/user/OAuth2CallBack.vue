<template>
  <div class="p-4 text-center text-gray-600">
    Connexion en cours...
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { onMounted } from 'vue'

const route = useRoute()
const router = useRouter()

onMounted(async () => {
  const token = route.query.token as string | undefined
  console.log('Token reçu du backend:', token)

  if (token) {
    localStorage.setItem('token', token)
    await router.push('/hello')
  } else {
    await router.push('/login')
  }
})
</script>
