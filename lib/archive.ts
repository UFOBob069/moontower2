import { episodes } from './podcast'

export const pageSize = 12
const normalize = (value: string) => value.normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase()
const searchable = episodes.map(episode => ({ episode, text: normalize([episode.title, episode.name, episode.role, episode.number, ...episode.paragraphs].join(' ')) }))

export function archiveResults(params: Record<string, string | string[] | undefined>) {
  const query = (typeof params.q === 'string' ? params.q : '').trim().replace(/\s+/g, ' ').slice(0, 200)
  const terms = normalize(query).split(' ').filter(Boolean)
  const matches = terms.length ? searchable.filter(item => terms.every(term => item.text.includes(term))).map(item => item.episode) : episodes
  const totalPages = Math.max(1, Math.ceil(matches.length / pageSize))
  const requestedPage = typeof params.page === 'string' && /^\d+$/.test(params.page) ? Number(params.page) : 1
  const page = Math.min(totalPages, Math.max(1, requestedPage))
  return { query, page, totalPages, total: matches.length, shown: matches.slice((page - 1) * pageSize, page * pageSize) }
}

export function archiveHref(page = 1, query = '') {
  const params = new URLSearchParams()
  if (query) params.set('q', query)
  if (page > 1) params.set('page', String(page))
  return `/episodes${params.size ? `?${params}` : ''}`
}
