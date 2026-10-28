import { useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'
import useParallax from '../hooks/useParallax'
import useScrollReveal from '../hooks/useScrollReveal'
import Reveal from './Reveal'

function AboutSection({ data }) {
  const { t, language } = useLanguage()
  const yearRef = useParallax(0.06)
  const [timelineRef, timelineVisible] = useScrollReveal({ threshold: 0.25 })

  useEffect(() => {
    if (window.lucide) {
      window.lucide.createIcons()
    }
  }, [language])

  const paragraphs = (data?.paragraphs && Array.isArray(data.paragraphs) && data.paragraphs.length > 0)
    ? data.paragraphs
    : [t.aboutPara1, t.aboutPara2, t.aboutPara3, t.aboutPara4, t.aboutPara5]

  const milestones = [
    { year: '2016', title: t.milestone1Title, desc: t.milestone1Desc, tone: 'crimson' },
    { year: '2018 — 2020', title: t.milestone2Title, desc: t.milestone2Desc, tone: 'amber' },
    {
      year: `2021 — ${language === 'id' ? 'SEKARANG' : 'PRESENT'}`,
      title: t.milestone3Title,
      desc: t.milestone3Desc,
      tone: 'emerald'
    }
  ]

  const toneStyles = {
    crimson: { dot: 'bg-brand-crimson', chip: 'bg-brand-crimson/10 text-brand-crimson' },
    amber: { dot: 'bg-amber-500', chip: 'bg-amber-100 text-amber-800' },
    emerald: { dot: 'bg-emerald-700', chip: 'bg-emerald-100 text-emerald-800' }
  }

  return (
    <section id="tentang-kami" className="relative overflow-hidden border-b border-stone-200 bg-brand-cream py-20 md:py-28">
      <span
        ref={yearRef}
        aria-hidden="true"
        className="parallax pointer-events-none absolute -right-4 top-8 select-none font-serif text-[14rem] font-bold leading-none text-stone-900/[0.045] sm:text-[20rem]"
      >
        2016
      </span>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">
          {/* Narrative */}
          <div className="lg:col-span-7">
            <Reveal variant="fade">
              <span className="inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.26em] text-brand-sienna">
                <span className="h-px w-8 bg-brand-sienna/60" />
                <i className="h-4 w-4" data-lucide="building-2"></i>
                {t.corporateProfile}
              </span>
            </Reveal>

            <Reveal as="h2" variant="mask" delay={80} className="mt-5 max-w-2xl font-serif text-3xl font-bold leading-[1.1] tracking-tight text-stone-900 sm:text-4xl lg:text-[2.9rem]">
              {data?.title || t.aboutTitle}
            </Reveal>

            <div className="mt-7 space-y-5 text-sm leading-relaxed text-stone-600 sm:text-base">
              {paragraphs.map((paragraph, index) => (
                <Reveal key={index} variant="up" delay={120 + index * 70}>
                  <p>
                    {index === 0 ? (
                      <>
                        <strong className="font-semibold text-stone-900">PT. Original Jernang Asia</strong>
                        {paragraph.replace('PT. Original Jernang Asia', '')}
                      </>
                    ) : (
                      paragraph
                    )}
                  </p>
                </Reveal>
              ))}
            </div>

            <Reveal variant="left" delay={220} className="mt-9">
              <figure className="relative overflow-hidden rounded-r-lg border-l-[3px] border-brand-sienna bg-gradient-to-r from-amber-50 to-amber-50/30 px-6 py-5">
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-2 -top-6 font-serif text-[7rem] leading-none text-brand-sienna/10"
                >
                  ”
                </span>
                <blockquote className="relative text-sm font-medium italic leading-relaxed text-stone-800">
                  “{t.aboutQuote}”
                </blockquote>
                <figcaption className="relative mt-3 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-sienna">
                  <span className="h-px w-6 bg-brand-sienna/50" />
                  {t.ourJourney}
                </figcaption>
              </figure>
            </Reveal>
          </div>

          {/* Journey card */}
          <div className="lg:col-span-5">
            <Reveal variant="right" delay={160}>
              <div className="relative overflow-hidden rounded-xl border border-stone-200 bg-white p-6 shadow-[0_30px_70px_-45px_rgba(28,27,26,0.5)] sm:p-7">
                <div className="flex items-center justify-between border-b border-stone-200 pb-4">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-9 w-9 items-center justify-center rounded-md bg-amber-50 text-brand-sienna">
                      <i className="h-5 w-5" data-lucide="history"></i>
                    </span>
                    <div>
                      <h3 className="font-serif text-lg font-bold leading-tight text-stone-900">{t.ourJourney}</h3>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-stone-400">
                        MEDAN • 2016 — NOW
                      </p>
                    </div>
                  </div>
                  <span className="rounded-full border border-stone-200 px-2 py-0.5 font-mono text-[10px] text-stone-500">
                    3 / 3
                  </span>
                </div>

                <div ref={timelineRef} className="relative mt-6 space-y-7">
                  <span
                    aria-hidden="true"
                    className={`timeline-line absolute bottom-2 left-[7px] top-2 w-px bg-gradient-to-b from-brand-crimson via-amber-400 to-emerald-700 ${
                      timelineVisible ? 'is-visible' : ''
                    }`}
                  />
                  {milestones.map((milestone, index) => (
                    <Reveal key={milestone.title} variant="up" delay={120 + index * 140} className="relative pl-8">
                      <span className={`absolute left-0 top-1.5 flex h-4 w-4 items-center justify-center rounded-full border-4 border-white ${toneStyles[milestone.tone].dot} shadow-sm`}>
                        <span className="h-1 w-1 rounded-full bg-white" />
                      </span>
                      <span className={`inline-block rounded px-2 py-0.5 text-[10px] font-bold tracking-wide ${toneStyles[milestone.tone].chip}`}>
                        {milestone.year}
                      </span>
                      <h4 className="mt-1.5 text-sm font-bold text-stone-900">{milestone.title}</h4>
                      <p className="mt-1 text-xs leading-relaxed text-stone-500">{milestone.desc}</p>
                    </Reveal>
                  ))}
                </div>

                <div className="mt-8 flex items-center justify-center gap-2 rounded-lg bg-stone-900 px-4 py-3 text-[11px] font-medium text-stone-100">
                  <i className="h-4 w-4 text-amber-400" data-lucide="shield-check"></i>
                  <span>{t.facilityBadge}</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
