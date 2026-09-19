const BASE = '/wp-json/wp/v2'

export async function fetchPageBySlug(slug) {
  const res = await fetch(`${BASE}/pages?slug=${slug}`)
  if (!res.ok) throw new Error(`Erreur HTTP ${res.status}`)
  const data = await res.json()
  return data[0] ?? null
}
