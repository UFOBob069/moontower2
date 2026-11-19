export const siteUrl = 'https://www.moontowerbusiness.com'
export const appleUrl = 'https://podcasts.apple.com/us/podcast/moontower-business/id1507993317'
export const spotifyUrl = 'https://open.spotify.com/show/1ffGDEnDolncAj4xA753TA'
export const contactUrl = 'mailto:hello@moontowerbusiness.com?cc=david.eagan%40gmail.com%2Cmarse.obell%40yahoo.com&subject=Moontower%20Business%20Guest%20Inquiry'

export const editorial: Record<number, { name: string; role: string; topic: string; category: string; slug: string; searchTitle: string }> = {
  191: { name: 'Joe Brayton', role: 'Co-owner · Pickler Universe', topic: 'Building a country club experience around pickleball.', category: 'Building businesses', slug: '191-joe-brayton-pickler-universe', searchTitle: 'Joe Brayton on Building Pickler Universe' },
  190: { name: 'Ingrid Spencer', role: 'Executive Director · AIA Austin', topic: 'The people and ideas shaping Austin’s architecture.', category: 'Austin & culture', slug: '190-ingrid-spencer-aia-austin', searchTitle: 'Ingrid Spencer on AIA Austin and the Homes Tour' },
  189: { name: 'Jon Roberts', role: 'Managing Partner · TIP Strategies', topic: 'The cost of cool. Who wins when a city grows?', category: 'Austin & culture', slug: '189-jon-roberts-cost-of-cool', searchTitle: 'Jon Roberts on Austin’s Tech Growth and The Cost of Cool' },
  187: { name: 'Joel Kocher', role: 'CEO · HumanN', topic: 'From Dell executive to building a health company.', category: 'Building businesses', slug: '187-joel-kocher-humann', searchTitle: 'Joel Kocher on His Journey from Dell to HumanN' },
  182: { name: 'Matt Paulson', role: 'Founder & CEO · MarketBeat', topic: 'The entrepreneurial journey behind MarketBeat.', category: 'Building businesses', slug: '182-matt-paulson-marketbeat', searchTitle: 'Matt Paulson on His Entrepreneurial Journey and MarketBeat' },
  128: { name: 'Mike Jarmuz', role: 'General Partner · Lightning Ventures', topic: 'Inside the world of Bitcoin venture investing.', category: 'Bitcoin & investing', slug: '128-mike-jarmuz-lightning-ventures', searchTitle: 'Mike Jarmuz on Bitcoin Investing at Lightning Ventures' },
  41: { name: 'Steve Adler', role: 'Austin Mayor at time of recording', topic: 'A conversation with the mayor of Austin.', category: 'Austin & culture', slug: '41-steve-adler-austin-business', searchTitle: 'Steve Adler on Austin’s Economy and Business in 2020' },
}

// Feed markup is converted to text and rendered by React, never injected as HTML.
export function descriptionParagraphs(html: string): string[] {
  const entities: Record<string, string> = { amp: '&', apos: "'", quot: '"', nbsp: ' ', lt: '<', gt: '>' }
  return html
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '')
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, '')
    .replace(/<a\b[^>]*href=["'](https?:\/\/[^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi, (_, url: string, label: string) => {
      const text = label.replace(/<[^>]+>/g, '').trim()
      return text === url ? text : `${text} (${url})`
    })
    .replace(/<\/(?:p|div|li)>|<br\s*\/?\s*>/gi, '\n')
    .replace(/<[^>]+>/g, '')
    .replace(/&(#x[\da-f]+|#\d+|amp|apos|quot|nbsp|lt|gt);/gi, (match, entity: string) => {
      if (!entity.startsWith('#')) return entities[entity.toLowerCase()] ?? match
      const code = entity[1].toLowerCase() === 'x' ? parseInt(entity.slice(2), 16) : Number(entity.slice(1))
      return code > 0 && code <= 0x10ffff ? String.fromCodePoint(code) : match
    })
    .split('\n').map(line => line.replace(/\s+/g, ' ').trim()).filter(Boolean)
}

export function episodeMinutes(duration: string) {
  const [hours, minutes] = duration.split(':').map(Number)
  return hours * 60 + minutes
}

export function isoDuration(duration: string) {
  const [hours, minutes, seconds] = duration.split(':').map(Number)
  return `PT${hours ? `${hours}H` : ''}${minutes}M${seconds}S`
}

export function displayDate(date: string) {
  return new Intl.DateTimeFormat('en-US', { dateStyle: 'long', timeZone: 'UTC' }).format(new Date(date))
}
