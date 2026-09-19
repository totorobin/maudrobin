const SITE_NAME = 'Maud Robin'
const BASE_URL = 'https://maudrobin.fr'

function setMeta(name, content, attr = 'name') {
  if (!content) return
  let el = document.querySelector(`meta[${attr}="${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setCanonical(path) {
  let el = document.querySelector('link[rel="canonical"]')
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', 'canonical')
    document.head.appendChild(el)
  }
  el.setAttribute('href', BASE_URL + path)
}

function stripHtml(html) {
  return html?.replace(/<[^>]*>/g, '').replace(/&[a-z]+;/g, ' ').replace(/\s+/g, ' ').trim() ?? ''
}

export function useSeo({ title, description, path, image } = {}) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME
  const desc = stripHtml(description)?.slice(0, 160) || `Maud Robin — Thérapeute, accompagnement individuel et expériences avec les chevaux en Bretagne.`
  const img = image || `${BASE_URL}/og-image.jpg`
  const url = BASE_URL + (path || '/')

  document.title = fullTitle
  setMeta('description', desc)

  // Open Graph
  setMeta('og:title', fullTitle, 'property')
  setMeta('og:description', desc, 'property')
  setMeta('og:url', url, 'property')
  setMeta('og:type', 'website', 'property')
  setMeta('og:site_name', SITE_NAME, 'property')
  setMeta('og:image', img, 'property')
  setMeta('og:locale', 'fr_FR', 'property')

  // Twitter Card
  setMeta('twitter:card', 'summary_large_image')
  setMeta('twitter:title', fullTitle)
  setMeta('twitter:description', desc)
  setMeta('twitter:image', img)

  setCanonical(path || '/')
}
