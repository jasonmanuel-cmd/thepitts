import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import SplashScreen from './components/SplashScreen'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import EpkPage from './pages/EpkPage'
import AlbumPage from './pages/AlbumPage'
import TrackPage from './pages/TrackPage'

export default function App() {
  const location = useLocation()

  const activeNav = (() => {
    if (location.pathname === '/') return 'epk' as const
    if (location.pathname === '/jamestown-the-pitts') return 'album' as const
    return 'track' as const
  })()

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:min-h-touch focus:px-4 focus:py-2 focus:bg-surface-2 focus:text-text-primary focus:ring-2 focus:ring-brand focus:rounded"
      >
        Skip to content
      </a>
      <SplashScreen />
      <Navbar active={activeNav} />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<EpkPage />} />
          <Route path="/jamestown-the-pitts" element={<AlbumPage />} />
          <Route path="/:slug" element={<TrackPage />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  )
}
