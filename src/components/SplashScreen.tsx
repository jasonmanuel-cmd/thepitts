import { motion } from 'framer-motion'
import { useSplash } from '../hooks/useSplash'

export default function SplashScreen() {
  const { visible, sliding } = useSplash()

  if (!visible) return null

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#0a0a0c] overflow-hidden"
      animate={sliding ? { y: '-100%' } : { y: 0 }}
      transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
    >
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, #dc2626 0px, #dc2626 2px, transparent 2px, transparent 8px)',
        }}
      />
      <div className="relative z-10 flex flex-col items-center gap-8">
        <img
          src="/pitts-artwork.jpg"
          alt="The Pitts"
          loading="lazy"
          className="w-48 h-48 md:w-64 md:h-64 rounded-2xl shadow-2xl ring-2 ring-white/10"
        />
        <motion.div
          className="text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tight select-none"
          animate={{
            textShadow: [
              '0 0 40px rgba(220,38,38,0.6), 0 0 80px rgba(220,38,38,0.3), 0 0 120px rgba(220,38,38,0.15)',
              '0 0 60px rgba(220,38,38,0.8), 0 0 120px rgba(220,38,38,0.4), 0 0 160px rgba(220,38,38,0.2)',
              '0 0 30px rgba(220,38,38,0.5), 0 0 70px rgba(220,38,38,0.3), 0 0 100px rgba(220,38,38,0.1)',
              '0 0 40px rgba(220,38,38,0.6), 0 0 80px rgba(220,38,38,0.3), 0 0 120px rgba(220,38,38,0.15)',
            ],
          }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span className="text-brand">THE PITTS</span>
        </motion.div>
      </div>
    </motion.div>
  )
}
