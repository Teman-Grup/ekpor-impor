import { useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'

function PortfolioSection() {
  const { t, language } = useLanguage()
  
  useEffect(() => {
    if (window.lucide) {
      window.lucide.createIcons()
    }
  }, [language])

  return (
    <section className="py-16 bg-stone-50 border-b border-stone-200" id="portofolio-ekspor">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-stone-200 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-brand-sienna block mb-1">{t.globalMarket}</span>
            <h2 className="text-3xl font-serif font-bold text-stone-900">{t.portfolioTitle}</h2>
            <p className="text-stone-600 text-xs sm:text-sm mt-1">{t.portfolioSubtitle}</p>
          </div>
          <div className="text-xs bg-white border border-stone-300 px-3 py-1.5 rounded flex items-center gap-2 text-stone-700">
            <i className="w-4 h-4 text-brand-sienna" data-lucide="anchor"></i>
            <span>{t.majorPorts}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* China Market */}
          <div className="bg-white border border-stone-200 rounded-sm p-6 shadow-sm">
            <div className="flex justify-between items-start mb-3">
              <span className="text-[11px] font-bold text-stone-500 uppercase tracking-wider">{t.mainExportDest1}</span>
              <span className="px-2 py-0.5 bg-red-100 text-red-800 font-bold text-xs rounded">CHINA (PRC)</span>
            </div>
            <h3 className="text-xl font-serif font-bold text-stone-900 mb-2">{t.chinaMarket}</h3>
            <p className="text-xs text-stone-600 leading-relaxed mb-4">
              {t.chinaDesc}
            </p>
            <div className="bg-stone-50 p-3 rounded border border-stone-200 mb-4 text-xs">
              <span className="font-bold text-stone-800 block mb-1">{t.verifiedCommodities} China:</span>
              <div className="flex flex-wrap gap-1.5">
                <span className="px-2 py-0.5 bg-white border border-stone-300 rounded text-stone-700">{t.jernangSuper}</span>
                <span className="px-2 py-0.5 bg-white border border-stone-300 rounded text-stone-700">{t.damarStone}</span>
                <span className="px-2 py-0.5 bg-white border border-stone-300 rounded text-stone-700">{t.benzoin}</span>
              </div>
            </div>
            <div className="relative rounded overflow-hidden h-48 border border-stone-200 bg-stone-100">
              <img 
                alt="China Buyer Documentation" 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida/AEtjO1Wy8xOQxV2cl4kkPhaPUunsldrBOL4nBfQD1JsV851HV0FGfUq8sfga0bSWtJ1ic3caH4hP2c1PS1ce5UvjxvlJldIqAZNIKJq4r2sk9NrlOgWGCRPZ6rbSmpsw3pOHsXl_pBk56y-_FnFxu8OgFA5BmZ_MJnjuzwjzoEq7msZlnYRGKaZmFHOmS0XW9vcxhymhLpzxOr1OD9lGyBiOWvTOCnAWEcLDKsnkmXL1xmkskYtDoxEVGzVTIQ"
              />
              <div className="absolute bottom-0 inset-x-0 bg-stone-900/80 p-2 text-[10px] text-white flex justify-between items-center">
                <span>{t.buyerDoc}</span>
                <i className="w-3.5 h-3.5" data-lucide="external-link"></i>
              </div>
            </div>
          </div>

          {/* India Market */}
          <div className="bg-white border border-stone-200 rounded-sm p-6 shadow-sm">
            <div className="flex justify-between items-start mb-3">
              <span className="text-[11px] font-bold text-stone-500 uppercase tracking-wider">{t.mainExportDest2}</span>
              <span className="px-2 py-0.5 bg-amber-100 text-amber-800 font-bold text-xs rounded">INDIA</span>
            </div>
            <h3 className="text-xl font-serif font-bold text-stone-900 mb-2">{t.indiaMarket}</h3>
            <p className="text-xs text-stone-600 leading-relaxed mb-4">
              {t.indiaDesc}
            </p>
            <div className="bg-stone-50 p-3 rounded border border-stone-200 mb-4 text-xs">
              <span className="font-bold text-stone-800 block mb-1">{t.verifiedCommodities} India:</span>
              <div className="flex flex-wrap gap-1.5">
                <span className="px-2 py-0.5 bg-white border border-stone-300 rounded text-stone-700">{t.palmSticks}</span>
                <span className="px-2 py-0.5 bg-white border border-stone-300 rounded text-stone-700">{t.betelNuts}</span>
              </div>
            </div>
            <div className="relative rounded overflow-hidden h-48 border border-stone-200 bg-stone-100">
              <img 
                alt="Container Shipment" 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida/AEtjO1Wy8xOQxV2cl4kkPhaPUunsldrBOL4nBfQD1JsV851HV0FGfUq8sfga0bSWtJ1ic3caH4hP2c1PS1ce5UvjxvlJldIqAZNIKJq4r2sk9NrlOgWGCRPZ6rbSmpsw3pOHsXl_pBk56y-_FnFxu8OgFA5BmZ_MJnjuzwjzoEq7msZlnYRGKaZmFHOmS0XW9vcxhymhLpzxOr1OD9lGyBiOWvTOCnAWEcLDKsnkmXL1xmkskYtDoxEVGzVTIQ"
              />
              <div className="absolute bottom-0 inset-x-0 bg-stone-900/80 p-2 text-[10px] text-white flex justify-between items-center">
                <span>{t.containerShipment}</span>
                <i className="w-3.5 h-3.5" data-lucide="external-link"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PortfolioSection
