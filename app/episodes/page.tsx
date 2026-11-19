import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Search } from 'lucide-react'
import { EpisodeHeader, EpisodeFooter } from '@/app/components/EpisodeChrome'
import { episodes, displayDate, episodeMinutes } from '@/lib/podcast'
import { archiveResults, archiveHref, pageSize } from '@/lib/archive'

type Props = { searchParams: Promise<Record<string, string | string[] | undefined>> }
const description = 'Explore the full Moontower Business podcast archive. Search conversations with entrepreneurs, executives, investors, and community leaders, and listen to every episode.'

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const { query, page } = archiveResults(await searchParams)
  const title = `${query ? `Search: ${query}` : 'All Episodes'}${page > 1 ? ` · Page ${page}` : ''} | Moontower Business Podcast`
  return { title, description, alternates: { canonical: archiveHref(page, query) }, ...(query ? { robots: { index: false, follow: true } } : {}), openGraph: { title, description, url: archiveHref(page, query), type: 'website', images: ['/images/moontower-tomorrow-summit.png'] } }
}

export default async function EpisodesPage({ searchParams }: Props) {
  const { query, page, totalPages, total, shown } = archiveResults(await searchParams)
  const visiblePages = Array.from({ length: totalPages }, (_, i) => i + 1).filter(value => value === 1 || value === totalPages || Math.abs(value - page) <= 1)
  return <><EpisodeHeader /><main id="main">
    <section className="archive-hero"><div className="shell"><p className="eyebrow">The full archive · Since 2020</p><h1>REAL PEOPLE.<br />REMARKABLE STORIES.</h1><p>{episodes.length} episodes and stories from entrepreneurs, executives, investors, and community leaders. Austin roots. A world of ideas.</p>
      <form className="archive-search" action="/episodes" method="get" role="search">
        <label htmlFor="episode-search">Find your next conversation</label>
        <div className="archive-search-controls"><div className="archive-search-input"><Search aria-hidden="true" size={22} /><input id="episode-search" name="q" type="search" maxLength={200} defaultValue={query} key={query} placeholder="Search guests, companies, or topics" /></div><button className="button button-dark" type="submit">Search episodes</button></div>
        <p>Try a guest name, “Bitcoin”, or “Austin”.</p>
      </form>
    </div></section>
    <section className="shell archive-results" aria-labelledby="results-heading" id="results">
      <div className="archive-results-heading"><div><p className="eyebrow">{query ? 'Search results' : 'Every conversation'}</p><h2 id="results-heading">{query ? `Results for “${query}”` : 'FIND YOUR NEXT BIG IDEA.'}</h2><p>{total ? `Showing ${(page - 1) * pageSize + 1}–${Math.min(page * pageSize, total)} of ${total}${query ? ' matching episodes' : ' episodes'} · Newest first` : 'No matching episodes'}</p></div>{query && <Link className="text-link" href="/episodes">Clear search</Link>}</div>
      {total ? <div className="archive-list">{shown.map(episode => <article className="archive-row" key={episode.id}>
        <Link href={episode.path} className={`archive-thumbnail${episode.coverArt ? ' cover-art' : ''}`} aria-label={`Listen to ${episode.title}`}><Image src={episode.image} alt={episode.coverArt ? 'Moontower Business Podcast artwork' : episode.name} fill sizes="(max-width: 600px) 88px, 160px" /></Link>
        <div className="archive-row-copy"><div className="archive-row-meta"><span>{episode.label}</span><time dateTime={episode.date}>{displayDate(episode.date)}</time><span>{episodeMinutes(episode.duration)} min</span></div><h3><Link href={episode.path}>{episode.name}</Link></h3><p className="archive-excerpt">{episode.paragraphs[0]}</p><Link href={episode.path} className="episode-listen">Listen &amp; read the episode notes</Link></div>
      </article>)}</div> : <div className="archive-empty"><h3>No conversations found. Keep exploring.</h3><p>Try a shorter search, a different spelling, or a broader topic.</p><Link className="button button-dark" href="/episodes">Browse all episodes</Link></div>}
      {totalPages > 1 && <nav className="archive-pagination" aria-label="Episode archive pages">
        {page > 1 ? <Link href={archiveHref(page - 1, query) + '#results'}>Previous</Link> : <span aria-disabled="true">Previous</span>}
        <div className="page-numbers">{visiblePages.map((value, index) => <span key={value}>{index > 0 && value - visiblePages[index - 1] > 1 && <span className="page-gap" aria-hidden="true">…</span>}<Link href={archiveHref(value, query) + '#results'} aria-label={`Page ${value}`} aria-current={page === value ? 'page' : undefined}>{value}</Link></span>)}</div>
        {page < totalPages ? <Link href={archiveHref(page + 1, query) + '#results'}>Next</Link> : <span aria-disabled="true">Next</span>}
        <p className="pagination-position">Page {page} of {totalPages}</p>
      </nav>}
    </section>
  </main><EpisodeFooter /></>
}
