import { useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'
import Reveal from './Reveal'

function PillarsSection({ data }) {
  const { t, language } = useLanguage()

  useEffect(() => {
    if (window.lucide) {
      window.lucide.createIcons()
    }
  }, [language])

  const rawPillars = Array.isArray(data) && data.length >= 4 ? data : [
    { id: 1, number: '01', icon: 'package-search', badge: 'Supply Network' },
    { id: 2, number: '02', icon: 'cog', badge: 'Modern Processing' },
    { id: 3, number: '03', icon: 'flask-conical', badge: 'QC & Laboratory' },
    { id: 4, number: '04', icon: 'globe', badge: 'Export Network' }
  ]

  const translatedPillars = [
    { ...rawPillars[0], title: t.pillar1Title, description: t.pillar1Desc },
    { ...rawPillars[1], title: t.pillar2Title, description: t.pillar2Desc },
    { ...rawPillars[2], title: t.pillar3Title, description: t.pillar3Desc },
    { ...rawPillars[3], title: t.pillar4Title, description: t.pillar4Desc }
  ]

  return (
    <section
      id="bisnis-pengolahan"
      className="relative overflow-hidden bg-brand-forest py-20 text-white md:py-28"
    >
      {/* Atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_500px_at_15%_0%,rgba(180,59,24,0.28),transparent_65%),radial-gradient(800px_480px_at_90%_100%,rgba(200,75,35,0.18),transparent_60%)]"
      />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 grid-lines opacity-40" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <Reveal variant="fade">
            <span className="inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.28em] text-amber-400/90">
              <span className="h-px w-8 bg-amber-400/50" />
              {t.mainPillars}
              <span className="h-px w-8 bg-amber-400/50" />
            </span>
          </Reveal>
          <Reveal as="h2" variant="mask" delay={90} className="mt-5 font-serif text-3xl font-bold leading-tight tracking-tight text-amber-50 sm:text-4xl lg:text-[2.9rem]">
            {t.pillarsTitle}
          </Reveal>
          <Reveal variant="up" delay={200} className="mx-auto mt-4 max-w-2xl">
            <p className="text-sm leading-relaxed text-stone-300/80">{t.pillarsSubtitle}</p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {translatedPillars.map((pillar, index) => (
            <Reveal key={pillar.id || index} variant="up" delay={index * 110}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-amber-400/45 hover:bg-white/[0.07] hover:shadow-[0_30px_60px_-30px_rgba(0,0,0,0.8)]">
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-1 top-2 select-none font-serif text-[5.5rem] font-bold leading-none text-white/[0.05] transition-colors duration-500 group-hover:text-amber-400/20"
                >
                  {pillar.number}
                </span>

                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-amber-500/10 text-amber-300 ring-1 ring-inset ring-amber-400/20 transition-all duration-500 group-hover:bg-amber-500 group-hover:text-stone-950 group-hover:ring-amber-400">
                    <i className="h-5 w-5 transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110" data-lucide={pillar.icon}></i>
                  </div>

                  <span className="mt-5 block font-mono text-[10px] font-bold uppercase tracking-[0.24em] text-amber-400/70">
                    PILLAR {pillar.number}
                  </span>
                  <h3 className="mt-1.5 font-serif text-lg font-bold leading-snug text-amber-50">
                    {pillar.title}
                  </h3>
                  <p className="mt-2.5 text-xs leading-relaxed text-stone-300/75">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-auto flex items-center gap-2 border-t border-white/10 pt-4 text-[10.5px] font-semibold uppercase tracking-[0.16em] text-amber-300/80">
                  <span>{pillar.badge || 'Supply Network'}</span>
                  <i className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-1" data-lucide="arrow-right"></i>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal variant="fade" delay={220} className="mt-12">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 border-t border-white/10 pt-8 text-[10px] uppercase tracking-[0.24em] text-stone-400/70">
            <span>Medan • North Sumatra</span>
            <span className="h-1 w-1 rounded-full bg-amber-500/60" />
            <span>In-house Processing</span>
            <span className="h-1 w-1 rounded-full bg-amber-500/60" />
            <span>Export Ready</span>
            <span className="h-1 w-1 rounded-full bg-amber-500/60" />
            <span>China & India</span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default PillarsSection
