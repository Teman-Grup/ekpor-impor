import useScrollReveal from '../hooks/useScrollReveal'
import useCountUp from '../hooks/useCountUp'

function CountUp({ to, duration = 1600, prefix = '', suffix = '', className = '' }) {
  const [ref, visible] = useScrollReveal({ threshold: 0.5 })
  const value = useCountUp(to, visible, duration)

  return (
    <span ref={ref} className={className}>
      {prefix}
      {value}
      {suffix}
    </span>
  )
}

export default CountUp
