import { useEffect, useState } from 'react'
import { useLanguage } from '../context/LanguageContext'

function Navigation({ data }) {
  const { t } = useLanguage()
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    if (window.lucide) {
      window.lucide.createIcons()
    }

    // Handle scroll to detect active section
    const handleScroll = () => {
      const sections = ['tentang-kami', 'bisnis-pengolahan', 'komoditas', 'alur-operasional', 'portofolio-ekspor', 'legalitas', 'kontak']
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial check

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!data) return null

  const isActive = (section) => activeSection === section

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
          <div className="ml-1">
            <span className="block font-serif text-lg sm:text-xl font-bold tracking-tight text-stone-900 group-hover:text-brand-crimson transition-colors leading-tight">
              {t.companyName}
            </span>
            <span className="block text-[10px] sm:text-[11px] font-semibold tracking-widest text-brand-sienna uppercase mt-0.5">
              {t.tagline}
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center space-x-6 text-[13px] font-medium text-stone-700">
          <a 
            className={`hover:text-brand-sienna transition-colors py-2 border-b-2 ${isActive('tentang-kami') ? 'border-brand-sienna text-brand-sienna' : 'border-transparent'}`}
            href="#tentang-kami"
          >
            {t.aboutUs}
          </a>
          <a 
            className={`hover:text-brand-sienna transition-colors py-2 border-b-2 ${isActive('bisnis-pengolahan') ? 'border-brand-sienna text-brand-sienna' : 'border-transparent'}`}
            href="#bisnis-pengolahan"
          >
            {t.business}
          </a>
          <a 
            className={`hover:text-brand-sienna transition-colors py-2 border-b-2 ${isActive('komoditas') ? 'border-brand-sienna text-brand-sienna' : 'border-transparent'}`}
            href="#komoditas"
          >
            {t.commodities}
          </a>
          <a 
            className={`hover:text-brand-sienna transition-colors py-2 border-b-2 ${isActive('alur-operasional') ? 'border-brand-sienna text-brand-sienna' : 'border-transparent'}`}
            href="#alur-operasional"
          >
            {t.operational}
          </a>
          <a 
            className={`hover:text-brand-sienna transition-colors py-2 border-b-2 ${isActive('portofolio-ekspor') ? 'border-brand-sienna text-brand-sienna' : 'border-transparent'}`}
            href="#portofolio-ekspor"
          >
            {t.portfolio}
          </a>
          <a 
            className={`hover:text-brand-sienna transition-colors py-2 border-b-2 ${isActive('legalitas') ? 'border-brand-sienna text-brand-sienna' : 'border-transparent'}`}
            href="#legalitas"
          >
            {t.legality}
          </a>
          <a 
            className={`hover:text-brand-sienna transition-colors py-2 border-b-2 ${isActive('kontak') ? 'border-brand-sienna text-brand-sienna' : 'border-transparent'}`}
            href="#kontak"
          >
            {t.contact}
          </a>
        </div>

        {/* Action Button with margin */}
        <div className="flex items-center gap-3 ml-8">
          <a 
            className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 bg-brand-sienna hover:bg-brand-crimson text-white text-xs font-semibold tracking-wider uppercase rounded-sm shadow transition duration-200 whitespace-nowrap" 
            href="#kontak"
          >
            <span>REQUEST CATALOG</span>
            <span className="text-stone-300">/</span>
            <span>INQUIRY</span>
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
