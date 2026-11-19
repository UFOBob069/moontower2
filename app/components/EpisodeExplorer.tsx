'use client'
import { useState } from 'react'
import Image from 'next/image'
import { Play } from 'lucide-react'
import episodes from '@/data/episodes.json'
import { editorial, episodeMinutes } from '@/lib/podcast-shared'

const categories = ['All conversations', 'Building businesses', 'Austin & culture', 'Bitcoin & investing']
export default function EpisodeExplorer() {
  const [category, setCategory] = useState(categories[0])
  const [expanded, setExpanded] = useState(false)
  const matching = episodes.filter(episode => category === categories[0] || editorial[episode.number].category === category)
  const shown = expanded ? matching : matching.slice(0, 3)
  return <>
    <div className="episode-filters" role="group" aria-label="Filter conversations by topic">{categories.map(item => <button key={item} type="button" aria-pressed={category === item} onClick={() => {setCategory(item); setExpanded(false)}}>{item}</button>)}</div>
    <p className="sr-only" role="status">Showing {shown.length} of {matching.length} selected conversations</p>
    <div className="episode-grid">{shown.map(episode => {
      const info = editorial[episode.number]
      return <article className="episode-card" key={episode.number}>
        <a href={'/episodes/' + info.slug} className="episode-image" aria-label={'Listen to ' + info.name + ', episode ' + episode.number}><Image src={episode.image} alt={info.name} fill sizes="(max-width: 480px) 100vw, (max-width: 760px) 50vw, 33vw" /><span className="episode-tag">EP. {episode.number}</span><span className="play-disc"><Play size={22} fill="currentColor" aria-hidden="true" /></span></a>
        <div className="episode-meta"><span>{info.category}</span><span>{episodeMinutes(episode.duration)} MIN</span></div>
        <h3><a href={'/episodes/' + info.slug}>{info.name}</a></h3><p className="guest-role">{info.role}</p><p className="episode-topic">{info.topic}</p><a className="episode-listen" href={'/episodes/' + info.slug}><Play size={13} fill="currentColor" aria-hidden="true" /> Listen to the conversation</a>
      </article>
    })}</div>
    {matching.length > 3 && <button className="button more-button" aria-expanded={expanded} onClick={() => setExpanded(!expanded)}>{expanded ? 'Show fewer conversations' : 'Meet more guests'}</button>}
  </>
}