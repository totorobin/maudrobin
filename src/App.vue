<template>
  <AppHeader />
  <RouterView />
  <AppFooter />
</template>

<script setup>
import { onMounted } from 'vue'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'

onMounted(() => {
  // JSON-LD : données structurées pour Google
  const script = document.createElement('script')
  script.type = 'application/ld+json'
  script.textContent = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Maud Robin',
    url: 'https://maudrobin.fr',
    telephone: '+33650641887',
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'Bretagne',
      addressCountry: 'FR',
    },
    jobTitle: 'Thérapeute',
    description: 'Accompagnement individuel, expériences avec les chevaux et équicoaching en Bretagne.',
    sameAs: ['https://photos.maudrobin.fr'],
  })
  document.head.appendChild(script)
})
</script>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: 'Lato', sans-serif;
  color: #444444;
  background-color: #ffffff;
  padding-bottom: 52px;
}
</style>
