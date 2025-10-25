import { useEffect } from 'react'

export function useParallax() {
  useEffect(() => {
    const handler = () => {
      document.documentElement.style.setProperty('--scrollY', window.scrollY)
    }
    window.addEventListener('scroll', handler)
    handler()
    return () => window.removeEventListener('scroll', handler)
  }, [])
}
