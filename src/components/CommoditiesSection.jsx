import { useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'
import useParallax from '../hooks/useParallax'
import Reveal from './Reveal'

const fallbackImage = 'https://lh3.googleusercontent.com/aida/AEtjO1Wy8xOQxV2cl4kkPhaPUunsldrBOL4nBfQD1JsV851HV0FGfUq8sfga0bSWtJ1ic3caH4hP2c1PS1ce5UvjxvlJldIqAZNIKJq4r2sk9NrlOgWGCRPZ6rbSmpsw3pOHsXl_pBk56y-_FnFxu8OgFA5BmZ_MJnjuzwjzoEq7msZlnYRGKaZmFHOmS0XW9vcxhymhLpzxOr1OD9lGyBiOWvTOCnAWEcLDKsnkmXL1xmkskYtDoxEVGzVTIQ'

function CommoditiesSection({ data }) {
  const { t, language } = useLanguage()
  const featuredImageRef = useParallax(0.05)

  useEffect(() => {
    if (window.lucide) {
      window.lucide.createIcons()
    }
  }, [language])

  const rawList = Array.isArray(data) ? data : [
    {
      id: 1,
      name: "Jernang (Dragon's Blood)",
      description: 'Komoditas utama dengan pengolahan lengkap dari buah hingga blok.',
      image: fallbackImage,
      featured: true,
      grade: 'Super / Murni',
      forms: 'Buah, Tepung & Blok'
    },
    {
      id: 2,
      name: 'Kayu Gaharu',
      description: 'Komoditas hasil alam bernilai tinggi untuk ekspor.',
      image: fallbackImage,
      featured: false,
      grade: 'Ekspor Terpilih'
    }
  ]

  const translateCommodity = (commodity) => {
    if (language === 'id') return commodity

    const translations = {
      "Jernang (Dragon's Blood)": {
        name: t.commodityJernang,
        description: t.commodityJernangDesc,
        grade: commodity.grade === 'Super / Murni' ? t.gradeSuperMurni : commodity.grade,
        forms: commodity.forms === 'Buah, Tepung & Blok' ? t.formsBuahTepungBlok : commodity.forms
      },
      'Kayu Gaharu': {
        name: t.commodityGaharu,
        description: t.commodityGaharuDesc,
        grade: commodity.grade === 'Ekspor Terpilih' ? t.gradeEksporTerpilih : commodity.grade
      },
      'Kemenyan': {
        name: t.commodityKemenyan,
        description: t.commodityKemenyanDesc
      },
      'Damar Batu': {
        name: t.commodityDamar,
        description: t.commodityDamarDesc
      },
      'Lidi': {
        name: t.commodityLidi,
        description: t.commodityLidiDesc
      },
      'Buah Pinang': {
        name: t.commodityPinang,
        description: t.commodityPinangDesc
      },
      'Bigar Bambu & Hasil Alam Lainnya': {
        name: t.commodityBigar,
        description: t.commodityBigarDesc,
        grade: commodity.grade === 'Kustomisasi Spesifikasi Buyer' ? t.gradeKustomisasi : commodity.grade
      }
    }

    const translated = translations[commodity.name]
    if (translated) {
      return {
        ...commodity,
        name: translated.name,
        description: translated.description,
        grade: translated.grade || commodity.grade,
        forms: translated.forms || commodity.forms
      }
    }

    return commodity
  }

  const featured = rawList.filter(c => c.featured).map(translateCommodity)
  const others = rawList.filter(c => !c.featured).map(translateCommodity)

  return (
    <section id="komoditas" className="relative overflow-hidden border-b border-stone-200 bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col gap-4 border-b border-stone-200 pb-6 md:flex-row md:items-end md:justify-between">
          <div>
            <Reveal variant="fade">
              <span className="inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.26em] text-brand-sienna">
                <span className="h-px w-8 bg-brand-sienna/60" />
                {t.officialCatalog}
              </span>
            </Reveal>
            <Reveal as="h2" variant="mask" delay={80} className="mt-4 font-serif text-3xl font-bold leading-tight tracking-tight text-stone-900 sm:text-4xl lg:text-[2.9rem]">
              {t.commoditiesTitle}
            </Reveal>
          </div>
          <Reveal variant="fade" delay={160} className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-stone-400">
            <i className="h-4 w-4 text-brand-sienna" data-lucide="badge-check"></i>
            Curated Natural Commodities
          </Reveal>
        </div>

        {/* Featured */}
        {featured.length > 0 && (
          <div className="mb-16 space-y-8">
            {featured.map((commodity, index) => (
              <Reveal key={commodity.id} variant="up" delay={index * 120}>
                <article className="sheen group relative overflow-hidden rounded-2xl border border-stone-800 bg-stone-950 text-white shadow-[0_40px_90px_-50px_rgba(28,27,26,0.9)]">
                  <div className="grid grid-cols-1 lg:grid-cols-12">
                    <div className="relative min-h-[280px] overflow-hidden bg-[radial-gradient(120%_120%_at_10%_0%,#4a3b2c,#1c1b1a_55%,#5b1d0c)] lg:col-span-5 lg:min-h-[440px]">
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 flex items-center justify-center font-serif text-7xl font-bold tracking-tight text-white/[0.07]"
                      >
                        {commodity.name?.replace(/[^A-Za-z]/g, '').slice(0, 2).toUpperCase() || 'OJA'}
                      </span>
                      <div
                        ref={index === 0 ? featuredImageRef : null}
                        className="absolute inset-[-10%] parallax"
                      >
                        <img
                          alt={commodity.name}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                          src={commodity.image || fallbackImage}
                          onError={(e) => { e.currentTarget.style.display = 'none' }}
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-stone-950/10 lg:to-stone-950/60" />
                      <span className="absolute left-5 top-5 rounded-sm bg-brand-crimson px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-white shadow-lg">
                        {t.mainCommodity}
                      </span>
                      <span className="absolute bottom-5 left-5 font-mono text-[10px] uppercase tracking-[0.24em] text-amber-200/70">
                        01 / FLAGSHIP
                      </span>
                    </div>

                    <div className="relative flex flex-col justify-between p-6 sm:p-8 lg:col-span-7 lg:p-10">
                      <div>
                        <div className="flex flex-wrap items-center gap-2.5 border-b border-white/10 pb-4">
                          {commodity.hsCode && (
                            <span className="font-mono text-[11px] tracking-wider text-amber-400">
                              HS CODE: {commodity.hsCode}
                            </span>
                          )}
                          {commodity.grade && (
                            <span className="rounded-full border border-emerald-700/60 bg-emerald-950/80 px-2.5 py-0.5 text-[10.5px] font-medium text-emerald-300">
                              {commodity.grade}
                            </span>
                          )}
                        </div>

                        <h3 className="mt-5 font-serif text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
                          {commodity.name}
                        </h3>
                        <p className="mt-3 max-w-xl text-xs leading-relaxed text-stone-300/85 sm:text-sm">
                          {commodity.description}
                        </p>

                        {commodity.forms && (
                          <div className="mt-5 flex flex-wrap gap-2">
                            {commodity.forms.split('&').map((form) => (
                              <span
                                key={form}
                                className="rounded border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] uppercase tracking-[0.14em] text-stone-300"
                              >
                                {form.trim()}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>

                      <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-5">
                        <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-stone-400">
                          <span className="relative flex h-1.5 w-1.5 text-emerald-400">
                            <span className="pulse-ring relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                          </span>
                          QC VERIFIED BATCH
                        </div>
                        <a
                          href="#kontak"
                          className="group/btn inline-flex items-center gap-2 rounded-md border border-amber-400/40 bg-amber-500/10 px-4 py-2.5 text-[10.5px] font-bold uppercase tracking-[0.16em] text-amber-200 transition-colors hover:bg-amber-500 hover:text-stone-950"
                        >
                          {t.contactTrade}
                          <i className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5" data-lucide="arrow-up-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        )}

        {/* Other commodities */}
        {others.length > 0 && (
          <>
            <Reveal variant="fade" className="mb-7 flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-md bg-amber-50 text-brand-sienna">
                <i className="h-4 w-4" data-lucide="boxes"></i>
              </span>
              <h3 className="font-serif text-lg font-bold text-stone-800">{t.otherCommodities}</h3>
              <span className="ml-1 rounded-full border border-stone-200 px-2 py-0.5 font-mono text-[10px] text-stone-500">
                {String(others.length).padStart(2, '0')}
              </span>
            </Reveal>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {others.map((commodity, index) => (
                <Reveal key={commodity.id} variant="up" delay={(index % 3) * 90}>
                  <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-stone-200 bg-stone-50 transition-all duration-500 hover:-translate-y-1.5 hover:border-brand-sienna/50 hover:shadow-[0_30px_60px_-40px_rgba(28,27,26,0.6)]">
                    <div className="relative h-48 overflow-hidden bg-[linear-gradient(135deg,#ece5d8,#cfc4b2)]">
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 flex items-center justify-center font-serif text-5xl font-bold text-stone-900/10"
                      >
                        {commodity.name?.charAt(0) || 'O'}
                      </span>
                      <img
                        alt={commodity.name}
                        className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
                        src={commodity.image || fallbackImage}
                        onError={(e) => { e.currentTarget.style.display = 'none' }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />
                      <span className="absolute left-4 top-4 font-mono text-[10px] uppercase tracking-[0.2em] text-white/80">
                        {String(index + 2).padStart(2, '0')}
                      </span>
                      <i
                        className="absolute bottom-4 right-4 h-4 w-4 text-white opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100 -translate-x-1"
                        data-lucide="arrow-up-right"
                      ></i>
                    </div>

                    <div className="flex flex-1 flex-col justify-between p-5">
                      <div>
                        <h4 className="font-serif text-lg font-bold leading-snug text-stone-900">
                          {commodity.name}
                        </h4>
                        <p className="mt-2 text-xs leading-relaxed text-stone-500">
                          {commodity.description}
                        </p>
                      </div>

                      {commodity.grade && (
                        <div className="mt-4 flex items-center justify-between border-t border-stone-200 pt-3 text-[10px] uppercase tracking-[0.14em]">
                          <span className="text-stone-400">Grade</span>
                          <span className="font-semibold text-brand-sienna">{commodity.grade}</span>
                        </div>
                      )}
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  )
}

export default CommoditiesSection
