import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { getTrackBySlug, tracks, lyricsMap } from '../data/tracks'

export default function TrackPage() {
  const { slug } = useParams<{ slug: string }>()
  const track = slug ? getTrackBySlug(slug) : undefined
  const [lyrics, setLyrics] = useState<string | null>(null)
  const [lyricsLoading, setLyricsLoading] = useState(true)

  useEffect(() => {
    if (!track) {
      setLyricsLoading(false)
      return
    }

    const path = lyricsMap[track.title]
    if (!path) {
      setLyrics(null)
      setLyricsLoading(false)
      return
    }

    setLyricsLoading(true)
    fetch(`/${path}`)
      .then((res) => {
        if (!res.ok) throw new Error('Not found')
        return res.text()
      })
      .then((text) => {
        setLyrics(text)
        setLyricsLoading(false)
      })
      .catch(() => {
        setLyrics(null)
        setLyricsLoading(false)
      })
  }, [track])

  if (!track) {
    return (
      <motion.main
        id="main-content"
        className="min-h-screen flex items-center justify-center px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-text-primary mb-4">404</h1>
          <p className="text-text-secondary mb-8">Track not found.</p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand text-white font-semibold text-sm min-h-touch hover:bg-brand-hover transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </motion.main>
    )
  }

  const otherTracks = tracks.filter((t) => t.slug !== track.slug)

  return (
    <motion.main
      id="main-content"
      className="min-h-screen"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
        <div className="glass-panel p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="w-40 h-40 md:w-56 md:h-56 shrink-0">
              <img
                src="/pitts-artwork.jpg"
                alt={`${track.title} by The Pitts - Jamestown Album Cover`}
                loading="lazy"
                className="w-full h-full object-cover rounded-xl shadow-2xl ring-2 ring-white/10"
              />
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-extrabold text-text-primary mb-4">
                {track.title} by The Pitts
              </h1>
              <p className="text-text-secondary leading-relaxed max-w-lg">
                {track.title} by The Pitts is a track from the album Jamestown. Listen to the official
                track, read the lyrics, and explore more songs from the album.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="grid md:grid-cols-3 gap-4">
          <div className="glass-card p-6 text-center aspect-video flex flex-col items-center justify-center">
            <p className="text-text-muted text-xs uppercase tracking-wider mb-2">Spotify</p>
            <p className="text-text-muted text-sm">Player for {track.title}</p>
          </div>
          <div className="glass-card p-6 text-center aspect-video flex flex-col items-center justify-center">
            <p className="text-text-muted text-xs uppercase tracking-wider mb-2">Apple Music</p>
            <p className="text-text-muted text-sm">Player for {track.title}</p>
          </div>
          <div className="glass-card p-6 text-center aspect-video flex flex-col items-center justify-center">
            <p className="text-text-muted text-xs uppercase tracking-wider mb-2">YouTube</p>
            <p className="text-text-muted text-sm">Video for {track.title}</p>
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 pb-20">
        <div className="glass-panel p-8 md:p-10">
          <h2 className="text-2xl font-bold text-text-primary mb-6">{track.title} Lyrics</h2>
          {lyricsLoading ? (
            <div className="space-y-2">
              <div className="h-4 bg-white/[0.06] rounded animate-pulse w-3/4" />
              <div className="h-4 bg-white/[0.06] rounded animate-pulse w-1/2" />
              <div className="h-4 bg-white/[0.06] rounded animate-pulse w-2/3" />
              <div className="h-4 bg-white/[0.06] rounded animate-pulse w-3/4" />
              <div className="h-4 bg-white/[0.06] rounded animate-pulse w-1/3" />
            </div>
          ) : lyrics ? (
            <div className="text-text-primary leading-relaxed whitespace-pre-line font-light text-base md:text-lg">
              {parseLyrics(lyrics)}
            </div>
          ) : (
            <div className="text-center py-8">
              <span className="placeholder-badge">Coming soon</span>
              <p className="text-text-muted mt-3">
                Lyrics for &ldquo;{track.title}&rdquo; are not yet available. Check back for the full
                text.
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 pb-20">
        <h2 className="text-2xl font-bold text-text-primary mb-6">More from Jamestown</h2>
        <div className="flex flex-wrap gap-3">
          {otherTracks.map((t) => (
            <Link
              key={t.slug}
              to={t.path}
              className="px-4 py-2 rounded-full text-sm font-medium bg-white/[0.06] border border-white/[0.1] text-text-secondary hover:bg-white/[0.1] hover:text-text-primary transition-colors min-h-touch inline-flex items-center"
            >
              {t.title}
            </Link>
          ))}
        </div>
        <div className="mt-8">
          <Link
            to="/jamestown-the-pitts"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand text-white font-semibold text-sm min-h-touch hover:bg-brand-hover transition-colors"
          >
            Back to Full Album
          </Link>
        </div>
      </section>
    </motion.main>
  )
}

function parseLyrics(text: string): React.ReactNode[] {
  return text.split('\n').map((line, i) => {
    const trimmed = line.trim()

    if (trimmed === '') {
      return <br key={i} />
    }

    if (trimmed.startsWith('(') && trimmed.endsWith(')')) {
      return (
        <em key={i} className="text-text-secondary block">
          {trimmed}
        </em>
      )
    }

    return (
      <span key={i} className="block">
        {line}
      </span>
    )
  })
}
