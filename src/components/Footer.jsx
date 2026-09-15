import { useLanguage } from '../context/LanguageContext'

function Footer({ data }) {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-stone-900 text-stone-300 py-12 border-t border-stone-800" id="kontak">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white font-serif font-bold text-lg mb-4">
              PT. Original Jernang Asia
            </h3>
            <p className="text-sm text-stone-400 leading-relaxed">
              {t.footerDesc}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t.exportCommodities}</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#tentang-kami" className="hover:text-brand-sienna transition">{t.aboutUs}</a></li>
              <li><a href="#bisnis-pengolahan" className="hover:text-brand-sienna transition">{t.business}</a></li>
              <li><a href="#komoditas" className="hover:text-brand-sienna transition">{t.commodities}</a></li>
              <li><a href="#kontak" className="hover:text-brand-sienna transition">{t.contact}</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t.contact}</h4>
            <ul className="space-y-2 text-sm">
              {data?.phone && (
                <li className="flex items-center gap-2">
                  <span>📞</span>
                  <a href={`tel:${data.phone}`} className="hover:text-brand-sienna transition">
                    {data.phone}
                  </a>
                </li>
              )}
              {data?.email && (
                <li className="flex items-center gap-2">
                  <span>✉️</span>
                  <a href={`mailto:${data.email}`} className="hover:text-brand-sienna transition">
                    {data.email}
                  </a>
                </li>
              )}
              {data?.location && (
                <li className="flex items-center gap-2">
                  <span>📍</span>
                  <span>{data.location}</span>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-stone-800 text-center text-sm text-stone-500">
          <p>{t.copyright}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
