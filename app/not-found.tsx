import Link from 'next/link'
import { EpisodeHeader, EpisodeFooter } from './components/EpisodeChrome'

export default function NotFound() {
  return <><EpisodeHeader /><main className="shell section not-found" id="main"><p className="eyebrow">Page not found</p><h1>LET’S FIND YOUR<br />NEXT LISTEN.</h1><p>That page isn&apos;t here. Explore the featured episodes or head back to the homepage.</p><Link href="/episodes" className="button button-dark">Explore the episodes</Link></main><EpisodeFooter /></>
}
