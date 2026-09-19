<template>
  <main class="page-content">
    <div class="back-link">
      <RouterLink to="/">← Retour</RouterLink>
    </div>
    <div v-if="loading" class="loading">Chargement…</div>
    <div v-else-if="error" class="error">{{ error }}</div>
    <WpContent v-else :html="html" />
  </main>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import WpContent from '../components/WpContent.vue'
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
    const slug = route.meta.slug
    const page = await fetchPageBySlug(slug)
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
  max-width: 900px;
  margin: 0 auto;
  padding: 20px 20px;
  min-height: 100vh;
}

.back-link {
  margin-bottom: 20px;
}

.back-link a {
  color: #183a63;
  text-decoration: none;
  font-size: 14px;
}

.back-link a:hover {
  text-decoration: underline;
}
</style>
