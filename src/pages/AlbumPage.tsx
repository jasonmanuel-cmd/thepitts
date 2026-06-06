import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ChevronRight, ExternalLink } from 'lucide-react'
import { tracks, streamingLinks } from '../data/tracks'

export default function AlbumPage() {
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
            <div className="w-48 h-48 md:w-64 md:h-64 shrink-0">
              <img
                src="/pitts-artwork.jpg"
                alt="Jamestown by The Pitts - Album Cover"
                loading="lazy"
                className="w-full h-full object-cover rounded-xl shadow-2xl ring-2 ring-white/10"
              />
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-extrabold text-text-primary mb-4">
                Jamestown by The Pitts
              </h1>
              <p className="text-text-secondary leading-relaxed max-w-lg">
                The complete album experience. Listen to the official tracks, explore the lyrics, and
                dive deep into the music.
              </p>
              <div className="flex flex-wrap gap-3 mt-6">
                {(streamingLinks['Jamestown'] ?? []).map((link) => (
                  <a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white/[0.06] border border-white/[0.1] text-text-secondary text-sm font-semibold min-h-touch hover:bg-white/[0.1] hover:text-text-primary hover:border-brand/30 transition-all"
                  >
                    {link.platform}
                    <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 pb-20">
        <h2 className="text-2xl font-bold text-text-primary mb-6">Tracklist</h2>
        <div className="glass-panel overflow-hidden">
          {tracks.map((track, i) => (
            <Link
              key={track.slug}
              to={track.path}
              className="flex items-center gap-4 px-6 py-4 hover:bg-white/[0.03] transition-colors border-b border-white/[0.06] last:border-0 min-h-touch"
            >
              <span className="text-text-muted text-sm font-mono w-6 text-right shrink-0">
                {i + 1}
              </span>
              <span className="flex-1 text-text-primary font-medium truncate">
                {track.title}
              </span>
              <span className="text-text-muted text-sm shrink-0">{track.durationText}</span>
              <ChevronRight className="w-4 h-4 text-text-muted shrink-0" />
            </Link>
          ))}
        </div>
      </section>
    </motion.main>
  )
}
