import { useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'

function HeroSection({ data }) {
  const { t, language } = useLanguage()

  useEffect(() => {
    // Initialize Lucide icons
    if (window.lucide) {
      window.lucide.createIcons()
    }
  }, [language])

  const heroImage = data?.image || 'https://lh3.googleusercontent.com/aida/AEtjO1Wy8xOQxV2cl4kkPhaPUunsldrBOL4nBfQD1JsV851HV0FGfUq8sfga0bSWtJ1ic3caH4hP2c1PS1ce5UvjxvlJldIqAZNIKJq4r2sk9NrlOgWGCRPZ6rbSmpsw3pOHsXl_pBk56y-_FnFxu8OgFA5BmZ_MJnjuzwjzoEq7msZlnYRGKaZmFHOmS0XW9vcxhymhLpzxOr1OD9lGyBiOWvTOCnAWEcLDKsnkmXL1xmkskYtDoxEVGzVTIQ'

  return (
    <section className="wood-texture-hero text-white py-12 md:py-20 relative overflow-hidden border-b-4 border-amber-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-black/30 border border-amber-500/40 rounded-full text-amber-200 text-xs tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
              EST. 2016 • MEDAN, NORTH SUMATRA, INDONESIA
            </div>
            
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-amber-50 leading-[1.15]">
              {t.companyName}
            </h1>
            
            <p className="text-xl sm:text-2xl font-serif italic text-amber-100/90 font-light">
              {t.heroSubtitle}
            </p>

            {/* Core Values Badges */}
            <div className="flex flex-wrap gap-2 text-xs pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-950/70 border border-amber-700/50 rounded text-amber-100">
                <i className="w-3.5 h-3.5 text-amber-400" data-lucide="check-circle-2"></i> {t.qualityProduct}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-950/70 border border-amber-700/50 rounded text-amber-100">
                <i className="w-3.5 h-3.5 text-amber-400" data-lucide="shield-check"></i> {t.trust}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-950/70 border border-amber-700/50 rounded text-amber-100">
                <i className="w-3.5 h-3.5 text-amber-400" data-lucide="handshake"></i> {t.longTermRelationship}
              </span>
            </div>

            {/* Hero Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
              <a 
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold text-xs uppercase tracking-wider rounded-sm transition shadow-lg" 
                href="#kontak"
              >
                <span>{t.contactTrade}</span>
                <i className="w-4 h-4" data-lucide="arrow-right"></i>
              </a>
              <a 
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-black/40 hover:bg-black/60 border border-white/20 text-white font-semibold text-xs uppercase tracking-wider rounded-sm transition" 
                href="#komoditas"
              >
                <i className="w-4 h-4 text-amber-400" data-lucide="file-text"></i>
                <span>{t.viewCommodities}</span>
              </a>
            </div>
          </div>

          {/* Right Hero Media Card */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-sm p-4 text-stone-900 shadow-2xl border border-amber-200">
              {/* Card Top Header */}
              <div className="flex justify-between items-center border-b border-stone-200 pb-3 mb-3">
                <div>
                  <span className="text-[10px] font-bold tracking-widest uppercase text-stone-500 block">{t.tradeVerification}</span>
                  <span className="text-xs font-bold text-brand-crimson">{t.officialExporter}</span>
                </div>
                <span className="text-[11px] font-mono bg-stone-100 text-stone-700 px-2 py-0.5 rounded border border-stone-300">
                  ID-EXP-2016
                </span>
              </div>
              
              {/* Image with Caption */}
              <div className="relative overflow-hidden rounded border border-stone-200 aspect-[16/10] bg-stone-100">
                <img 
                  alt="Dragon's Blood Resin QC Medan Laboratory" 
                  className="w-full h-full object-cover object-center" 
                  src={heroImage}
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-2.5 text-white">
                  <span className="text-[11px] font-medium tracking-wide flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                    {t.rawMaterial}
                  </span>
                </div>
              </div>
              
              {/* Card Bottom Metrics */}
              <div className="grid grid-cols-2 gap-3 mt-4 pt-3 border-t border-stone-100 text-center">
                <div className="p-2 bg-stone-50 rounded border border-stone-150">
                  <span className="block text-2xl font-serif font-bold text-brand-crimson">2016</span>
                  <span className="text-[10px] uppercase font-semibold text-stone-500">{t.established}</span>
                </div>
                <div className="p-2 bg-stone-50 rounded border border-stone-150">
                  <span className="block text-2xl font-serif font-bold text-stone-800">6+</span>
                  <span className="text-[10px] uppercase font-semibold text-stone-500">{t.modernMachines}</span>
                </div>
                <div className="p-2 bg-stone-50 rounded border border-stone-150">
                  <span className="block text-base font-bold text-stone-900 mt-1">QC Lab</span>
                  <span className="text-[10px] uppercase font-semibold text-stone-500">{t.qcLab}</span>
                </div>
                <div className="p-2 bg-stone-50 rounded border border-stone-150">
                  <span className="block text-base font-bold text-brand-crimson mt-1">CN • IN</span>
                  <span className="text-[10px] uppercase font-semibold text-stone-500">{t.mainMarket}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
