import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ParticuliersView from '../views/ParticuliersView.vue'
import EntreprisesView from '../views/EntreprisesView.vue'
import AvecLesChevauxView from '../views/AvecLesChevauxView.vue'
import EquicoachingView from '../views/EquicoachingView.vue'
import ContactView from '../views/ContactView.vue'
import AvisView from '../views/AvisView.vue'
import AProposView from '../views/AProposView.vue'
import LegalView from '../views/LegalView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/particuliers', component: ParticuliersView },
  { path: '/entreprises', component: EntreprisesView },
  { path: '/avec-les-chevaux', component: AvecLesChevauxView },
  { path: '/equicoaching-en-bretagne', component: EquicoachingView },
  { path: '/contact', component: ContactView },
  { path: '/avis', component: AvisView },
  { path: '/a-propos', component: AProposView },
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
