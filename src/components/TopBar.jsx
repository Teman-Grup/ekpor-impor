import { useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'

function TopBar({ data }) {
  const { language, changeLanguage, t } = useLanguage()

  useEffect(() => {
    if (window.lucide) {
      window.lucide.createIcons()
    }
  }, [language])

  if (!data) return null

  return (
    <header className="w-full bg-[#181816] text-[#c9c5be] text-xs border-b border-stone-800">
      <div className="w-full px-3 sm:px-6 lg:px-8 xl:px-10 py-1.5 sm:py-2 flex flex-row flex-wrap sm:flex-nowrap justify-between items-center gap-2">
        {/* Left Contact Info */}
        <div className="flex items-center flex-wrap gap-3 sm:gap-6 text-[11px] sm:text-xs">
          <span className="hidden sm:inline-flex items-center gap-1.5 text-stone-300">
            <i className="w-3.5 h-3.5 text-brand-sienna" data-lucide="map-pin"></i>
            {t.location}
          </span>
          <a className="inline-flex items-center gap-1.5 hover:text-white transition-colors" href={`tel:${data.phone?.replace(/\s/g, '')}`}>
            <i className="w-3.5 h-3.5 text-brand-sienna" data-lucide="phone"></i>
            <span>{data.phone}</span>
          </a>
          <a className="hidden md:inline-flex items-center gap-1.5 hover:text-white transition-colors" href={`mailto:${data.email}`}>
            <i className="w-3.5 h-3.5 text-brand-sienna" data-lucide="mail"></i>
            <span>{data.email}</span>
          </a>
        </div>
        
        {/* Right Utility Links & Language */}
        <div className="flex items-center gap-3 sm:gap-4 text-[11px] uppercase tracking-wider ml-auto">
          <div className="flex items-center gap-1 text-stone-400 font-medium">
            <button 
              type="button"
              className={`${language === 'id' ? 'text-amber-400 font-bold' : 'hover:text-white'} transition-colors px-1`}
              onClick={() => changeLanguage('id')}
              aria-label="Bahasa Indonesia"
            >
              ID
            </button>
            <span className="text-stone-600">/</span>
            <button 
              type="button"
              className={`${language === 'en' ? 'text-amber-400 font-bold' : 'hover:text-white'} transition-colors px-1`}
              onClick={() => changeLanguage('en')}
              aria-label="English"
            >
              EN
            </button>
          </div>
          <span className="text-stone-700 hidden sm:inline">|</span>
          <a className="inline-flex items-center gap-1 text-amber-500 hover:text-amber-400 font-semibold tracking-wide uppercase text-[10px] sm:text-[11px]" href="#kontak">
            <i className="w-3.5 h-3.5" data-lucide="file-check-2"></i>
            <span>{t.tradeDesk}</span>
          </a>
        </div>
      </div>
    </header>
  )
}

export default TopBar

