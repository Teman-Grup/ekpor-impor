import { useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'
import Reveal from './Reveal'
import Marquee from './Marquee'

const marqueeItems = [
  'ORIGINAL JERNANG ASIA',
  "DRAGON'S BLOOD",
  'KAYU GAHARU',
  'KEMENYAN',
  'DAMAR BATU',
  'LIDI',
  'BUAH PINANG'
]

function Footer({ data }) {
  const { t, language } = useLanguage()
  const currentYear = new Date().getFullYear()

  useEffect(() => {
    if (window.lucide) {
      window.lucide.createIcons()
    }
  }, [language])

  const phone = data?.phone || '+62 812 600 100 28'
  const email = data?.email || 'ptoriginaljernangasia@gmail.com'
  const location = data?.location || 'Medan, Sumatera Utara, Indonesia'

  const contactItems = [
    {
      href: `tel:${phone.replace(/\s/g, '')}`,
      icon: 'phone',
      label: 'Telepon / WhatsApp',
      value: phone
    },
    {
      href: `mailto:${email}`,
      icon: 'mail',
      label: 'Email Perdagangan',
      value: email
    }
  ]

  const quickLinks = [
    { href: '#tentang-kami', label: t.aboutUs },
    { href: '#bisnis-pengolahan', label: t.business },
    { href: '#komoditas', label: t.commodities },
    { href: '#portofolio-ekspor', label: t.portfolio },
    { href: '#legalitas', label: t.legality },
    { href: '#kontak', label: t.contact }
  ]

  return (
    <footer id="kontak" className="relative overflow-hidden bg-[#0d1a12] text-stone-300">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_480px_at_78%_0%,rgba(180,59,24,0.22),transparent_62%),radial-gradient(700px_420px_at_10%_100%,rgba(200,75,35,0.12),transparent_60%)]"
      />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 grid-lines opacity-25" />

      {/* Big marquee */}
      <div className="relative border-b border-white/[0.08] py-7">
        <Marquee
          items={marqueeItems}
          duration={52}
          className="text-outline font-serif text-[2.2rem] font-bold uppercase leading-none tracking-tight sm:text-[3.4rem]"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-6">
            <Reveal variant="fade">
              <span className="inline-flex items-center gap-3 text-[10.5px] font-bold uppercase tracking-[0.28em] text-amber-400/90">
                <span className="h-px w-8 bg-amber-400/50" />
                {t.contact}
              </span>
            </Reveal>
            <Reveal as="h2" variant="mask" delay={80} className="mt-5 max-w-xl font-serif text-3xl font-bold leading-[1.08] tracking-tight text-amber-50 sm:text-4xl lg:text-[2.9rem]">
              {t.contactTrade}
            </Reveal>
            <Reveal variant="up" delay={180}>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-stone-400/90">
                {t.footerDesc}
              </p>
            </Reveal>

            <Reveal variant="up" delay={260} className="mt-8">
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href={`mailto:${email}`}
                  className="btn-sheen group inline-flex items-center justify-center gap-2.5 rounded-md bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-stone-950 shadow-[0_18px_45px_-18px_rgba(245,158,11,0.85)] transition-transform duration-300 hover:-translate-y-0.5"
                >
                  <i className="h-4 w-4" data-lucide="send"></i>
                  {t.requestCatalog}
                </a>
                <a
                  href={`tel:${phone.replace(/\s/g, '')}`}
                  className="group inline-flex items-center justify-center gap-2.5 rounded-md border border-white/15 bg-white/[0.04] px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-sm transition-colors hover:border-amber-400/50 hover:bg-white/[0.08]"
                >
                  <i className="h-4 w-4 text-amber-400" data-lucide="phone-call"></i>
                  {phone}
                </a>
              </div>
            </Reveal>

            <Reveal variant="fade" delay={340}>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-[10px] uppercase tracking-[0.2em] text-stone-500">
                <span className="inline-flex items-center gap-1.5">
                  <i className="h-3.5 w-3.5 text-brand-sienna" data-lucide="map-pin"></i>
                  {location}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <i className="h-3.5 w-3.5 text-brand-sienna" data-lucide="clock"></i>
                  GMT+7
                </span>
              </div>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:col-span-6 lg:pl-10">
            <Reveal variant="up" delay={120}>
              <h3 className="text-[10.5px] font-bold uppercase tracking-[0.24em] text-amber-400/80">
                {t.exportCommodities}
              </h3>
              <ul className="mt-5 space-y-3 text-sm">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="group inline-flex items-center gap-2 text-stone-400 transition-colors hover:text-amber-100"
                    >
                      <span className="h-px w-0 bg-amber-400 transition-all duration-300 group-hover:w-4" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal variant="up" delay={220}>
              <h3 className="text-[10.5px] font-bold uppercase tracking-[0.24em] text-amber-400/80">
                {t.contact}
              </h3>
              <ul className="mt-5 space-y-4">
                {contactItems.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="group flex items-start gap-3 rounded-lg border border-white/[0.07] bg-white/[0.03] p-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-amber-400/30 hover:bg-white/[0.06]"
                    >
                      <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md bg-amber-500/10 text-amber-400">
                        <i className="h-4 w-4" data-lucide={item.icon}></i>
                      </span>
                      <span className="min-w-0">
                        <span className="block text-[9px] uppercase tracking-[0.16em] text-stone-500">
                          {item.label}
                        </span>
                        <span className="mt-0.5 block truncate text-xs text-stone-200">
                          {item.value}
                        </span>
                      </span>
                      <i
                        className="ml-auto mt-1 h-3.5 w-3.5 flex-shrink-0 text-stone-600 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-amber-400"
                        data-lucide="arrow-up-right"
                      ></i>
                    </a>
                  </li>
                ))}
                <li className="flex items-start gap-3 rounded-lg border border-white/[0.07] bg-white/[0.03] p-3.5">
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md bg-amber-500/10 text-amber-400">
                    <i className="h-4 w-4" data-lucide="building-2"></i>
                  </span>
                  <span>
                    <span className="block text-[9px] uppercase tracking-[0.16em] text-stone-500">
                      Kantor & Fasilitas
                    </span>
                    <span className="mt-0.5 block text-xs leading-relaxed text-stone-200">
                      Jl. Garu VI No. 24, Harjosari I, Medan Amplas
                    </span>
                  </span>
                </li>
              </ul>
            </Reveal>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/[0.08]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-[10px] uppercase tracking-[0.18em] text-stone-500 sm:flex-row sm:px-6 lg:px-8">
          <p>{t.copyright || `© ${currentYear} PT. Original Jernang Asia. All rights reserved.`}</p>
          <div className="flex items-center gap-4">
            <span>EST. 2016</span>
            <span className="h-1 w-1 rounded-full bg-stone-600" />
            <span>Medan — Indonesia</span>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="group inline-flex items-center gap-1.5 text-stone-400 transition-colors hover:text-amber-300"
            >
              Top
              <i className="h-3 w-3 transition-transform duration-300 group-hover:-translate-y-0.5" data-lucide="arrow-up"></i>
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
