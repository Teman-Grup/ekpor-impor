import { useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'
import translations from '../translations/translations'

function PillarsSection({ data }) {
  const { language } = useLanguage()
  const t = translations[language]

  useEffect(() => {
    if (window.lucide) {
      window.lucide.createIcons()
    }
  }, [language])

  if (!data) return null

  // Translate pillar content
  const translatedPillars = [
    { ...data[0], title: t.pillar1Title, description: t.pillar1Desc },
    { ...data[1], title: t.pillar2Title, description: t.pillar2Desc },
    { ...data[2], title: t.pillar3Title, description: t.pillar3Desc },
    { ...data[3], title: t.pillar4Title, description: t.pillar4Desc }
  ]

  return (
    <section className="py-16 bg-stone-100/70 border-b border-stone-200" id="bisnis-pengolahan">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-sienna block mb-2">{t.mainPillars}</span>
          <h2 className="text-3xl font-serif font-bold text-stone-900">
            {t.pillarsTitle}
          </h2>
          <p className="text-stone-600 text-sm mt-3">{t.pillarsSubtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {translatedPillars.map((pillar, index) => (
            <div 
              key={pillar.id || index} 
              className="bg-white p-6 rounded-sm border border-stone-200 shadow-sm flex flex-col justify-between hover:border-brand-sienna transition duration-200"
            >
              <div>
                <div className="w-12 h-12 rounded bg-amber-50 text-brand-sienna flex items-center justify-center mb-4">
                  <i className="w-6 h-6" data-lucide={pillar.icon}></i>
                </div>
                <span className="text-[11px] font-mono font-bold text-stone-400 uppercase tracking-widest block">
                  Pillar {pillar.number}
                </span>
                <h3 className="text-lg font-serif font-bold text-stone-900 mt-1 mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-stone-100 flex items-center text-xs font-semibold text-brand-sienna">
                <span>{pillar.badge || 'Supply Network'}</span>
                <i className="w-3.5 h-3.5 ml-1" data-lucide="chevron-right"></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PillarsSection
