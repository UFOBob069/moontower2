import Parser from 'rss-parser'
import { readFile, writeFile, rename } from 'node:fs/promises'
import { createHash } from 'node:crypto'

const feedUrl = 'https://anchor.fm/s/140e55d8/podcast/rss'
const destination = new URL('../data/archive.json', import.meta.url)
const previous = await readFile(destination, 'utf8').then(JSON.parse).catch(error => {
  if (error.code === 'ENOENT') return { episodes: [] }
  throw error
})
const existing = new Map(previous.episodes.map(episode => [episode.id, episode]))
const parser = new Parser({ timeout: 30000 })
const feed = await parser.parseURL(feedUrl)
if (!feed.items.length) throw new Error('The feed is empty; the saved archive was not changed.')
const slugify = value => value.normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
const duration = value => {
  const parts = String(value || '').split(':').map(Number)
  if (!parts.length || parts.some(part => !Number.isFinite(part) || part < 0)) throw new Error(`Invalid duration: ${value}`)
  const seconds = parts.reduce((total, part) => total * 60 + part, 0)
  return [Math.floor(seconds / 3600), Math.floor(seconds / 60) % 60, seconds % 60].map(part => String(part).padStart(2, '0')).join(':')
}
const https = (value, field) => {
  if (!value || !/^https?:$/.test(new URL(value).protocol)) throw new Error(`Invalid ${field}`)
  return value
}
const usedIds = new Set()
const usedSlugs = new Set()
const episodes = feed.items.map(item => {
  const title = item.title?.trim()
  const id = item.guid || item.link
  if (!id || !title || usedIds.has(id)) throw new Error('Missing title/ID or duplicate feed ID; archive not changed.')
  usedIds.add(id)
  const number = Number(title.match(/^Episode\s+(\d+)/i)?.[1]) || null
  // Feed IDs, not episode numbers, identify entries: two published titles use #123.
  const slug = existing.get(id)?.slug || `${slugify(title).slice(0, 110).replace(/-$/, '')}-${createHash('sha256').update(id).digest('hex').slice(0, 8)}`
  if (usedSlugs.has(slug)) throw new Error(`Duplicate slug: ${slug}`)
  usedSlugs.add(slug)
  const date = new Date(item.isoDate || item.pubDate).toISOString()
  const description = item.content || item.itunes?.summary || item.contentSnippet || ''
  if (!description.trim()) throw new Error(`Missing description: ${title}`)
  return { id, slug, number, title, description, date, duration: duration(item.itunes?.duration), url: https(item.link, 'episode URL'), audio: https(item.enclosure?.url, 'audio URL'), audioType: item.enclosure?.type || 'audio/mpeg', image: item.itunes?.image ? https(item.itunes.image, 'image URL') : '/images/moontower-logo.jpg' }
}).sort((a, b) => Date.parse(b.date) - Date.parse(a.date))

// Write only after the entire response validates, so a failed refresh leaves the last snapshot intact.
const temporary = new URL('../data/archive.json.tmp', import.meta.url)
await writeFile(temporary, JSON.stringify({ feedUrl, episodes }, null, 2) + '\n')
await rename(temporary, destination)
console.log(`Saved ${episodes.length} feed entries to data/archive.json. Rebuild the site to publish the refreshed archive.`)
