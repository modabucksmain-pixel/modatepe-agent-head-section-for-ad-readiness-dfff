import { MetadataRoute } from 'next'

const baseUrl = 'https://modatepecafe.com'
const locales = ['tr', 'en', 'ar']

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: '', priority: 1, changeFrequency: 'weekly' as const },
    { path: '/konaklama', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/restoran', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/menu', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/galeri', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/iletisim', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/blog', priority: 0.6, changeFrequency: 'weekly' as const },
  ]

  const sitemapEntries: MetadataRoute.Sitemap = []

  for (const locale of locales) {
    for (const route of routes) {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${route.path}`,
        lastModified: new Date(),
        changeFrequency: route.changeFrequency,
        priority: route.priority,
      })
    }
  }

  return sitemapEntries
}