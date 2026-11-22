import test from 'node:test'
import assert from 'node:assert/strict'
import { parseLatestEpisode } from '../lib/latest-feed.mjs'

const rss = items => `<?xml version="1.0"?><rss version="2.0" xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd"><channel><title>Test podcast</title>${items}</channel></rss>`
const item = (title, date, extra = '') => `<item><title>${title}</title><pubDate>${date}</pubDate><link>https://example.com/episode</link><enclosure url="https://example.com/audio.mp3" type="audio/mpeg"/><itunes:duration>1530</itunes:duration><description>A conversation.</description>${extra}</item>`

test('selects the newest published episode, independent of feed order; ignores future episodes and trailers', async () => {
  const xml = rss(item('Episode 1: First', '2026-01-01') + item('Episode 99: Future', '2027-01-01') + item('Episode 2: New guest', '2026-02-01') + item('Trailer', '2026-03-01', '<itunes:episodeType>trailer</itunes:episodeType>'))
  const latest = await parseLatestEpisode(xml, Date.parse('2026-11-21'))
  assert.equal(latest.number, 2)
  assert.equal(latest.title, 'Episode 2: New guest')
  assert.equal(latest.duration, '00:25:30')
})

test('rejects empty or malformed feeds so callers can retain the saved episode', async () => {
  await assert.rejects(parseLatestEpisode(rss('')))
  await assert.rejects(parseLatestEpisode('not XML'))
})

test('rejects unsafe links and invalid audio durations', async () => {
  await assert.rejects(parseLatestEpisode(rss(item('Episode 3: Guest', '2026-01-01').replace('https://example.com/episode', 'javascript:alert(1)'))))
  await assert.rejects(parseLatestEpisode(rss(item('Episode 3: Guest', '2026-01-01').replace('1530', 'invalid'))))
})
