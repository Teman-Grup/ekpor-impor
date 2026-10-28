import useScrollReveal from '../hooks/useScrollReveal'

function Reveal({
  as: Tag = 'div',
  variant = 'up',
  delay = 0,
  className = '',
  style,
  children,
  ...rest
}) {
  const [ref, visible] = useScrollReveal()
  const isMask = variant === 'mask'

  return (
    <Tag
      ref={ref}
      className={`${isMask ? 'reveal-mask' : `reveal reveal-${variant}`} ${visible ? 'is-visible' : ''} ${className}`.trim()}
      style={{ '--reveal-delay': `${delay}ms`, ...style }}
      {...rest}
    >
      {isMask ? <span className="reveal-mask-inner">{children}</span> : children}
    </Tag>
  )
}

export default Reveal
