import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Camera, Video, Globe, Music2, Play, ChevronRight, ExternalLink } from 'lucide-react'
import { tracks, comparableArtists } from '../data/tracks'

export default function EpkPage() {
  return (
    <motion.main
      id="main-content"
      className="min-h-screen"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <img
          src="/hero.webp"
          alt=""
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0c]/70 via-[#0a0a0c]/50 to-[#0a0a0c]" />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <h1
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tight mb-4"
            style={{
              backgroundImage: 'linear-gradient(135deg, #dc2626, #ef4444, #dc2626)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            The Pitts
          </h1>
          <p className="text-lg sm:text-xl text-text-secondary mb-8 max-w-xl mx-auto">
            Raw rock from the underground. Loud. Unfiltered. Unstoppable.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#music"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand text-white font-semibold text-sm min-h-touch hover:bg-brand-hover transition-colors"
            >
              <Play className="w-4 h-4" />
              Listen to Jamestown
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/20 text-text-primary font-semibold text-sm min-h-touch hover:bg-white/5 transition-colors"
            >
              Book The Pitts
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted">
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <div className="w-5 h-8 rounded-full border border-white/20 flex justify-center pt-1.5">
              <div className="w-1 h-2 rounded-full bg-text-muted animate-bounce" />
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 -mt-20 relative z-20">
        <div className="glass-panel p-8 md:p-10">
          <p className="text-lg md:text-xl text-text-primary leading-relaxed">
            Tired of rock that plays it safe? The Pitts are nine tracks of raw, unfiltered rebellion
            blending punk fury with hard-rock hooks and lyrics that don't pull punches. This is music
            for the misfits, the overlooked, and the loud.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-20">
        <h2 className="text-2xl font-bold text-text-primary mb-2">Press</h2>
        <p className="text-text-muted text-sm mb-8">What people are saying</p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass-card p-6">
            <blockquote className="text-text-primary text-base leading-relaxed mb-4">
              &ldquo;A band that reminds you what rock and roll is supposed to sound like loud, honest,
              and dangerous.&rdquo;
            </blockquote>
            <div className="text-text-muted text-xs uppercase tracking-wider">Press Quote TBD</div>
          </div>
          <div className="glass-card p-6">
            <blockquote className="text-text-primary text-base leading-relaxed mb-4">
              &ldquo;Lyrics that cut deep and riffs that hit harder. The Pitts are the real thing.&rdquo;
            </blockquote>
            <div className="text-text-muted text-xs uppercase tracking-wider">Press Quote TBD</div>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        <h2 className="text-2xl font-bold text-text-primary mb-2">About</h2>
        <div className="glass-panel p-8 md:p-10">
          <div className="space-y-4 text-text-primary leading-relaxed">
            <p>
              The Pitts deliver a sound rooted in the raw tradition of punk and hard rock. Formed with
              a simple mission to write songs that matter and play them loud enough to feel in your chest.
            </p>
            <p>
              Their debut album <strong className="text-brand">Jamestown</strong> is a 9-track statement
              that pulls no punches. From the politically charged grit of <em>Cash Flow Money</em> to the
              desperate honesty of <em>Lost and Lonely</em>, every track is a window into a world that
              refuses to look away.
            </p>
            <p>
              Whether it is a packed club stage or a festival field, The Pitts bring the same relentless
              energy. This is rock and roll for people who need it.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        <h2 className="text-2xl font-bold text-text-primary mb-2">Band</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          <MemberCard initials="JM" role="Lead Vocals, Guitar" />
          <MemberCard initials="LG" role="Lead Guitar, Backing Vocals" />
          <MemberCard initials="B" role="Bass" />
          <MemberCard initials="D" role="Drums" />
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        <h2 className="text-2xl font-bold text-text-primary mb-2">For Fans Of</h2>
        <div className="flex flex-wrap gap-3 mt-6">
          {comparableArtists.map((artist) => (
            <span
              key={artist}
              className="px-4 py-2 rounded-full text-sm font-medium bg-white/[0.06] border border-white/[0.1] text-text-secondary"
            >
              {artist}
            </span>
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        <h2 className="text-2xl font-bold text-text-primary mb-2">Jamestown &mdash; Tracklist</h2>
        <p className="text-text-muted text-sm mb-8">Dive into the full album</p>
        <div className="glass-panel overflow-hidden">
          {tracks.map((track, i) => (
            <Link
              key={track.slug}
              to={track.path}
              className="flex items-center gap-4 px-6 py-4 hover:bg-white/[0.03] transition-colors border-b border-white/[0.06] last:border-0 min-h-touch"
            >
              <span className="text-text-muted text-sm font-mono w-6 text-right">{i + 1}</span>
              <span className="flex-1 text-text-primary font-medium">{track.title}</span>
              <span className="text-text-muted text-sm">{track.durationText}</span>
              <ChevronRight className="w-4 h-4 text-text-muted" />
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            to="/jamestown-the-pitts"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand text-white font-semibold text-sm min-h-touch hover:bg-brand-hover transition-colors"
          >
            View Full Album
            <ExternalLink className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <section id="music" className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        <h2 className="text-2xl font-bold text-text-primary mb-2">Stream Jamestown</h2>
        <p className="text-text-muted text-sm mb-8">Listen on your platform of choice</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <span className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/[0.06] border border-white/[0.1] text-text-muted text-sm font-semibold cursor-default opacity-60 min-h-touch flex-1">
            Listen on Spotify
          </span>
          <span className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/[0.06] border border-white/[0.1] text-text-muted text-sm font-semibold cursor-default opacity-60 min-h-touch flex-1">
            Listen on Apple Music
          </span>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        <h2 className="text-2xl font-bold text-text-primary mb-6">Live</h2>
        <div className="glass-panel aspect-video flex items-center justify-center">
          <div className="text-center">
            <Play className="w-12 h-12 text-text-muted mx-auto mb-4" />
            <p className="text-text-muted text-sm">Live video coming soon</p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        <h2 className="text-2xl font-bold text-text-primary mb-6">Shows</h2>
        <div className="glass-panel p-8 text-center">
          <p className="text-text-muted">
            Upcoming show dates and past performances listing coming soon.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        <h2 className="text-2xl font-bold text-text-primary mb-2">Press Kit</h2>
        <p className="text-text-muted text-sm mb-8">Download promo photos and artwork</p>
        <div className="grid sm:grid-cols-2 gap-6">
          <a
            href="/bandpic.webp"
            download
            className="glass-card overflow-hidden group min-h-touch"
          >
            <div className="aspect-video overflow-hidden">
              <img
                src="/bandpic.webp"
                alt="The Pitts press photo"
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-4 flex items-center justify-between">
              <span className="text-text-primary text-sm font-medium">Press Photo</span>
              <span className="px-3 py-1.5 rounded-lg border border-white/20 text-xs font-semibold text-text-primary min-h-touch inline-flex items-center hover:bg-white/5 transition-colors">
                Download
              </span>
            </div>
          </a>
          <a
            href="/pitts-artwork.jpg"
            download
            className="glass-card overflow-hidden group min-h-touch"
          >
            <div className="aspect-video overflow-hidden">
              <img
                src="/pitts-artwork.jpg"
                alt="The Pitts album artwork"
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-4 flex items-center justify-between">
              <span className="text-text-primary text-sm font-medium">Album Artwork</span>
              <span className="px-3 py-1.5 rounded-lg border border-white/20 text-xs font-semibold text-text-primary min-h-touch inline-flex items-center hover:bg-white/5 transition-colors">
                Download
              </span>
            </div>
          </a>
        </div>
      </section>

      <section id="contact" className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        <h2 className="text-2xl font-bold text-text-primary mb-6">Booking &amp; Contact</h2>
        <div className="glass-panel p-8 md:p-10 text-center">
          <h3 className="text-lg font-semibold text-text-primary mb-4">Get in Touch</h3>
          <a
            href="mailto:booking@thepittsband.com"
            className="text-brand text-lg font-medium hover:underline min-h-touch inline-flex items-center"
          >
            booking@thepittsband.com
          </a>
          <div className="flex items-center justify-center gap-3 mt-8">
            <span className="p-3 rounded-xl bg-white/[0.06] border border-white/[0.1] text-text-muted opacity-60 cursor-default min-h-touch min-w-touch flex items-center justify-center">
              <Camera className="w-5 h-5" />
            </span>
            <span className="p-3 rounded-xl bg-white/[0.06] border border-white/[0.1] text-text-muted opacity-60 cursor-default min-h-touch min-w-touch flex items-center justify-center">
              <Music2 className="w-5 h-5" />
            </span>
            <span className="p-3 rounded-xl bg-white/[0.06] border border-white/[0.1] text-text-muted opacity-60 cursor-default min-h-touch min-w-touch flex items-center justify-center">
              <Video className="w-5 h-5" />
            </span>
            <span className="p-3 rounded-xl bg-white/[0.06] border border-white/[0.1] text-text-muted opacity-60 cursor-default min-h-touch min-w-touch flex items-center justify-center">
              <Globe className="w-5 h-5" />
            </span>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        <h2 className="text-2xl font-bold text-text-primary mb-6">Stage Plot &amp; Tech</h2>
        <div className="glass-panel p-8 text-center">
          <span className="placeholder-badge">Coming soon</span>
          <p className="text-text-muted mt-3">
            Stage plot diagram and input list details to be added.
          </p>
        </div>
      </section>
    </motion.main>
  )
}

function MemberCard({ initials, role }: { initials: string; role: string }) {
  return (
    <div className="glass-card p-6 text-center">
      <span className="placeholder-badge">Awaiting details</span>
      <div className="w-16 h-16 rounded-full bg-surface-4 border border-white/[0.1] flex items-center justify-center mx-auto mb-4">
        <span className="text-text-secondary text-lg font-bold">{initials}</span>
      </div>
      <h3 className="text-text-primary font-semibold mb-1">Name TBD</h3>
      <p className="text-text-muted text-sm">{role}</p>
      <p className="text-text-muted text-xs mt-2">Hometown TBD</p>
    </div>
  )
}
