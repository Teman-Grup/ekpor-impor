import { useEffect, useState } from 'react'
import { useLanguage } from '../context/LanguageContext'

function TopBar({ data }) {
  const { language, changeLanguage, t } = useLanguage()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    if (window.lucide) {
      window.lucide.createIcons()
    }
  }, [language])

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 32)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const phone = data?.phone || '+62 812 600 100 28'
  const email = data?.email || 'ptoriginaljernangasia@gmail.com'

  return (
    <header
      className={`w-full overflow-hidden bg-[#14130f] text-[#c9c5be] transition-[max-height,opacity] duration-500 ease-out ${
        isScrolled ? 'max-h-0 opacity-0' : 'max-h-28 opacity-100'
      }`}
    >
      <div className="h-px w-full bg-gradient-to-r from-transparent via-brand-sienna/70 to-transparent" />
      <div className="mx-auto flex w-full flex-wrap items-center justify-between gap-2 px-3 py-2 sm:flex-nowrap sm:px-6 lg:px-8 xl:px-10">
        <div className="flex flex-wrap items-center gap-3 text-[11px] sm:gap-6 sm:text-xs">
          <span className="hidden items-center gap-1.5 text-stone-400 sm:inline-flex">
            <i className="h-3.5 w-3.5 text-brand-sienna" data-lucide="map-pin"></i>
            {t.location}
          </span>
          <a
            className="group inline-flex items-center gap-1.5 transition-colors hover:text-white"
            href={`tel:${phone.replace(/\s/g, '')}`}
          >
            <i className="h-3.5 w-3.5 text-brand-sienna" data-lucide="phone"></i>
            <span>{phone}</span>
          </a>
          <a
            className="hidden items-center gap-1.5 transition-colors hover:text-white md:inline-flex"
            href={`mailto:${email}`}
          >
            <i className="h-3.5 w-3.5 text-brand-sienna" data-lucide="mail"></i>
            <span>{email}</span>
          </a>
        </div>

        <div className="ml-auto flex items-center gap-3 sm:gap-5 text-[10px] uppercase tracking-[0.18em]">
          <span className="hidden items-center gap-1.5 text-stone-500 lg:inline-flex">
            <span className="h-1 w-1 rounded-full bg-emerald-500" />
            Open for trade inquiries
          </span>
          <div className="flex items-center gap-1 font-medium text-stone-400">
            <button
              type="button"
              className={`px-1 transition-colors ${language === 'id' ? 'font-bold text-amber-400' : 'hover:text-white'}`}
              onClick={() => changeLanguage('id')}
              aria-label="Bahasa Indonesia"
            >
              ID
            </button>
            <span className="text-stone-600">/</span>
            <button
              type="button"
              className={`px-1 transition-colors ${language === 'en' ? 'font-bold text-amber-400' : 'hover:text-white'}`}
              onClick={() => changeLanguage('en')}
              aria-label="English"
            >
              EN
            </button>
          </div>
          <span className="hidden text-stone-700 sm:inline">|</span>
          <a
            className="group inline-flex items-center gap-1.5 font-semibold uppercase tracking-[0.14em] text-amber-500 transition-colors hover:text-amber-400"
            href="#kontak"
          >
            <i className="h-3.5 w-3.5" data-lucide="file-check-2"></i>
            <span>{t.tradeDesk}</span>
            <i
              className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5"
              data-lucide="arrow-up-right"
            ></i>
          </a>
        </div>
      </div>
    </header>
  )
}

export default TopBar
