import Link from 'next/link'
import { Radio } from 'lucide-react'
import { appleUrl, contactUrl, spotifyUrl } from '@/lib/podcast-shared'

export function EpisodeHeader() {
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header"><div className="shell nav-inner">
      <Link href="/" className="wordmark" aria-label="Moontower Business home"><Radio aria-hidden="true" /><span>MOONTOWER<small>BUSINESS PODCAST</small></span></Link>
      <nav aria-label="Main navigation"><Link href="/episodes">Episodes</Link><Link href="/#about">The people</Link><Link href="/#be-a-guest" className="nav-cta">Be a guest</Link></nav>
    </div></header>
  </>
}

export function EpisodeFooter() {
  return <footer className="site-footer"><div className="shell">
    <div className="footer-top"><Link href="/" className="wordmark"><Radio aria-hidden="true" /><span>MOONTOWER<small>BUSINESS PODCAST</small></span></Link><p>Austin roots. Conversations since 2020.</p><div><Link href="/episodes">Full episode archive</Link><a href={contactUrl}>Contact</a></div></div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} Moontower Business Podcast</span><span><a href={spotifyUrl}>Spotify</a><a href={appleUrl}>Apple Podcasts</a><Link href="/#be-a-guest">Be a guest</Link></span></div>
  </div></footer>
}
