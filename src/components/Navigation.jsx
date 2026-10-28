import { useEffect, useState } from 'react'
import { useLanguage } from '../context/LanguageContext'

function Navigation({ data }) {
  const { language, changeLanguage, t } = useLanguage()
  const [activeSection, setActiveSection] = useState('')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    if (window.lucide) {
      window.lucide.createIcons()
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24)

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
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

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

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isMobileMenuOpen])

  useEffect(() => {
    if (window.lucide) {
      window.lucide.createIcons()
    }
  }, [isMobileMenuOpen])

  const isActive = (section) => activeSection === section

  const navLinks = [
    { href: '#tentang-kami', id: 'tentang-kami', label: t.aboutUs || 'Tentang Kami' },
    { href: '#bisnis-pengolahan', id: 'bisnis-pengolahan', label: t.business || 'Bisnis & Pengolahan' },
    { href: '#komoditas', id: 'komoditas', label: t.commodities || 'Komoditas Unggulan' },
    { href: '#alur-operasional', id: 'alur-operasional', label: t.operational || 'Alur Operasional' },
    { href: '#portofolio-ekspor', id: 'portofolio-ekspor', label: t.portfolio || 'Portofolio Ekspor' },
    { href: '#legalitas', id: 'legalitas', label: t.legality || 'Legalitas & Fasilitas' },
    { href: '#kontak', id: 'kontak', label: t.contact || 'Kontak' }
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
    <nav
      className={`relative w-full border-b transition-[background-color,box-shadow,border-color,backdrop-filter] duration-500 ${
        isScrolled
          ? 'border-stone-200/80 bg-white/85 shadow-[0_18px_40px_-28px_rgba(28,27,26,0.5)] backdrop-blur-xl'
          : 'border-transparent bg-white/60 backdrop-blur-md'
      }`}
    >
      <div className="w-full px-3 sm:px-6 lg:px-8 xl:px-10">
        <div
          className={`flex items-center justify-between gap-2 transition-[height] duration-500 ${
            isScrolled ? 'h-14 sm:h-16' : 'h-16 sm:h-20'
          }`}
        >
          {/* Brand */}
          <a
            className="group flex flex-shrink-0 items-center gap-2 sm:gap-3"
            href="#"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-md border border-stone-200 bg-white p-1 shadow-sm transition-transform duration-500 group-hover:-rotate-3 group-hover:scale-105 sm:h-11 sm:w-11">
              <img
                alt="PT. Original Jernang Asia Logo"
                className="h-full w-full object-contain"
                src={data?.logoUrl || data?.logo || '/assets/logo.png'}
                onError={(e) => {
                  e.currentTarget.onerror = null
                  e.currentTarget.src = '/assets/logo.png'
                }}
              />
            </div>
            <div className="flex flex-col justify-center">
              <span className="whitespace-nowrap font-serif text-sm font-bold leading-tight tracking-tight text-stone-900 transition-colors group-hover:text-brand-crimson sm:text-base xl:text-[17px]">
                {data?.companyName || t.companyName || 'PT. ORIGINAL JERNANG ASIA'}
              </span>
              <span className="mt-0.5 hidden whitespace-nowrap text-[9.5px] font-semibold uppercase leading-tight tracking-[0.18em] text-brand-sienna 2xl:block">
                {data?.tagline || t.tagline || 'INDONESIAN NATURAL BOTANICAL COMMODITIES & TRADE'}
              </span>
            </div>
          </a>

          {/* Desktop links */}
          <div className="hidden items-center space-x-3 text-[12px] font-medium text-stone-600 lg:flex xl:space-x-5">
            {navLinks.map((link) => (
              <a
                key={link.id}
                className={`nav-link whitespace-nowrap py-2 transition-colors duration-300 hover:text-brand-crimson ${
                  isActive(link.id) ? 'is-active font-semibold text-brand-crimson' : ''
                }`}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex flex-shrink-0 items-center gap-2 sm:gap-3">
            <a
              className="btn-sheen group hidden items-center justify-center gap-1.5 rounded-md bg-gradient-to-r from-brand-sienna to-brand-crimson px-3.5 py-2.5 text-[10px] font-bold uppercase tracking-[0.12em] text-white shadow-[0_12px_28px_-14px_rgba(138,36,16,0.9)] transition-transform duration-300 hover:-translate-y-0.5 xl:inline-flex"
              href="#kontak"
              onClick={(e) => handleNavClick(e, '#kontak')}
            >
              <span>INQUIRY</span>
              <span className="text-white/40">/</span>
              <span>CATALOG</span>
              <i className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" data-lucide="arrow-up-right"></i>
            </a>

            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-stone-700 transition hover:bg-stone-100 hover:text-brand-crimson lg:hidden"
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {isMobileMenuOpen && (
        <>
          <div
            className="overlay-in fixed inset-0 z-40 bg-stone-950/45 backdrop-blur-sm lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />

          <div className="drawer-in absolute inset-x-0 top-full z-50 max-h-[calc(100vh-4rem)] overflow-y-auto border-b border-stone-200 bg-brand-cream shadow-2xl lg:hidden">
            <div className="px-4 py-4">
              <p className="mb-1 px-2 text-[9px] font-bold uppercase tracking-[0.28em] text-stone-400">
                NAVIGATION
              </p>
              <div className="divide-y divide-stone-200/70">
                {navLinks.map((link, index) => (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`group flex items-center justify-between px-2 py-3.5 transition-colors ${
                      isActive(link.id) ? 'text-brand-crimson' : 'text-stone-700 hover:text-brand-crimson'
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <span className="font-mono text-[10px] text-stone-400">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="text-sm font-medium">{link.label}</span>
                    </span>
                    <i
                      className="h-4 w-4 text-stone-300 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:text-brand-sienna"
                      data-lucide="arrow-right"
                    ></i>
                  </a>
                ))}
              </div>

              <div className="mt-4 space-y-3 border-t border-stone-200 pt-4">
                <div className="flex items-center justify-between rounded-md border border-stone-200 bg-white px-3 py-2 text-xs">
                  <span className="font-medium text-stone-500">Bahasa / Language</span>
                  <div className="flex items-center gap-2 font-semibold">
                    <button
                      type="button"
                      className={`rounded px-2 py-0.5 transition ${language === 'id' ? 'bg-brand-sienna text-white' : 'text-stone-600 hover:text-stone-900'}`}
                      onClick={() => changeLanguage('id')}
                    >
                      ID
                    </button>
                    <span className="text-stone-300">|</span>
                    <button
                      type="button"
                      className={`rounded px-2 py-0.5 transition ${language === 'en' ? 'bg-brand-sienna text-white' : 'text-stone-600 hover:text-stone-900'}`}
                      onClick={() => changeLanguage('en')}
                    >
                      EN
                    </button>
                  </div>
                </div>

                <a
                  href="#kontak"
                  onClick={(e) => handleNavClick(e, '#kontak')}
                  className="flex w-full items-center justify-center gap-2 rounded-md bg-gradient-to-r from-brand-sienna to-brand-crimson px-4 py-3 text-xs font-bold uppercase tracking-[0.14em] text-white shadow-lg"
                >
                  <i className="h-4 w-4" data-lucide="file-text"></i>
                  <span>{t.requestCatalog || 'REQUEST CATALOG / INQUIRY'}</span>
                </a>

                <div className="flex items-center justify-between pt-1 text-[10px] uppercase tracking-[0.18em] text-stone-500">
                  <span className="inline-flex items-center gap-1.5">
                    <i className="h-3.5 w-3.5 text-brand-sienna" data-lucide="map-pin"></i>
                    Medan, ID
                  </span>
                  <span>EST. 2016</span>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  )
}

export default Navigation
