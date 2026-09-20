<template>
  <div ref="container" class="wp-content" v-html="html" @click.capture="handleClick" />
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

defineProps({ html: { type: String, default: '' } })

const container = ref(null)
const router = useRouter()

const WP_URL_MAP = {
  '/particuliers/': '/particuliers',
  '/particuliers': '/particuliers',
  '/entreprises/': '/entreprises',
  '/entreprises': '/entreprises',
  '/avec-les-chevaux/': '/avec-les-chevaux',
  '/avec-les-chevaux': '/avec-les-chevaux',
  '/mentions-legales/': '/mentions-legales',
  '/mentions-legales': '/mentions-legales',
  '/cgv/': '/cgv',
  '/cgv': '/cgv',
  '/politique-de-confidentialite/': '/politique-de-confidentialite',
  '/privacy-policy/': '/politique-de-confidentialite',
  '/privacy-policy': '/politique-de-confidentialite',
}

function handleClick(event) {
  const anchor = event.target.closest('a')
  if (!anchor) return

  const href = anchor.getAttribute('href') || ''

  // Liens internes WordPress (domaine maudrobin.fr ou relatifs)
  let path = null
  try {
    const url = new URL(href)
    if (url.hostname === 'maudrobin.fr' || url.hostname === 'wp.maudrobin.fr' || url.hostname === 'eqbqyvl.cluster131.hosting.ovh.net') {
      path = url.pathname
    }
  } catch {
    // href relatif
    if (href.startsWith('/') && !href.startsWith('//')) {
      path = href
    }
  }

  if (path === null) return

  // Normalise le path (enlève trailing slash)
  const normalized = path.replace(/\/$/, '') || '/'
  const route = WP_URL_MAP[normalized] ?? WP_URL_MAP[path]

  if (route) {
    event.preventDefault()
    router.push(route)
  }
}
</script>

<style>
.wp-content img {
  max-width: 100%;
  height: auto;
}
.wp-content a {
  cursor: pointer;
}
.wp-content .wp-block-post-excerpt {
  display: none;
}
</style>
