import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { members } from '../data/members'

export default function MemberPage() {
  const { slug } = useParams<{ slug: string }>()
  const member = members.find((m) => m.profileSlug === slug)
  const [bio, setBio] = useState<string | null>(null)

  useEffect(() => {
    if (!member?.bioPath) return
    fetch(`/${member.bioPath}`)
      .then((res) => (res.ok ? res.text() : null))
      .then(setBio)
  }, [member])

  if (!member) {
    return (
      <motion.main
        id="main-content"
        className="min-h-screen flex items-center justify-center px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="text-center" role="alert">
          <h1 className="text-4xl font-extrabold text-text-primary mb-4">404</h1>
          <p className="text-text-secondary mb-8">Member not found.</p>
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

  return (
    <motion.main
      id="main-content"
      className="min-h-screen"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-text-muted hover:text-text-primary text-sm mb-8 min-h-touch transition-colors"
        >
          &larr; Back to Home
        </Link>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="glass-panel p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {member.photoPath && (
              <div className="w-48 h-48 md:w-64 md:h-64 shrink-0">
                <img
                  src={member.photoPath}
                  alt={`${member.name} photo`}
                  className="w-full h-full object-cover rounded-xl shadow-2xl ring-2 ring-white/10"
                />
              </div>
            )}
            <div className="text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-extrabold text-text-primary mb-2">
                {member.name}
              </h1>
              <p className="text-text-secondary text-lg">{member.role}</p>
              {member.hometown && (
                <p className="text-text-muted text-sm mt-1">{member.hometown}</p>
              )}
              {bio && (
                <div className="mt-4 text-text-primary leading-relaxed whitespace-pre-line">
                  {bio}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {member.videoPath && (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-20">
          <h2 className="text-2xl font-bold text-text-primary mb-6">
            {member.name} Video
          </h2>
          <div className="glass-panel overflow-hidden">
            <video
              controls
              className="w-full aspect-video"
              preload="metadata"
            >
              <source src={member.videoPath} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </section>
      )}
    </motion.main>
  )
}
