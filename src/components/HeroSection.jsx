import { useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'
import useParallax from '../hooks/useParallax'
import useTilt from '../hooks/useTilt'
import Reveal from './Reveal'
import CountUp from './CountUp'
import Marquee from './Marquee'

const tickerItems = [
  "DRAGON'S BLOOD",
  'KAYU GAHARU',
  'KEMENYAN',
  'DAMAR BATU',
  'LIDI SAWIT',
  'BUAH PINANG',
  'BIGAR BAMBU'
]

function HeroSection({ data }) {
  const { t, language } = useLanguage()
  const backgroundRef = useParallax(0.07)
  const cardParallaxRef = useParallax(0.035)
  const tilt = useTilt(7)

  useEffect(() => {
    if (window.lucide) {
      window.lucide.createIcons()
    }
  }, [language])

  const heroImage = data?.image || 'https://lh3.googleusercontent.com/aida/AEtjO1Wy8xOQxV2cl4kkPhaPUunsldrBOL4nBfQD1JsV851HV0FGfUq8sfga0bSWtJ1ic3caH4hP2c1PS1ce5UvjxvlJldIqAZNIKJq4r2sk9NrlOgWGCRPZ6rbSmpsw3pOHsXl_pBk56y-_FnFxu8OgFA5BmZ_MJnjuzwjzoEq7msZlnYRGKaZmFHOmS0XW9vcxhymhLpzxOr1OD9lGyBiOWvTOCnAWEcLDKsnkmXL1xmkskYtDoxEVGzVTIQ'

  const title = data?.title || t.companyName
  const words = title.split(' ')
  const midpoint = Math.ceil(words.length / 2)
  const titleLineOne = words.slice(0, midpoint).join(' ')
  const titleLineTwo = words.slice(midpoint).join(' ')

  const handleSpotlight = (event) => {
    const element = event.currentTarget
    const rect = element.getBoundingClientRect()
    element.style.setProperty('--spot-x', `${event.clientX - rect.left}px`)
    element.style.setProperty('--spot-y', `${event.clientY - rect.top}px`)
  }

  const stats = [
    { value: <CountUp to={2016} className="tabular-nums" />, label: t.established },
    { value: <CountUp to={6} suffix="+" className="tabular-nums" />, label: t.modernMachines },
    { value: 'CN · IN', label: t.mainMarket },
    { value: 'QC LAB', label: t.qcLab }
  ]

  return (
    <section
      className="relative isolate flex min-h-[calc(100vh-4rem)] flex-col overflow-hidden wood-texture-hero text-white spotlight"
      onMouseMove={handleSpotlight}
    >
      {/* Background layers */}
      <div className="absolute inset-0 -z-10">
        <div ref={backgroundRef} className="absolute inset-[-14%] parallax">
          <img
            src={heroImage}
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover opacity-[0.32] ken-burns"
            onError={(e) => { e.currentTarget.style.display = 'none' }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#170502]/95 via-[#2d0c05]/78 to-[#170502]/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#120402] via-transparent to-[#120402]/70" />
        <div className="absolute inset-0 grid-lines opacity-70" />
      </div>
      <div className="absolute inset-0 grain pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 flex w-full flex-1 items-center">
        <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Copy */}
          <div className="lg:col-span-7">
            <Reveal variant="fade" delay={60}>
              <span className="inline-flex items-center gap-2.5 rounded-full border border-amber-400/30 bg-black/30 px-3.5 py-1.5 text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-amber-200/90 backdrop-blur-sm">
                <span className="relative flex h-2 w-2 text-amber-400">
                  <span className="pulse-ring relative inline-flex h-2 w-2 rounded-full bg-amber-400" />
                </span>
                {data?.badge || 'EST. 2016 • MEDAN, NORTH SUMATRA, INDONESIA'}
              </span>
            </Reveal>

            <h1 className="mt-6 font-serif font-bold tracking-[-0.02em] leading-[1.02] text-amber-50 text-[2.7rem] sm:text-6xl lg:text-[4.4rem] xl:text-[5.2rem]">
              <Reveal as="span" variant="mask" delay={120}>
                {titleLineOne}
              </Reveal>
              {titleLineTwo && (
                <Reveal as="span" variant="mask" delay={240}>
                  <span className="text-gradient-amber">{titleLineTwo}</span>
                </Reveal>
              )}
            </h1>

            <Reveal variant="up" delay={380} className="mt-5 max-w-xl">
              <p className="font-serif italic text-xl sm:text-2xl font-light text-amber-100/85 leading-snug">
                {data?.subtitle || t.heroSubtitle}
              </p>
            </Reveal>

            <div className="mt-7 flex flex-wrap gap-2 text-[11px]">
              {[
                { icon: 'check-circle-2', label: t.qualityProduct },
                { icon: 'shield-check', label: t.trust },
                { icon: 'handshake', label: t.longTermRelationship }
              ].map((item, index) => (
                <Reveal key={item.icon} variant="up" delay={460 + index * 90}>
                  <span className="group inline-flex items-center gap-2 rounded-full border border-amber-700/40 bg-amber-950/50 px-3.5 py-1.5 text-amber-100/90 backdrop-blur-sm transition-colors hover:border-amber-400/70 hover:bg-amber-900/50">
                    <i className="w-3.5 h-3.5 text-amber-400" data-lucide={item.icon}></i>
                    {item.label}
                  </span>
                </Reveal>
              ))}
            </div>

            <Reveal variant="up" delay={720} className="mt-8">
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a
                  href="#kontak"
                  className="btn-sheen group inline-flex items-center justify-center gap-2.5 rounded-md bg-gradient-to-r from-amber-500 via-amber-500 to-amber-600 px-6 py-3.5 text-xs font-bold uppercase tracking-[0.16em] text-stone-950 shadow-[0_18px_45px_-18px_rgba(245,158,11,0.9)] transition-all hover:-translate-y-0.5 hover:shadow-[0_24px_55px_-18px_rgba(245,158,11,0.95)]"
                >
                  <span>{t.contactTrade}</span>
                  <i className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" data-lucide="arrow-right"></i>
                </a>
                <a
                  href="#komoditas"
                  className="group inline-flex items-center justify-center gap-2.5 rounded-md border border-white/20 bg-white/[0.04] px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-amber-400/60 hover:bg-white/10"
                >
                  <i className="w-4 h-4 text-amber-400" data-lucide="file-text"></i>
                  <span>{t.viewCommodities}</span>
                </a>
              </div>
            </Reveal>

            <Reveal variant="fade" delay={860} className="mt-10">
              <dl className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-5 border-t border-white/10 pt-6">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <dt className="sr-only">{stat.label}</dt>
                    <dd className="font-serif text-xl sm:text-2xl font-bold text-amber-50 leading-none">
                      {stat.value}
                    </dd>
                    <p className="mt-1.5 text-[9.5px] sm:text-[10px] uppercase tracking-[0.16em] text-amber-100/45">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          {/* Verification card */}
          <div className="lg:col-span-5">
            <div ref={cardParallaxRef} className="parallax">
              <Reveal variant="right" delay={300}>
                <div
                  ref={tilt.ref}
                  onMouseMove={tilt.onMouseMove}
                  onMouseLeave={tilt.onMouseLeave}
                  className="tilt-surface relative rounded-2xl border border-amber-200/50 bg-brand-cream p-4 text-stone-900 shadow-[0_40px_90px_-30px_rgba(0,0,0,0.85)] sm:p-5"
                >
                  <span className="pointer-events-none absolute -inset-px rounded-2xl ring-1 ring-white/30" aria-hidden="true" />

                  <div className="flex items-center justify-between gap-3 border-b border-stone-200 pb-3.5">
                    <div>
                      <span className="block text-[9px] font-bold uppercase tracking-[0.24em] text-stone-500">
                        {t.tradeVerification}
                      </span>
                      <span className="text-[11px] font-bold uppercase tracking-wide text-brand-crimson">
                        {t.officialExporter}
                      </span>
                    </div>
                    <span className="rounded border border-stone-300 bg-white px-2 py-1 font-mono text-[10px] text-stone-600">
                      ID-EXP-2016
                    </span>
                  </div>

                  <div className="relative mt-3 aspect-[16/10] overflow-hidden rounded-xl border border-stone-200 bg-[radial-gradient(120%_120%_at_20%_10%,#3f3a33,#1c1b1a_60%,#5b1d0c)]">
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 flex items-center justify-center font-serif text-5xl font-bold tracking-tight text-white/10"
                    >
                      OJA
                    </span>
                    <img
                      src={heroImage}
                      alt="Dragon's Blood resin quality control — Medan"
                      className="ken-burns relative h-full w-full object-cover"
                      onError={(e) => { e.currentTarget.style.display = 'none' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-3">
                      <span className="flex items-center gap-1.5 text-[10px] font-medium tracking-wide text-white">
                        <span className="relative flex h-1.5 w-1.5">
                          <span className="pulse-ring relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400 text-emerald-400" />
                        </span>
                        {t.rawMaterial}
                      </span>
                      <span className="rounded-sm bg-white/15 px-1.5 py-0.5 text-[9px] uppercase tracking-wider text-white/80 backdrop-blur-sm">
                        LIVE QC
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-2.5">
                    <div className="rounded-lg border border-stone-200 bg-white/70 p-3">
                      <span className="block font-serif text-2xl font-bold leading-none text-brand-crimson">
                        <CountUp to={2016} />
                      </span>
                      <span className="mt-1 block text-[9px] font-semibold uppercase tracking-[0.14em] text-stone-500">
                        {t.established}
                      </span>
                    </div>
                    <div className="rounded-lg border border-stone-200 bg-white/70 p-3">
                      <span className="block font-serif text-2xl font-bold leading-none text-stone-800">
                        <CountUp to={6} suffix="+" />
                      </span>
                      <span className="mt-1 block text-[9px] font-semibold uppercase tracking-[0.14em] text-stone-500">
                        {t.modernMachines}
                      </span>
                    </div>
                    <div className="rounded-lg border border-stone-200 bg-white/70 p-3">
                      <span className="mt-0.5 block text-sm font-bold leading-none text-stone-900">QC LAB</span>
                      <span className="mt-1.5 block text-[9px] font-semibold uppercase tracking-[0.14em] text-stone-500">
                        {t.qcLab}
                      </span>
                    </div>
                    <div className="rounded-lg border border-stone-200 bg-white/70 p-3">
                      <span className="mt-0.5 block text-sm font-bold leading-none text-brand-crimson">CN • IN</span>
                      <span className="mt-1.5 block text-[9px] font-semibold uppercase tracking-[0.14em] text-stone-500">
                        {t.mainMarket}
                      </span>
                    </div>
                  </div>

                  <div className="mt-3 flex items-center justify-between border-t border-dashed border-stone-300 pt-3 text-[9px] uppercase tracking-[0.18em] text-stone-500">
                    <span className="inline-flex items-center gap-1.5">
                      <i className="w-3.5 h-3.5 text-emerald-600" data-lucide="badge-check"></i>
                      {t.statusRegulated || 'VERIFIED'}
                    </span>
                    <span className="font-mono">MEDAN — ID</span>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <Reveal variant="fade" delay={1000} className="hidden lg:flex items-center gap-3 pt-14 text-[9px] uppercase tracking-[0.32em] text-amber-100/40">
          <span className="relative h-10 w-px overflow-hidden bg-white/15 scroll-cue-line" aria-hidden="true" />
          SCROLL TO EXPLORE
        </Reveal>
        </div>
      </div>

      {/* Commodity ticker */}
      <div className="relative z-10 border-t border-white/10 bg-black/35 backdrop-blur-sm">
        <Marquee
          items={tickerItems}
          duration={42}
          className="py-3 text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.32em] text-amber-100/55"
        />
      </div>
    </section>
  )
}

export default HeroSection
