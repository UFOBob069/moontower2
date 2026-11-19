// Keep the original wording while making HTTP(S) links in feed descriptions usable.
export default function ShowNotes({ paragraphs }: { paragraphs: string[] }) {
  return <div className="show-notes">{paragraphs.map((paragraph, index) => <p key={index}>
    {paragraph.split(/((?:https?:\/\/|www\.)[^\s<>]+)/g).map((part, partIndex) => {
      if (!/^(https?:\/\/|www\.)/i.test(part)) return part
      const url = part.replace(/[.,;!?]+$/, '').replace(/\)$/, match => (part.match(/\(/g) || []).length < (part.match(/\)/g) || []).length ? '' : match)
      return <span key={partIndex}><a href={url.startsWith('www.') ? `https://${url}` : url}>{url}</a>{part.slice(url.length)}</span>
    })}
  </p>)}</div>
}
