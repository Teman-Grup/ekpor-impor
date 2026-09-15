import { useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'

function LegalitasSection() {
  const { t, language } = useLanguage()
  
  useEffect(() => {
    if (window.lucide) {
      window.lucide.createIcons()
    }
  }, [language])

  return (
    <section className="py-16 md:py-20 bg-stone-100 border-b border-stone-200" id="legalitas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-stone-300 rounded-sm p-8 shadow-sm">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center pb-6 border-b border-stone-200 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-brand-sienna block mb-1">{t.legalityDoc}</span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">{t.legalityTitle}</h2>
              <p className="text-xs text-stone-500 mt-1">{t.legalitySubtitle}</p>
            </div>
            <div className="flex items-center gap-2 bg-emerald-50 text-emerald-800 border border-emerald-300 px-3 py-1.5 rounded text-xs font-semibold">
              <i className="w-4 h-4 text-emerald-600" data-lucide="badge-check"></i>
              <span>{t.statusRegulated}</span>
            </div>
          </div>

          {/* Legal Credentials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-6 border-b border-stone-200 text-xs">
            <div>
              <span className="text-stone-400 uppercase tracking-wider block text-[10px] font-semibold">{t.officialBusinessName}</span>
              <span className="font-serif font-bold text-base text-stone-900 block mt-1">PT. Original Jernang Asia</span>
            </div>
            <div>
              <span className="text-stone-400 uppercase tracking-wider block text-[10px] font-semibold">{t.taxNumber}</span>
              <span className="font-mono font-bold text-base text-stone-900 block mt-1 tracking-wider">0764378550122000</span>
            </div>
            <div>
              <span className="text-stone-400 uppercase tracking-wider block text-[10px] font-semibold">{t.businessNumber}</span>
              <span className="font-mono font-bold text-base text-stone-900 block mt-1 tracking-wider">1701220042861</span>
            </div>
            <div>
              <span className="text-stone-400 uppercase tracking-wider block text-[10px] font-semibold">{t.foundationDeed}</span>
              <span className="font-bold text-stone-900 block mt-1">Akta No. 02</span>
              <span className="text-stone-500 text-[11px]">{t.deedDate}</span>
            </div>
            <div>
              <span className="text-stone-400 uppercase tracking-wider block text-[10px] font-semibold">{t.approvalDecree}</span>
              <span className="font-mono font-bold text-stone-900 block mt-1">AHU-0047642.AH.01.11 / 2022</span>
              <span className="text-stone-500 text-[11px]">{t.ministryLaw}</span>
            </div>
            <div>
              <span className="text-stone-400 uppercase tracking-wider block text-[10px] font-semibold">{t.businessClassification}</span>
              <span className="font-bold text-stone-900 block mt-1">KBLI 46900</span>
              <span className="text-stone-500 text-[11px]">{t.wholesaleTrade}</span>
            </div>
          </div>

          {/* Address Verification Banner */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-600 gap-4">
            <div className="flex items-center gap-2">
              <i className="w-4 h-4 text-brand-sienna flex-shrink-0" data-lucide="map-pin"></i>
              <span><strong>{t.registeredAddress}</strong> {t.addressDetail}</span>
            </div>
            <div className="text-stone-500 font-mono text-[11px] flex items-center gap-1.5">
              <i className="w-4 h-4 text-emerald-600" data-lucide="shield-check"></i>
              <span>{t.legalExport}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LegalitasSection
