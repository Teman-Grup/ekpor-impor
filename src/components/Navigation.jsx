import { useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'
import translations from '../translations/translations'

function Navigation({ data }) {
  const { language } = useLanguage()
  const t = translations[language]

  useEffect(() => {
    if (window.lucide) {
      window.lucide.createIcons()
    }
  }, [])

  if (!data) return null

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-stone-200 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo Identification */}
        <a className="flex items-center gap-3.5 group" href="#">
          <div className="w-12 h-12 flex-shrink-0 bg-stone-50 border border-stone-200 rounded-sm p-1 shadow-sm flex items-center justify-center">
            <img 
              alt="PT. Original Jernang Asia Emblem" 
              className="w-full h-full object-contain" 
              src="https://lh3.googleusercontent.com/aida/AEtjO1X2rg3ru0z-WwE_z1dhWflRfkkKBXCbRUzd4ce4bx4G6xhUp8TeV2fvsW90EDaLo1mlSbSyVP8P89lQmNjvnjKBMC1KEilpv2lACFtjij9aTo-R73gbcNwJdj4YDMQLNOYTQIB004GdX8oBUxvT7GN9nrKAjvhvq30w9zQerKu1Pb7LcZ4oyj7w00F2S6SKOAdGXA_1TP8YloMUbJf_pElQZlRsXF10x-JdXs1Zfu0qRMQ8GL07wOPO1A"
            />
          </div>
          <div>
            <span className="block font-serif text-lg sm:text-xl font-bold tracking-tight text-stone-900 group-hover:text-brand-crimson transition-colors leading-tight">
              {t.companyName}
            </span>
            <span className="block text-[10px] sm:text-[11px] font-semibold tracking-widest text-brand-sienna uppercase">
              {t.tagline}
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center space-x-6 text-[13px] font-medium text-stone-700">
          <a className="hover:text-brand-sienna transition-colors py-2 border-b-2 border-transparent hover:border-brand-sienna" href="#tentang-kami">{t.aboutUs}</a>
          <a className="hover:text-brand-sienna transition-colors py-2 border-b-2 border-transparent hover:border-brand-sienna" href="#bisnis-pengolahan">{t.business}</a>
          <a className="hover:text-brand-sienna transition-colors py-2 border-b-2 border-transparent hover:border-brand-sienna" href="#komoditas">{t.commodities}</a>
          <a className="hover:text-brand-sienna transition-colors py-2 border-b-2 border-transparent hover:border-brand-sienna" href="#alur-operasional">{t.operational}</a>
          <a className="hover:text-brand-sienna transition-colors py-2 border-b-2 border-transparent hover:border-brand-sienna" href="#portofolio-ekspor">{t.portfolio}</a>
          <a className="hover:text-brand-sienna transition-colors py-2 border-b-2 border-transparent hover:border-brand-sienna" href="#legalitas">{t.legality}</a>
          <a className="hover:text-brand-sienna transition-colors py-2 border-b-2 border-transparent hover:border-brand-sienna" href="#kontak">{t.contact}</a>
        </div>

        {/* Action Button */}
        <div className="flex items-center gap-3">
          <a 
            className="inline-flex items-center justify-center px-5 py-2.5 bg-brand-sienna hover:bg-brand-crimson text-white text-xs font-semibold tracking-wider uppercase rounded-sm shadow transition duration-200" 
            href="#kontak"
          >
            {t.requestCatalog}
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
