import { useEffect, useState } from 'react'

export function useSplash() {
  const [visible, setVisible] = useState(true)
  const [sliding, setSliding] = useState(false)

  useEffect(() => {
    const shown = sessionStorage.getItem('splashShown')
    if (shown) {
      setVisible(false)
      return
    }

    const timer = setTimeout(() => {
      setSliding(true)
      setTimeout(() => setVisible(false), 600)
    }, 1800)

    sessionStorage.setItem('splashShown', 'true')

    return () => clearTimeout(timer)
  }, [])

  return { visible, sliding }
}
