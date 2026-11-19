import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Headphones, Mic2, Play, Radio, Star } from 'lucide-react'
import EpisodeExplorer from './components/EpisodeExplorer'
import latest from '@/data/latest-episode.json'

const apple = 'https://podcasts.apple.com/us/podcast/moontower-business/id1507993317'
const spotify = 'https://open.spotify.com/show/1ffGDEnDolncAj4xA753TA'
const contact = 'mailto:hello@moontowerbusiness.com?cc=david.eagan%40gmail.com%2Cmarse.obell%40yahoo.com&subject=Moontower%20Business%20Guest%20Inquiry'

export const metadata: Metadata = { alternates: { canonical: '/' } }

export default function Home() {
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header"><div className="shell nav-inner">
      <a href="#" className="wordmark" aria-label="Moontower Business home"><Radio aria-hidden="true" /><span>MOONTOWER<small>BUSINESS PODCAST</small></span></a>
      <nav aria-label="Main navigation"><a href="#conversations">Conversations</a><Link href="/episodes">Episodes</Link><a href="#about">The people</a><a className="nav-cta" href="#be-a-guest">Be a guest</a></nav>
    </div></header>
    <main id="main">
      <section className="hero-section"><div className="shell hero-grid">
        <div className="hero-copy">
          <p className="eyebrow"><span className="short-rule" /> Austin roots. Big conversations.</p>
          <h1>BIG IDEAS.<br />REAL PEOPLE.<br /><span>ALL BUSINESS.</span></h1>
          <p className="hero-description">Behind every business is a story worth hearing. Meet the founders, leaders, and original thinkers building what comes next.</p>
          <div className="hero-actions"><a href="#conversations" className="button button-dark"><Play size={17} fill="currentColor" aria-hidden="true" /> Find your next listen</a><a href="#be-a-guest" className="text-link">Pull up a chair</a></div>
          <a href={apple} className="hero-rating"><span className="stars" aria-label="5 stars">★★★★★</span><strong>5.0</strong><span>on Apple Podcasts</span></a>
        </div>
        <figure className="hero-photo">
          <div className="photo-frame"><Image src="/images/moontower-tomorrow-summit.png" alt="Two members of the Moontower team seated together at TomorrowX Summit" fill sizes="(max-width: 760px) 100vw, 45vw" priority /></div>
          <div className="photo-stamp" aria-hidden="true"><Mic2 size={27} /><span>GOOD PEOPLE.<br />GREAT STORIES.</span></div>
          <figcaption><span>Out in the world. In the conversation.</span><span>TomorrowX Summit</span></figcaption>
        </figure>
      </div></section>
      <section className="proof-band" aria-label="About the show"><div className="shell proof-grid">
        <div><strong>190+</strong><span>episodes &amp; counting</span></div><div><strong>2020</strong><span>the conversations began</span></div><div><strong>AUSTIN, TX</strong><span>our home. the world, our curiosity.</span></div>
      </div></section>
      <section id="conversations" className="section shell">
        <div className="section-heading"><div><p className="eyebrow">The people. The ideas. The real stories.</p><h2>GOOD COMPANY.</h2></div><p>Founders, investors, and leaders with something to say. Get to know a few of the people who have pulled up a chair.</p></div>
        <EpisodeExplorer />
        <div className="archive-link"><p>There&apos;s a lot more where that came from.</p><Link className="text-link" href="/episodes">Explore the full episode archive</Link></div>
      </section>
      <section id="listen" className="listen-section"><div className="shell listen-grid">
        <div><p className="eyebrow">The latest conversation</p><h2>PRESS PLAY.<br />GET INTO IT.</h2><div className="platform-links"><a href={spotify}>Spotify</a><a href={apple}>Apple Podcasts</a><a href="https://www.youtube.com/@moontowerbusinesspodcast9156">YouTube</a><a href="https://anchor.fm/s/140e55d8/podcast/rss">RSS</a></div></div>
        <div className="latest-player"><div className="player-top"><Image src="/images/moontower-logo.jpg" alt="Moontower Business cover artwork" width={90} height={90} /><span className="eyebrow">EP. 191 &nbsp; / &nbsp; 25 MIN<br /><time dateTime="2026-09-15">September 15, 2026</time></span></div><h3>Joe Brayton</h3><p className="guest-role">Co-owner, Pickler Universe</p><p>Building a country club experience around pickleball, and the story behind Pickler Universe.</p><audio controls preload="none" aria-label="Listen to Episode 191 with Joe Brayton" src={latest.audio}>Your browser does not support audio playback.</audio><Link className="player-fallback" href="/episodes/191-joe-brayton-pickler-universe">Read the Joe Brayton episode notes</Link></div>
      </div></section>
      <section id="about" className="section shell about-section">
        <div className="section-heading"><div><p className="eyebrow">Independent voices. Shared curiosity.</p><h2>BUSINESS IS PERSONAL.<br />SO IS THIS PODCAST.</h2></div><p>Moontower Business is an Austin business podcast featuring conversations with entrepreneurs, executives, investors, and community leaders. Hosted by Joseph O&apos;Bell, sharing stories since 2020.</p></div>
        <div className="team-grid">
          <article className="team-member"><Image src="/images/joey.jpg" alt="Joseph O’Bell speaking at an event" width={140} height={140} /><div><p className="eyebrow">Host &amp; executive producer</p><h3>Joseph O&apos;Bell</h3><p>Attorney, entrepreneur, angel investor, and founder of Vineyard Sun. A member of Alamo Venture, Joey brings a business owner&apos;s curiosity to every conversation.</p><a href="https://www.linkedin.com/in/joseph-o-bell-2451621b/">Meet Joseph on LinkedIn</a></div></article>
          <article className="team-member"><Image src="/david.jpg" alt="David Eagan" width={140} height={140} /><div><p className="eyebrow">Co-founder &amp; producer</p><h3>David Eagan</h3><p>A commercial operations and strategy executive with experience across technology, e-commerce, and financial services.</p><a href="https://www.linkedin.com/in/davidroberteagan/">Meet David on LinkedIn</a></div></article>
          <article className="team-member"><Image src="/images/aaron.jpg" alt="Aaron Moises" width={140} height={140} /><div><p className="eyebrow">Editor &amp; producer</p><h3>Aaron Moises</h3><p>The ears behind the episodes. Aaron brings the audio production and editing that keep the conversation clear.</p><a href="https://www.linkedin.com/in/aaron-moises/">Meet Aaron on LinkedIn</a></div></article>
        </div>
        <figure className="groundbreaking-story">
          <Image src="/images/spacex-groundbreaking.jpg" alt="Joseph O’Bell at the SpaceX groundbreaking with Elon Musk" width={640} height={480} sizes="(max-width: 760px) 100vw, 50vw" />
          <figcaption><p className="eyebrow">Beyond the microphone</p><h3>ON THE GROUND.<br />IN THE CONVERSATION.</h3><p>Joseph O&apos;Bell at the SpaceX groundbreaking with Elon Musk.</p></figcaption>
        </figure>
      </section>
      <section id="be-a-guest" className="guest-section"><div className="shell guest-grid">
        <div><p className="eyebrow"><Mic2 size={18} aria-hidden="true" /> A seat at the table</p><h2>YOU&apos;VE GOT<br />A STORY.<br /><span>LET&apos;S HEAR IT.</span></h2></div>
        <div className="guest-invite"><p>Building something interesting? Challenging the way an industry works? We&apos;d love to hear what you&apos;re working on.</p><p className="invite-detail">Tell us who you are, what you&apos;re building, and the conversation you&apos;d like to have. Our team will be in touch if there&apos;s a fit.</p><a className="button button-dark" href={contact}><Mic2 size={18} aria-hidden="true" /> Let&apos;s talk about your story</a><div className="guest-notes"><span><Headphones size={19} aria-hidden="true" /> Listen first. Get a feel for the show.</span><span><Star size={19} aria-hidden="true" /> Founders, leaders, and curious minds welcome.</span></div></div>
      </div></section>
    </main>
    <footer className="site-footer"><div className="shell"><div className="footer-top"><a href="#" className="wordmark"><Radio aria-hidden="true" /><span>MOONTOWER<small>BUSINESS PODCAST</small></span></a><p>Austin roots. Conversations without limits.</p><div><a href="https://instagram.com/moontower2018/">Instagram</a><a href="https://twitter.com/2018Tower">X / Twitter</a><a href={contact}>Contact</a></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Moontower Business Podcast</span><span><a href="https://vineyardsun.com/">Vineyard Sun</a><a href="https://eaganventures.com/">Eagan Ventures</a><a href="https://vineyardsun.com/products/premium-icahn-happiness-is-positive-cashflow-decorative-pillow">Shop</a></span><a href={apple}>Apple Podcasts US · 5.0 stars · checked Nov 2026</a></div></div></footer>
  </>
}