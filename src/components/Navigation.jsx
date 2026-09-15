import { useEffect, useState } from 'react'
import { useLanguage } from '../context/LanguageContext'

function Navigation({ data }) {
  const { language, changeLanguage, t } = useLanguage()
  const [activeSection, setActiveSection] = useState('')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    if (window.lucide) {
      window.lucide.createIcons()
    }

    // Handle scroll to detect active section
    const handleScroll = () => {
      const sections = [
        'tentang-kami',
        'bisnis-pengolahan',
        'komoditas',
        'alur-operasional',
        'portofolio-ekspor',
        'legalitas',
        'kontak'
      ]

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial check

    // Close mobile menu on resize to desktop
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isMobileMenuOpen])

  // Refresh lucide icons when mobile menu toggles
  useEffect(() => {
    if (window.lucide) {
      window.lucide.createIcons()
    }
  }, [isMobileMenuOpen])

  const isActive = (section) => activeSection === section

  const navLinks = [
    { href: '#tentang-kami', id: 'tentang-kami', label: t.aboutUs || 'Tentang Kami', icon: 'info' },
    { href: '#bisnis-pengolahan', id: 'bisnis-pengolahan', label: t.business || 'Bisnis & Pengolahan', icon: 'cog' },
    { href: '#komoditas', id: 'komoditas', label: t.commodities || 'Komoditas Unggulan', icon: 'package' },
    { href: '#alur-operasional', id: 'alur-operasional', label: t.operational || 'Alur Operasional', icon: 'workflow' },
    { href: '#portofolio-ekspor', id: 'portofolio-ekspor', label: t.portfolio || 'Portofolio Ekspor', icon: 'globe' },
    { href: '#legalitas', id: 'legalitas', label: t.legality || 'Legalitas & Fasilitas', icon: 'shield-check' },
    { href: '#kontak', id: 'kontak', label: t.contact || 'Kontak', icon: 'phone-call' },
  ]

  const handleNavClick = (e, href) => {
    setIsMobileMenuOpen(false)
    const targetElement = document.querySelector(href)
    if (targetElement) {
      e.preventDefault()
      targetElement.scrollIntoView({ behavior: 'smooth' })
      window.history.pushState(null, '', href)
    }
  }

  return (
    <nav className="w-full bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-sm transition-all">
      <div className="w-full px-3 sm:px-6 lg:px-8 xl:px-10">
        <div className="h-16 sm:h-20 flex items-center justify-between gap-2">
          
          {/* Brand Logo & Name */}
          <a 
            className="flex items-center gap-1.5 sm:gap-3 group flex-shrink-0" 
            href="#"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <div className="w-8 h-8 sm:w-11 sm:h-11 flex-shrink-0 bg-stone-50 border border-stone-200 rounded-sm p-0.5 sm:p-1 shadow-sm flex items-center justify-center transition-transform group-hover:scale-105">
              <img 
                alt="PT. Original Jernang Asia Emblem" 
                className="w-full h-full object-contain" 
                src="https://lh3.googleusercontent.com/aida/AEtjO1X2rg3ru0z-WwE_z1dhWflRfkkKBXCbRUzd4ce4bx4G6xhUp8TeV2fvsW90EDaLo1mlSbSyVP8P89lQmNjvnjKBMC1KEilpv2lACFtjij9aTo-R73gbcNwJdj4YDMQLNOYTQIB004GdX8oBUxvT7GN9nrKAjvhvq30w9zQerKu1Pb7LcZ4oyj7w00F2S6SKOAdGXA_1TP8YloMUbJf_pElQZlRsXF10x-JdXs1Zfu0qRMQ8GL07wOPO1A"
              />
            </div>
            <div className="flex flex-col justify-center">
              <span className="font-serif text-sm sm:text-base lg:text-lg xl:text-xl font-bold tracking-tight text-stone-900 group-hover:text-brand-crimson transition-colors leading-tight whitespace-nowrap">
                {t.companyName || 'PT. ORIGINAL JERNANG ASIA'}
              </span>
              <span className="hidden xl:block text-[10px] font-semibold tracking-wider text-brand-sienna uppercase mt-0.5 leading-tight whitespace-nowrap">
                {t.tagline || 'INDONESIAN NATURAL BOTANICAL COMMODITIES & TRADE'}
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-5 xl:space-x-6 text-[13px] font-medium text-stone-700">
            {navLinks.map((link) => (
              <a
                key={link.id}
                className={`hover:text-brand-sienna transition-colors py-2 border-b-2 font-medium whitespace-nowrap ${
                  isActive(link.id)
                    ? 'border-brand-sienna text-brand-sienna font-semibold'
                    : 'border-transparent text-stone-700'
                }`}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Header Actions */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            {/* Desktop / Tablet CTA Button */}
            <a 
              className="hidden sm:inline-flex items-center justify-center gap-1.5 px-3.5 sm:px-4 lg:px-5 py-2 sm:py-2.5 bg-brand-sienna hover:bg-brand-crimson text-white text-[11px] lg:text-xs font-semibold tracking-wider uppercase rounded-sm shadow-sm hover:shadow transition duration-200 whitespace-nowrap" 
              href="#kontak"
              onClick={(e) => handleNavClick(e, '#kontak')}
            >
              <span>INQUIRY</span>
              <span className="text-stone-300">/</span>
              <span>CATALOG</span>
            </a>

            {/* Mobile Hamburger Menu Toggle Button */}
            <button
              type="button"
              className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-stone-700 hover:text-brand-sienna hover:bg-stone-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-sienna transition"
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                // Close Icon (X)
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Hamburger Icon
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer / Collapsible Menu */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop Blur Overlay */}
          <div 
            className="fixed inset-0 top-16 sm:top-20 bg-stone-900/40 backdrop-blur-sm z-40 lg:hidden transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Mobile Menu Panel */}
          <div 
            className="relative z-50 lg:hidden bg-white border-b border-stone-200 shadow-xl max-h-[calc(100vh-4rem)] sm:max-h-[calc(100vh-5rem)] overflow-y-auto divide-y divide-stone-100 animate-in slide-in-from-top-2 duration-200"
          >
            {/* Nav Items List */}
            <div className="px-4 py-3 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`flex items-center justify-between px-3 py-3 rounded-md text-sm font-medium transition-colors ${
                    isActive(link.id)
                      ? 'bg-brand-sienna/10 text-brand-sienna font-semibold'
                      : 'text-stone-700 hover:bg-stone-50 hover:text-brand-sienna'
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <span className={`w-1.5 h-1.5 rounded-full ${isActive(link.id) ? 'bg-brand-sienna' : 'bg-stone-300'}`} />
                    {link.label}
                  </span>
                  <svg className="w-4 h-4 text-stone-400" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </a>
              ))}
            </div>

            {/* Language Switcher & Quick Contact inside Mobile Menu */}
            <div className="p-4 bg-stone-50/80 space-y-3">
              {/* Language Selector */}
              <div className="flex items-center justify-between bg-white px-3 py-2 rounded border border-stone-200 text-xs">
                <span className="text-stone-500 font-medium">Bahasa / Language:</span>
                <div className="flex items-center gap-2 font-semibold">
                  <button
                    type="button"
                    className={`px-2 py-0.5 rounded transition ${language === 'id' ? 'bg-brand-sienna text-white' : 'text-stone-600 hover:text-stone-900'}`}
                    onClick={() => changeLanguage('id')}
                  >
                    ID
                  </button>
                  <span className="text-stone-300">|</span>
                  <button
                    type="button"
                    className={`px-2 py-0.5 rounded transition ${language === 'en' ? 'bg-brand-sienna text-white' : 'text-stone-600 hover:text-stone-900'}`}
                    onClick={() => changeLanguage('en')}
                  >
                    EN
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 gap-2 pt-1">
                <a
                  href="#kontak"
                  onClick={(e) => handleNavClick(e, '#kontak')}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-brand-sienna hover:bg-brand-crimson text-white text-xs font-bold uppercase tracking-wider rounded-sm shadow transition"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>{t.requestCatalog || 'REQUEST CATALOG / INQUIRY'}</span>
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  )
}

export default Navigation

