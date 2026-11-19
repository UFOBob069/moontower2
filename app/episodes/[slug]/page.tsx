import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { EpisodeHeader, EpisodeFooter } from '@/app/components/EpisodeChrome'
import ShowNotes from '@/app/components/ShowNotes'
import { episodes, siteUrl, displayDate, episodeDescription, episodeMinutes, isoDuration, appleUrl } from '@/lib/podcast'

type Props = { params: Promise<{ slug: string }> }
export const dynamicParams = false

export function generateStaticParams() {
  return episodes.map(episode => ({ slug: episode.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const episode = episodes.find(item => item.slug === slug)
  if (!episode) notFound()
  const title = `${episode.searchTitle} | Moontower Business Podcast`
  const description = episodeDescription(episode)
  return {
    title, description,
    alternates: { canonical: episode.path },
    openGraph: { title, description, url: episode.path, type: 'article', publishedTime: new Date(episode.date).toISOString(), images: [{ url: episode.image, alt: episode.name }] },
    twitter: { card: 'summary_large_image', title, description, images: [episode.image] },
  }
}

export default async function EpisodePage({ params }: Props) {
  const { slug } = await params
  const episode = episodes.find(item => item.slug === slug)
  if (!episode) notFound()
  const related = episodes.filter(item => item.id !== episode.id).sort((a, b) => Number(b.category === episode.category) - Number(a.category === episode.category)).slice(0, 3)
  const schema = {
    '@context': 'https://schema.org', '@type': 'PodcastEpisode',
    '@id': `${siteUrl}${episode.path}#episode`, url: `${siteUrl}${episode.path}`,
    name: episode.searchTitle, description: episode.paragraphs.join('\n\n'),
    episodeNumber: episode.number ?? undefined, datePublished: new Date(episode.date).toISOString(),
    duration: isoDuration(episode.duration), image: new URL(episode.image, siteUrl).href, inLanguage: 'en',
    partOfSeries: { '@type': 'PodcastSeries', name: 'Moontower Business Podcast', url: siteUrl },
    audio: { '@type': 'AudioObject', contentUrl: episode.audio, encodingFormat: episode.audioType, duration: isoDuration(episode.duration) },
  }
  return <>
    <EpisodeHeader />
    <main id="main">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />
      <section className={`episode-hero${episode.role ? '' : ' archive-episode-hero'}`}><div className="shell">
        <nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><Link href="/episodes">Episodes</Link><span aria-hidden="true">/</span><span aria-current="page">{episode.label}</span></nav>
        <div className="episode-hero-grid"><div>
          <p className="eyebrow">{episode.label} · {episode.category}</p>
          <h1>{episode.name.toUpperCase()}</h1>{episode.role && <p className="episode-hero-role">{episode.role}</p>}
          {episode.topic && <p className="episode-hero-topic">{episode.topic}</p>}
          <div className="episode-date"><time dateTime={new Date(episode.date).toISOString()}>{displayDate(episode.date)}</time><span>{episodeMinutes(episode.duration)} minute conversation</span></div>
          <a className="button button-dark" href="#episode-audio">Listen to the episode</a>
        </div><div className={`episode-portrait${episode.coverArt ? ' cover-art' : ''}`}><Image src={episode.image} alt={episode.coverArt ? 'Moontower Business Podcast artwork' : episode.name} fill sizes="(max-width: 760px) 100vw, 40vw" priority /></div></div>
      </div></section>
      <section className="shell section episode-content">
        <article><p className="eyebrow">Inside the conversation</p><h2>{episode.searchTitle}</h2><ShowNotes paragraphs={episode.paragraphs} /></article>
        <aside className="episode-sidebar"><div className="episode-audio" id="episode-audio"><p className="eyebrow">Moontower Business Podcast</p><h2>TAKE A LISTEN.</h2><p>{episode.label}  · {episode.name}</p><audio controls preload="none" src={episode.audio} aria-label={`Play ${episode.title}`}>Your browser does not support audio playback.</audio><a className="player-fallback" href={episode.url}>Listen to this episode on Spotify</a><a className="player-fallback" href={appleUrl}>Follow the show on Apple Podcasts</a></div>
        <div className="episode-guest-invite"><h3>Your story could be next.</h3><p>Building something interesting? Tell us about it.</p><Link href="/#be-a-guest" className="text-link">Be a guest on Moontower</Link></div></aside>
      </section>
      <section className="shell related-section"><div className="section-heading"><div><p className="eyebrow">Keep the conversation going</p><h2>MORE GOOD COMPANY.</h2></div><Link href="/episodes" className="text-link">Explore the full archive</Link></div><div className="related-grid">{related.map(item => <Link className="related-episode" href={item.path} key={item.id}><span className="eyebrow">{item.label} · {item.category}</span><h3>{item.name}</h3><p>{item.topic || episodeDescription(item)}</p><span className="text-link">Explore this episode</span></Link>)}</div></section>
    </main><EpisodeFooter />
  </>
}
