import type { MetadataRoute } from 'next'
import { episodes, siteUrl } from '@/lib/podcast'
import { pageSize, archiveHref } from '@/lib/archive'

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: siteUrl }, ...Array.from({ length: Math.ceil(episodes.length / pageSize) }, (_, i) => ({ url: `${siteUrl}${archiveHref(i + 1)}` })), ...episodes.map(episode => ({ url: `${siteUrl}${episode.path}` }))]
}
