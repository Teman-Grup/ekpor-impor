import { useEffect, useRef } from 'react'

export default function useParallax(speed = 0.12, axis = 'y') {
  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let frame = 0

    const update = () => {
      frame = 0
      const rect = element.getBoundingClientRect()
      const viewport = window.innerHeight || 1
      const distance = rect.top + rect.height / 2 - viewport / 2
      const shift = (-distance * speed).toFixed(2)

      element.style.setProperty(axis === 'x' ? '--parallax-x' : '--parallax-y', `${shift}px`)
    }

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      if (frame) cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [speed, axis])

  return ref
}
