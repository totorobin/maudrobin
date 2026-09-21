<template>
  <main class="page-content">
    <AppSpinner v-if="loading" />
    <div v-else-if="error" class="error">{{ error }}</div>
    <WpContent v-else :html="html" />
  </main>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import WpContent from '../components/WpContent.vue'
import AppSpinner from '../components/AppSpinner.vue'
import { fetchPageBySlug } from '../api/wordpress.js'
import { useSeo } from '../composables/useSeo.js'

const route = useRoute()
const html = ref('')
const loading = ref(true)
const error = ref(null)

async function loadPage() {
  loading.value = true
  error.value = null
  try {
    const page = await fetchPageBySlug(route.meta.slug)
    html.value = page?.content?.rendered ?? ''
    useSeo({
      title: page?.title?.rendered,
      description: page?.excerpt?.rendered,
      path: route.path,
    })
  } catch (e) {
    error.value = 'Impossible de charger la page.'
  } finally {
    loading.value = false
  }
}

onMounted(loadPage)
watch(() => route.path, loadPage)
</script>

<style scoped>
.page-content {
  min-height: 100vh;
  padding: 20px 0;
}
</style>
