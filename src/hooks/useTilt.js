import { useCallback, useRef } from 'react'

export default function useTilt(max = 8) {
  const ref = useRef(null)

  const onMouseMove = useCallback(
    (event) => {
      const element = ref.current
      if (!element) return
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

      const rect = element.getBoundingClientRect()
      const x = (event.clientX - rect.left) / rect.width - 0.5
      const y = (event.clientY - rect.top) / rect.height - 0.5

      element.classList.add('is-tilting')
      element.style.setProperty('--tilt-x', `${(-y * max).toFixed(2)}deg`)
      element.style.setProperty('--tilt-y', `${(x * max * 1.2).toFixed(2)}deg`)
    },
    [max]
  )

  const onMouseLeave = useCallback(() => {
    const element = ref.current
    if (!element) return
    element.classList.remove('is-tilting')
    element.style.setProperty('--tilt-x', '0deg')
    element.style.setProperty('--tilt-y', '0deg')
  }, [])

  return { ref, onMouseMove, onMouseLeave }
}
