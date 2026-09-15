import { useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'

function TopBar({ data }) {
  const { language, changeLanguage, t } = useLanguage()

  useEffect(() => {
    if (window.lucide) {
      window.lucide.createIcons()
    }
  }, [])

  if (!data) return null

  return (
    <header className="w-full bg-[#181816] text-[#c9c5be] text-xs border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-col md:flex-row justify-between items-center gap-2">
        {/* Left Contact Info */}
        <div className="flex items-center flex-wrap gap-4 sm:gap-6">
          <span className="inline-flex items-center gap-1.5 text-stone-300">
            <i className="w-3.5 h-3.5 text-brand-sienna" data-lucide="map-pin"></i>
            {t.location}
          </span>
          <a className="inline-flex items-center gap-1.5 hover:text-white transition-colors" href={`tel:${data.phone?.replace(/\s/g, '')}`}>
            <i className="w-3.5 h-3.5 text-brand-sienna" data-lucide="phone"></i>
            {data.phone}
          </a>
          <a className="hidden sm:inline-flex items-center gap-1.5 hover:text-white transition-colors" href={`mailto:${data.email}`}>
            <i className="w-3.5 h-3.5 text-brand-sienna" data-lucide="mail"></i>
            {data.email}
          </a>
        </div>
        
        {/* Right Utility Links & Language */}
        <div className="flex items-center gap-4 text-[11px] uppercase tracking-wider">
          <div className="flex items-center gap-1 text-stone-400 font-medium">
            <span 
              className={`${language === 'id' ? 'text-white font-semibold' : ''} cursor-pointer hover:text-white transition`}
              onClick={() => changeLanguage('id')}
            >
              ID
            </span>
            <span>/</span>
            <span 
              className={`${language === 'en' ? 'text-white font-semibold' : ''} cursor-pointer hover:text-white transition`}
              onClick={() => changeLanguage('en')}
            >
              EN
            </span>
            <span>/</span>
            <span className="hover:text-white cursor-pointer transition-colors">中文</span>
          </div>
          <span className="text-stone-600">|</span>
          <a className="inline-flex items-center gap-1 text-amber-500 hover:text-amber-400 font-semibold tracking-wide uppercase" href="#kontak">
            <i className="w-3.5 h-3.5" data-lucide="file-check-2"></i>
            {t.tradeDesk}
          </a>
        </div>
      </div>
    </header>
  )
}

export default TopBar
