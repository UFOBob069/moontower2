import archive from '@/data/archive.json'
import featured from '@/data/episodes.json'
import latest from '@/data/latest-episode.json'
import { editorial, descriptionParagraphs } from './podcast-shared'
export * from './podcast-shared'

const curated = [latest, ...featured]
export const episodes = archive.episodes.map(episode => {
  const selected = curated.find(item => item.url === episode.url)
  const info = selected ? editorial[selected.number] : undefined
  const paragraphs = descriptionParagraphs(episode.description)
  const name = info?.name || episode.title.replace(/^Episode\s+\d+\s*[:.\-]?\s*/i, '')
  const slug = info?.slug || episode.slug
  return {
    ...episode,
    name,
    role: info?.role || '',
    topic: info?.topic || '',
    category: info?.category || 'From the archive',
    searchTitle: info?.searchTitle || episode.title,
    image: selected?.image || episode.image,
    coverArt: episode.image.includes('podcast_uploaded_nologo') && !selected || episode.number === 191,
    label: episode.number ? `Episode ${episode.number}` : 'Trailer',
    slug, paragraphs, path: `/episodes/${slug}`,
  }
})

export function episodeDescription(episode: typeof episodes[number]) {
  const text = episode.paragraphs[0] || episode.title
  return text.length > 157 ? `${text.slice(0, 154).replace(/\s+\S*$/, '')}…` : text
}
