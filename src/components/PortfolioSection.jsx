import { useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'
import Reveal from './Reveal'

const marketImage = 'https://lh3.googleusercontent.com/aida/AEtjO1Wy8xOQxV2cl4kkPhaPUunsldrBOL4nBfQD1JsV851HV0FGfUq8sfga0bSWtJ1ic3caH4hP2c1PS1ce5UvjxvlJldIqAZNIKJq4r2sk9NrlOgWGCRPZ6rbSmpsw3pOHsXl_pBk56y-_FnFxu8OgFA5BmZ_MJnjuzwjzoEq7msZlnYRGKaZmFHOmS0XW9vcxhymhLpzxOr1OD9lGyBiOWvTOCnAWEcLDKsnkmXL1xmkskYtDoxEVGzVTIQ'

function PortfolioSection({ data }) {
  const { t, language } = useLanguage()

  useEffect(() => {
    if (window.lucide) {
      window.lucide.createIcons()
    }
  }, [language])

  return (
    <section id="portofolio-ekspor" className="relative overflow-hidden border-b border-stone-200 bg-brand-parchment py-20 md:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-sienna/30 to-transparent"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col gap-5 border-b border-stone-300/70 pb-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <Reveal variant="fade">
              <span className="inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.26em] text-brand-sienna">
                <span className="h-px w-8 bg-brand-sienna/60" />
                {t.globalMarket}
              </span>
            </Reveal>
            <Reveal as="h2" variant="mask" delay={80} className="mt-4 font-serif text-3xl font-bold leading-tight tracking-tight text-stone-900 sm:text-4xl lg:text-[2.9rem]">
              {data?.title || t.portfolioTitle}
            </Reveal>
            <Reveal variant="up" delay={180}>
              <p className="mt-3 text-sm text-stone-500">{data?.subtitle || t.portfolioSubtitle}</p>
            </Reveal>
          </div>

          <Reveal variant="fade" delay={220}>
            <div className="inline-flex max-w-full items-center gap-2.5 rounded-full border border-stone-300 bg-white/70 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.14em] text-stone-600 backdrop-blur-sm">
              <i className="h-3.5 w-3.5 flex-shrink-0 text-brand-sienna" data-lucide="anchor"></i>
              <span className="truncate">{t.majorPorts}</span>
            </div>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
          {/* China */}
          <Reveal variant="left" delay={100}>
            <article className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-stone-200 bg-white shadow-[0_24px_60px_-45px_rgba(28,27,26,0.55)] transition-all duration-500 hover:-translate-y-1.5 hover:border-brand-crimson/40 hover:shadow-[0_36px_80px_-45px_rgba(28,27,26,0.65)]">
              <div className="h-1 w-full bg-gradient-to-r from-red-700 via-red-600 to-red-400" />
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <div className="flex items-start justify-between gap-3">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400">
                    {t.mainExportDest1}
                  </span>
                  <span className="rounded-full bg-red-50 px-2.5 py-1 text-[10px] font-bold tracking-wide text-red-700 ring-1 ring-inset ring-red-200">
                    CHINA (PRC)
                  </span>
                </div>

                <h3 className="mt-4 font-serif text-xl font-bold leading-snug text-stone-900 sm:text-2xl">
                  {t.chinaMarket}
                </h3>
                <p className="mt-2.5 text-xs leading-relaxed text-stone-500">
                  {t.chinaDesc}
                </p>

                <div className="mt-5 rounded-lg border border-stone-200 bg-stone-50/80 p-3.5">
                  <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.16em] text-stone-500">
                    {t.verifiedCommodities} China
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {[t.jernangSuper, t.damarStone, t.benzoin].map((item) => (
                      <span
                        key={item}
                        className="rounded border border-stone-200 bg-white px-2 py-0.5 text-[10.5px] text-stone-600 transition-colors group-hover:border-brand-sienna/25"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="relative mt-5 h-48 overflow-hidden rounded-lg border border-stone-200 bg-[linear-gradient(135deg,#2b2622,#4a1c0e)]">
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 flex items-center justify-center font-serif text-5xl font-bold tracking-tight text-white/10"
                  >
                    CN
                  </span>
                  <img
                    alt="China Buyer Documentation"
                    className="relative h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
                    src={marketImage}
                    onError={(e) => { e.currentTarget.style.display = 'none' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-3 text-[10px] text-white">
                    <span className="flex items-center gap-2 tracking-wide">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      {t.buyerDoc}
                    </span>
                    <i className="h-3.5 w-3.5 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" data-lucide="external-link"></i>
                  </div>
                  <svg
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-4 top-4 h-8 w-[calc(100%-2rem)] opacity-60"
                    viewBox="0 0 400 32"
                    fill="none"
                  >
                    <path d="M4 26 C 90 2, 310 2, 396 26" stroke="rgba(255,255,255,0.65)" strokeWidth="1" className="dash-flow" />
                  </svg>
                </div>
              </div>
            </article>
          </Reveal>

          {/* India */}
          <Reveal variant="right" delay={200}>
            <article className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-stone-200 bg-white shadow-[0_24px_60px_-45px_rgba(28,27,26,0.55)] transition-all duration-500 hover:-translate-y-1.5 hover:border-amber-500/50 hover:shadow-[0_36px_80px_-45px_rgba(28,27,26,0.65)]">
              <div className="h-1 w-full bg-gradient-to-r from-amber-700 via-amber-500 to-amber-300" />
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <div className="flex items-start justify-between gap-3">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400">
                    {t.mainExportDest2}
                  </span>
                  <span className="rounded-full bg-amber-50 px-2.5 py-1 text-[10px] font-bold tracking-wide text-amber-800 ring-1 ring-inset ring-amber-200">
                    INDIA
                  </span>
                </div>

                <h3 className="mt-4 font-serif text-xl font-bold leading-snug text-stone-900 sm:text-2xl">
                  {t.indiaMarket}
                </h3>
                <p className="mt-2.5 text-xs leading-relaxed text-stone-500">
                  {t.indiaDesc}
                </p>

                <div className="mt-5 rounded-lg border border-stone-200 bg-stone-50/80 p-3.5">
                  <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.16em] text-stone-500">
                    {t.verifiedCommodities} India
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {[t.palmSticks, t.betelNuts].map((item) => (
                      <span
                        key={item}
                        className="rounded border border-stone-200 bg-white px-2 py-0.5 text-[10.5px] text-stone-600 transition-colors group-hover:border-amber-500/25"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="relative mt-5 h-48 overflow-hidden rounded-lg border border-stone-200 bg-[linear-gradient(135deg,#2b2622,#6b3b0c)]">
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 flex items-center justify-center font-serif text-5xl font-bold tracking-tight text-white/10"
                  >
                    IN
                  </span>
                  <img
                    alt="Container Shipment"
                    className="relative h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
                    src={marketImage}
                    onError={(e) => { e.currentTarget.style.display = 'none' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-3 text-[10px] text-white">
                    <span className="flex items-center gap-2 tracking-wide">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                      {t.containerShipment}
                    </span>
                    <i className="h-3.5 w-3.5 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" data-lucide="external-link"></i>
                  </div>
                  <svg
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-4 top-4 h-8 w-[calc(100%-2rem)] opacity-60"
                    viewBox="0 0 400 32"
                    fill="none"
                  >
                    <path d="M4 26 C 90 2, 310 2, 396 26" stroke="rgba(255,255,255,0.65)" strokeWidth="1" className="dash-flow" />
                  </svg>
                </div>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default PortfolioSection
