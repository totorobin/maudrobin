<template>
  <main class="page-content">
    <div v-if="loading" class="loading">Chargement…</div>
    <div v-else-if="error" class="error">{{ error }}</div>
    <WpContent v-else :html="html" />
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import WpContent from '../components/WpContent.vue'
import { fetchPageBySlug } from '../api/wordpress.js'
import { useSeo } from '../composables/useSeo.js'

const html = ref('')
const loading = ref(true)
const error = ref(null)

onMounted(async () => {
  try {
    const page = await fetchPageBySlug('equicoaching-en-bretagne')
    html.value = page?.content?.rendered ?? ''
    useSeo({
      title: page?.title?.rendered,
      description: page?.excerpt?.rendered,
      path: '/equicoaching-en-bretagne',
    })
  } catch (e) {
    error.value = 'Impossible de charger la page.'
  } finally {
    loading.value = false
  }
})
</script>

<style scoped>
.page-content {
  min-height: 100vh;
  padding: 20px 0;
}
</style>
