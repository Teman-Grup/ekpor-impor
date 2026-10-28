import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import Reveal from './Reveal'

function OperationalSection({ data }) {
  const { t, language } = useLanguage()

  const sectionRef = useRef(null)
  const trackRef = useRef(null)
  const viewportRef = useRef(null)
  const progressRef = useRef(null)
  const activeIndexRef = useRef(0)

  const [activeStep, setActiveStep] = useState(0)
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    if (window.lucide) {
      window.lucide.createIcons()
    }
  }, [language, isDesktop, activeStep])

  const defaultSteps = [
    { num: '01', title: t.step1, desc: t.step1Desc, label: t.step1Label },
    { num: '02', title: t.step2, desc: t.step2Desc, label: t.step2Label },
    { num: '03', title: t.step3, desc: t.step3Desc, label: t.step3Label },
    { num: '04', title: t.step4, desc: t.step4Desc, label: t.step4Label },
    { num: '05', title: t.step5, desc: t.step5Desc, label: t.step5Label },
    { num: '06', title: t.step6, desc: t.step6Desc, label: t.step6Label },
    { num: '07', title: t.step7, desc: t.step7Desc, label: t.step7Label }
  ]

  const steps = (data?.steps && Array.isArray(data.steps) && data.steps.length > 0)
    ? data.steps.map((s, idx) => ({
        num: s.step || `0${idx + 1}`,
        title: s.title,
        desc: s.description || s.desc,
        label: s.label || `Langkah 0${idx + 1}`
      }))
    : defaultSteps

  const accents = [
    'bg-brand-crimson',
    'bg-brand-sienna',
    'bg-amber-600',
    'bg-brand-rust',
    'bg-amber-700',
    'bg-stone-700',
    'bg-emerald-700'
  ]

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1024px)')
    const onChange = () => setIsDesktop(mediaQuery.matches)
    onChange()
    mediaQuery.addEventListener('change', onChange)
    return () => mediaQuery.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    const section = sectionRef.current
    const track = trackRef.current
    const viewport = viewportRef.current

    if (!isDesktop || !section || !track || !viewport) {
      if (section) section.style.height = ''
      if (track) track.style.transform = ''
      return
    }

    let frame = 0

    const measure = () => {
      const maxShift = Math.max(0, track.scrollWidth - viewport.clientWidth)
      section.style.height = `${Math.round(window.innerHeight + maxShift + 180)}px`
    }

    const update = () => {
      frame = 0
      const maxShift = Math.max(0, track.scrollWidth - viewport.clientWidth)
      const rect = section.getBoundingClientRect()
      const distance = Math.max(1, section.offsetHeight - window.innerHeight + 64)
      const progress = Math.min(1, Math.max(0, (64 - rect.top) / distance))

      track.style.transform = `translate3d(${-(progress * maxShift).toFixed(1)}px, 0, 0)`

      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${progress})`
      }

      const nextIndex = Math.min(steps.length - 1, Math.round(progress * (steps.length - 1)))
      if (nextIndex !== activeIndexRef.current) {
        activeIndexRef.current = nextIndex
        setActiveStep(nextIndex)
      }
    }

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    const onResize = () => {
      measure()
      onScroll()
    }

    measure()
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onResize)

    return () => {
      if (frame) cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
      section.style.height = ''
      track.style.transform = ''
    }
  }, [isDesktop, steps.length])

  return (
    <section id="alur-operasional" ref={sectionRef} className="relative overflow-x-clip border-b border-stone-200 bg-[#f4f1ea]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_420px_at_85%_0%,rgba(180,59,24,0.08),transparent_65%)]" />

      {/* Desktop pinned horizontal rail */}
      <div className="relative hidden lg:sticky lg:top-16 lg:flex lg:h-[calc(100vh-4rem)] lg:flex-col lg:justify-center lg:overflow-hidden lg:py-8 xl:py-10">
        <div className="mx-auto w-full max-w-7xl px-8">
          <div className="flex items-end justify-between gap-8">
            <div className="max-w-2xl">
              <Reveal variant="fade">
                <span className="inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.26em] text-brand-sienna">
                  <span className="h-px w-8 bg-brand-sienna/60" />
                  {t.exportPipeline}
                </span>
              </Reveal>
              <Reveal as="h2" variant="mask" delay={80} className="mt-4 font-serif text-3xl font-bold leading-tight tracking-tight text-stone-900 xl:text-[2.8rem]">
                {language === 'id' && data?.title ? data.title : t.operationalTitle}
              </Reveal>
              <Reveal variant="up" delay={160}>
                <p className="mt-2 max-w-xl text-xs leading-relaxed text-stone-500 xl:text-sm">
                  {language === 'id' && data?.subtitle ? data.subtitle : t.operationalSubtitle}
                </p>
              </Reveal>
            </div>

            <div className="flex flex-col items-end gap-2 pb-1">
              <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-stone-400">{t.pipeline}</span>
              <div className="flex items-baseline gap-1 font-serif">
                <span className="text-4xl font-bold leading-none text-brand-crimson">
                  {String(activeStep + 1).padStart(2, '0')}
                </span>
                <span className="text-sm text-stone-400">/ {String(steps.length).padStart(2, '0')}</span>
              </div>
            </div>
          </div>
        </div>

        <div ref={viewportRef} className="mt-10 w-full overflow-hidden px-8">
          <div ref={trackRef} className="flex w-max gap-5 will-change-transform">
            {steps.map((step, index) => {
              const isActive = index === activeStep
              return (
                <article
                  key={`${step.title}-${index}`}
                  className={`group relative w-[350px] flex-shrink-0 overflow-hidden rounded-xl border p-6 transition-all duration-500 xl:w-[380px] ${
                    isActive
                      ? 'border-brand-sienna/50 bg-white shadow-[0_30px_70px_-40px_rgba(28,27,26,0.6)]'
                      : 'border-stone-200/80 bg-white/60'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <span
                      className={`flex h-10 w-10 items-center justify-center rounded-lg font-mono text-xs font-bold text-white ${accents[index % accents.length]} ${
                        isActive ? 'scale-105 shadow-lg' : 'opacity-70'
                      } transition-all duration-500`}
                    >
                      {step.num}
                    </span>
                    <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-stone-400">
                      {step.label}
                    </span>
                  </div>

                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-2 top-10 select-none font-serif text-[5rem] font-bold leading-none text-stone-900/[0.035]"
                  >
                    {step.num}
                  </span>

                  <h3 className="mt-6 font-serif text-xl font-bold leading-snug text-stone-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 min-h-[60px] text-xs leading-relaxed text-stone-500">
                    {step.desc}
                  </p>

                  <div className="mt-5 flex items-center justify-between border-t border-stone-200 pt-3">
                    <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-stone-400">
                      STEP {step.num}
                    </span>
                    <svg
                      className={`h-4 w-4 transition-all duration-500 ${
                        isActive ? 'translate-x-0 text-brand-sienna opacity-100' : '-translate-x-1 text-stone-300 opacity-0'
                      }`}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0-6-6m6 6-6 6" />
                    </svg>
                  </div>
                </article>
              )
            })}
          </div>
        </div>

        <div className="mx-auto mt-10 w-full max-w-7xl px-8">
          <div className="flex items-center gap-4">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-stone-400">01</span>
            <div className="relative h-[3px] flex-1 overflow-hidden rounded-full bg-stone-300/70">
              <div
                ref={progressRef}
                className="h-full w-full origin-left bg-gradient-to-r from-brand-sienna via-amber-500 to-brand-rust"
                style={{ transform: 'scaleX(0)' }}
              />
            </div>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-stone-400">
              {String(steps.length).padStart(2, '0')}
            </span>
          </div>
          <p className="mt-3 text-center text-[9px] uppercase tracking-[0.3em] text-stone-400/80">
            {t.scrollHint}
          </p>
        </div>
      </div>

      {/* Mobile / tablet vertical timeline */}
      <div className="relative px-4 py-20 sm:px-6 lg:hidden">
        <div className="mx-auto max-w-2xl">
          <Reveal variant="fade">
            <span className="inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.26em] text-brand-sienna">
              <span className="h-px w-8 bg-brand-sienna/60" />
              {t.exportPipeline}
            </span>
          </Reveal>
          <Reveal as="h2" variant="mask" delay={80} className="mt-4 font-serif text-3xl font-bold leading-tight tracking-tight text-stone-900">
            {language === 'id' && data?.title ? data.title : t.operationalTitle}
          </Reveal>
          <Reveal variant="up" delay={160}>
            <p className="mt-3 text-xs leading-relaxed text-stone-500 sm:text-sm">
              {language === 'id' && data?.subtitle ? data.subtitle : t.operationalSubtitle}
            </p>
          </Reveal>

          <div className="relative mt-10 space-y-6">
            <span
              aria-hidden="true"
              className="absolute bottom-4 left-[19px] top-4 w-px bg-gradient-to-b from-brand-crimson via-amber-400 to-emerald-700 opacity-40"
            />
            {steps.map((step, index) => (
              <Reveal key={`m-${step.title}-${index}`} variant="up" delay={index * 60} className="relative pl-12">
                <span
                  className={`absolute left-0 top-1 flex h-10 w-10 items-center justify-center rounded-full font-mono text-[11px] font-bold text-white shadow-md ${accents[index % accents.length]}`}
                >
                  {step.num}
                </span>
                <div className="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-serif text-base font-bold text-stone-900">{step.title}</h3>
                    <span className="font-mono text-[8.5px] uppercase tracking-[0.16em] text-stone-400">{step.label}</span>
                  </div>
                  <p className="mt-1.5 text-[11px] leading-relaxed text-stone-500">{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default OperationalSection
