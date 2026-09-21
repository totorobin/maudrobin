import { createRouter, createWebHistory } from 'vue-router'
import PageView from '../views/PageView.vue'
import LegalView from '../views/LegalView.vue'

const routes = [
  { path: '/', component: PageView, meta: { slug: 'presentation' } },
  { path: '/particuliers', component: PageView, meta: { slug: 'particuliers' } },
  { path: '/entreprises', component: PageView, meta: { slug: 'entreprises' } },
  { path: '/avec-les-chevaux', component: PageView, meta: { slug: 'avec-les-chevaux' } },
  { path: '/equicoaching-en-bretagne', component: PageView, meta: { slug: 'equicoaching-en-bretagne' } },
  { path: '/contact', component: PageView, meta: { slug: 'contact' } },
  { path: '/avis', component: PageView, meta: { slug: 'avis' } },
  { path: '/a-propos', component: PageView, meta: { slug: 'a-propos' } },
  { path: '/mentions-legales', component: LegalView, meta: { slug: 'mentions-legales' } },
  { path: '/cgv', component: LegalView, meta: { slug: 'cgv' } },
  { path: '/politique-de-confidentialite', component: LegalView, meta: { slug: 'privacy-policy' } },
]

export default createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})
