import { unstable_cache } from 'next/cache'
import { parseLatestEpisode } from './latest-feed.mjs'
import { episodes, descriptionParagraphs, siteUrl } from './podcast'

const feedUrl = 'https://anchor.fm/s/140e55d8/podcast/rss'
const refresh = unstable_cache(async () => {
  const response = await fetch(feedUrl, { cache: 'no-store', signal: AbortSignal.timeout(8000) })
  if (!response.ok) throw new Error(`Podcast feed returned ${response.status}`)
  return parseLatestEpisode(await response.text())
}, ['moontower-latest-episode-v1'], { revalidate: 3600 })

export async function getLatestEpisode() {
  const saved = episodes.filter(episode => episode.number !== null).slice().sort((a, b) => Date.parse(b.date) - Date.parse(a.date))[0]
  let episode: Awaited<ReturnType<typeof parseLatestEpisode>> = saved
  try {
    const live = await refresh()
    // An incomplete or rolled-back feed must not replace a newer saved episode.
    if (Date.parse(live.date) >= Date.parse(saved.date)) episode = live
  } catch {
    console.warn('Podcast feed unavailable; keeping the saved latest episode.')
  }
  const known = episodes.find(item => item.url === episode.url)
  const summary = descriptionParagraphs(episode.description)[0] || episode.title
  return {
    title: episode.title,
    name: known?.name || episode.title.replace(/^Episode\s+\d+\s*[:.\-]?\s*/i, ''),
    role: known?.role || '',
    description: known?.topic || (summary.length > 260 ? `${summary.slice(0, 257).replace(/\s+\S*$/, '')}…` : summary),
    number: episode.number,
    date: episode.date,
    duration: episode.duration,
    audio: episode.audio,
    url: episode.url,
    notesUrl: known ? `${siteUrl}${known.path}` : episode.url,
  }
}
