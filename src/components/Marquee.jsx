function Marquee({ items = [], duration = 36, reverse = false, className = '', itemClassName = '' }) {
  const doubled = [...items, ...items]

  return (
    <div className={`marquee ${reverse ? 'marquee-reverse' : ''} ${className}`}>
      <div className="marquee-track" style={{ '--marquee-duration': `${duration}s` }}>
        {doubled.map((item, index) => (
          <span key={`${item}-${index}`} className={`inline-flex items-center ${itemClassName}`}>
            <span className="whitespace-nowrap">{item}</span>
            <span className="mx-6 sm:mx-9 inline-block h-1.5 w-1.5 rounded-full bg-current opacity-40" aria-hidden="true" />
          </span>
        ))}
      </div>
    </div>
  )
}

export default Marquee
