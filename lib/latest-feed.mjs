import Parser from 'rss-parser'

const parser = new Parser()
const webUrl = value => {
  const url = new URL(value)
  if (!['http:', 'https:'].includes(url.protocol)) throw new Error('Invalid feed link')
  return url.href
}

// Keep this parser independent of Next so feed failures can be tested offline.
export async function parseLatestEpisode(xml, now = Date.now()) {
  const feed = await parser.parseString(xml)
  const candidates = feed.items.filter(item => {
    const published = Date.parse(item.isoDate || item.pubDate || '')
    return item.title?.trim() && item.enclosure?.url && Number.isFinite(published) && published <= now && item.itunes?.episodeType !== 'trailer'
  }).sort((a, b) => Date.parse(b.isoDate || b.pubDate) - Date.parse(a.isoDate || a.pubDate))
  const item = candidates[0]
  if (!item) throw new Error('No published audio episode in feed')
  const parts = String(item.itunes?.duration || '').split(':').map(Number)
  const seconds = parts.reduce((total, part) => total * 60 + part, 0)
  if (!parts.length || parts.some(part => !Number.isFinite(part) || part < 0) || seconds <= 0) throw new Error('Invalid episode duration')
  return {
    title: item.title.trim(),
    number: Number(item.title.match(/^Episode\s+(\d+)/i)?.[1]) || null,
    date: new Date(item.isoDate || item.pubDate).toISOString(),
    duration: [Math.floor(seconds / 3600), Math.floor(seconds / 60) % 60, seconds % 60].map(part => String(part).padStart(2, '0')).join(':'),
    url: webUrl(item.link),
    audio: webUrl(item.enclosure.url),
    description: item.content || item.itunes?.summary || item.contentSnippet || '',
  }
}
