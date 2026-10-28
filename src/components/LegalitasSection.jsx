import { useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'
import Reveal from './Reveal'

function LegalitasSection({ data }) {
  const { t, language } = useLanguage()

  useEffect(() => {
    if (window.lucide) {
      window.lucide.createIcons()
    }
  }, [language])

  const credentials = [
    { label: t.officialBusinessName, value: 'PT. Original Jernang Asia', mono: false },
    { label: t.taxNumber, value: '0764378550122000', mono: true },
    { label: t.businessNumber, value: '1701220042861', mono: true },
    { label: t.foundationDeed, value: 'Akta No. 02', note: t.deedDate, mono: false },
    { label: t.approvalDecree, value: 'AHU-0047642.AH.01.11 / 2022', note: t.ministryLaw, mono: true },
    { label: t.businessClassification, value: 'KBLI 46900', note: t.wholesaleTrade, mono: false }
  ]

  return (
    <section id="legalitas" className="relative overflow-hidden border-b border-stone-200 bg-stone-100 py-20 md:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(28,27,26,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(28,27,26,0.045) 1px, transparent 1px)',
          backgroundSize: '64px 64px'
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal variant="scale" delay={60}>
          <div className="relative overflow-hidden rounded-2xl border border-stone-300 bg-white shadow-[0_40px_90px_-60px_rgba(28,27,26,0.6)]">
            {/* corner brackets */}
            <span className="pointer-events-none absolute left-4 top-4 h-6 w-6 border-l-2 border-t-2 border-brand-sienna/40" aria-hidden="true" />
            <span className="pointer-events-none absolute right-4 top-4 h-6 w-6 border-r-2 border-t-2 border-brand-sienna/40" aria-hidden="true" />
            <span className="pointer-events-none absolute bottom-4 left-4 h-6 w-6 border-b-2 border-l-2 border-brand-sienna/40" aria-hidden="true" />
            <span className="pointer-events-none absolute bottom-4 right-4 h-6 w-6 border-b-2 border-r-2 border-brand-sienna/40" aria-hidden="true" />

            <div className="flex flex-col gap-6 border-b border-stone-200 p-6 sm:p-8 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <Reveal variant="fade">
                  <span className="inline-flex items-center gap-3 text-[10.5px] font-bold uppercase tracking-[0.26em] text-brand-sienna">
                    <span className="h-px w-8 bg-brand-sienna/60" />
                    {t.legalityDoc}
                  </span>
                </Reveal>
                <Reveal as="h2" variant="mask" delay={80} className="mt-4 font-serif text-2xl font-bold leading-tight tracking-tight text-stone-900 sm:text-3xl">
                  {data?.title || t.legalityTitle}
                </Reveal>
                <Reveal variant="up" delay={160}>
                  <p className="mt-2 text-xs text-stone-500">{data?.subtitle || t.legalitySubtitle}</p>
                </Reveal>
              </div>

              <Reveal variant="scale" delay={220} className="flex flex-shrink-0 items-center gap-4">
                <div className="relative hidden h-20 w-20 sm:block">
                  <span className="spin-slow absolute inset-0 rounded-full border border-dashed border-brand-sienna/40" aria-hidden="true" />
                  <span className="absolute inset-2.5 rounded-full border border-brand-sienna/15 bg-gradient-to-br from-amber-50 to-white" aria-hidden="true" />
                  <span className="absolute inset-0 flex items-center justify-center text-brand-sienna">
                    <i className="h-6 w-6" data-lucide="stamp"></i>
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-emerald-800">
                    <span className="relative flex h-1.5 w-1.5 text-emerald-500">
                      <span className="pulse-ring relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    </span>
                    {t.statusRegulated}
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-stone-400">
                    VERIFIED DOCUMENT • ID
                  </span>
                </div>
              </Reveal>
            </div>

            <div className="grid grid-cols-1 gap-px bg-stone-200 sm:grid-cols-2 lg:grid-cols-3">
              {credentials.map((item, index) => (
                <Reveal
                  key={item.label}
                  variant="up"
                  delay={index * 60}
                  className="group bg-white p-5 transition-colors duration-300 hover:bg-amber-50/40 sm:p-6"
                >
                  <span className="block text-[9px] font-semibold uppercase tracking-[0.2em] text-stone-400">
                    {item.label}
                  </span>
                  <span
                    className={`mt-2 block text-stone-900 ${
                      item.mono
                        ? 'font-mono text-sm font-bold tracking-wide sm:text-[15px]'
                        : 'font-serif text-base font-bold'
                    }`}
                  >
                    {item.value}
                  </span>
                  {item.note && (
                    <span className="mt-1 block text-[10.5px] text-stone-400">{item.note}</span>
                  )}
                  <span className="mt-4 flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-emerald-700/0 transition-colors duration-300 group-hover:text-emerald-700/80">
                    <i className="h-3 w-3" data-lucide="badge-check"></i>
                    verified
                  </span>
                </Reveal>
              ))}
            </div>

            <div className="flex flex-col gap-4 border-t border-stone-200 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
              <div className="flex items-start gap-2.5 text-xs text-stone-600">
                <i className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-sienna" data-lucide="map-pin"></i>
                <span>
                  <strong className="text-stone-800">{t.registeredAddress}</strong>{' '}
                  {t.addressDetail}
                </span>
              </div>
              <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-stone-500">
                <i className="h-4 w-4 text-emerald-600" data-lucide="shield-check"></i>
                <span>{t.legalExport}</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default LegalitasSection
