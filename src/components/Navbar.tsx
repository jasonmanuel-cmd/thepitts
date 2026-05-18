import { Link } from 'react-router-dom'
import { ExternalLink } from 'lucide-react'

interface NavbarProps {
  active: 'epk' | 'album' | 'track'
}

export default function Navbar({ active }: NavbarProps) {
  return (
    <nav className="sticky top-0 z-40 backdrop-blur-xl bg-[#0a0a0c]/80 border-b border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <Link
          to="/"
          className="text-xl font-extrabold tracking-tight text-brand min-h-touch min-w-touch flex items-center"
        >
          The Pitts
        </Link>
        <div className="flex items-center gap-1 sm:gap-2">
          <Link
            to="/"
            className="px-3 py-2 rounded-lg text-sm font-medium transition-colors min-h-touch flex items-center hover:bg-white/5 focus-visible:bg-white/5 relative"
            aria-current={active === 'epk' ? 'page' : undefined}
          >
            EPK
            {active === 'epk' && (
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-brand rounded-full" />
            )}
          </Link>
          <Link
            to="/jamestown-the-pitts"
            className="px-3 py-2 rounded-lg text-sm font-medium transition-colors min-h-touch flex items-center hover:bg-white/5 focus-visible:bg-white/5 relative"
            aria-current={active === 'album' ? 'page' : undefined}
          >
            Album: Jamestown
            {active === 'album' && (
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-brand rounded-full" />
            )}
          </Link>
          <a
            href="https://poisonwellrecords.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2 rounded-lg text-sm font-medium transition-colors min-h-touch flex items-center gap-1.5 text-text-secondary hover:text-text-primary hover:bg-white/5 focus-visible:text-text-primary focus-visible:bg-white/5"
          >
            Poison Well Records
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </nav>
  )
}
