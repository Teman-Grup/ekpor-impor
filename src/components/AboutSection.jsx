import { useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'
import translations from '../translations/translations'

function AboutSection({ data }) {
  const { language } = useLanguage()
  const t = translations[language]

  useEffect(() => {
    if (window.lucide) {
      window.lucide.createIcons()
    }
  }, [language])

  if (!data) return null

  // Use translations for paragraphs
  const paragraphs = [
    t.aboutPara1,
    t.aboutPara2,
    t.aboutPara3,
    t.aboutPara4,
    t.aboutPara5
  ]

  return (
    <section className="py-16 md:py-24 bg-[#fbf9f4] border-b border-stone-200" id="tentang-kami">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Narrative & Mission statement */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-brand-sienna font-semibold text-xs tracking-wider uppercase">
              <i className="w-4 h-4" data-lucide="building-2"></i>
              {t.corporateProfile}
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 leading-tight">
              {t.aboutTitle}
            </h2>
            
            <div className="space-y-4 text-stone-600 leading-relaxed text-sm sm:text-base">
              {paragraphs.map((paragraph, index) => (
                <p key={index}>
                  {index === 0 && language === 'id' ? (
                    <>
                      <strong className="text-stone-900">PT. Original Jernang Asia</strong> {paragraph.replace('PT. Original Jernang Asia', '')}
                    </>
                  ) : index === 0 && language === 'en' ? (
                    <>
                      <strong className="text-stone-900">PT. Original Jernang Asia</strong> {paragraph.replace('PT. Original Jernang Asia', '')}
                    </>
                  ) : (
                    paragraph
                  )}
                </p>
              ))}
            </div>

            {/* Highlight Box Quote */}
            <div className="p-5 bg-amber-50/80 border-l-4 border-brand-sienna rounded-r-sm text-stone-800 text-sm">
              <p className="italic font-medium">
                "{t.aboutQuote}"
              </p>
            </div>
          </div>

          {/* Right: Milestones Timeline Card */}
          <div className="lg:col-span-5">
            <div className="bg-white border border-stone-200 rounded-sm p-6 shadow-sm">
              <div className="flex items-center gap-2 border-b border-stone-200 pb-3 mb-6">
                <i className="w-5 h-5 text-brand-sienna" data-lucide="clock"></i>
                <h3 className="font-serif text-lg font-bold text-stone-900">{t.ourJourney}</h3>
              </div>
              
              <div className="space-y-6 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-stone-200">
                {/* Milestone 1 */}
                <div className="relative pl-8">
                  <span className="absolute left-1.5 top-1.5 w-4 h-4 rounded-full bg-brand-crimson border-4 border-white"></span>
                  <span className="inline-block px-2 py-0.5 text-[11px] font-bold bg-brand-sienna/10 text-brand-sienna rounded mb-1">2016</span>
                  <h4 className="text-sm font-bold text-stone-900">{t.milestone1Title}</h4>
                  <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                    {t.milestone1Desc}
                  </p>
                </div>
                
                {/* Milestone 2 */}
                <div className="relative pl-8">
                  <span className="absolute left-1.5 top-1.5 w-4 h-4 rounded-full bg-amber-600 border-4 border-white"></span>
                  <span className="inline-block px-2 py-0.5 text-[11px] font-bold bg-amber-100 text-amber-800 rounded mb-1">2018 - 2020</span>
                  <h4 className="text-sm font-bold text-stone-900">{t.milestone2Title}</h4>
                  <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                    {t.milestone2Desc}
                  </p>
                </div>
                
                {/* Milestone 3 */}
                <div className="relative pl-8">
                  <span className="absolute left-1.5 top-1.5 w-4 h-4 rounded-full bg-emerald-700 border-4 border-white"></span>
                  <span className="inline-block px-2 py-0.5 text-[11px] font-bold bg-emerald-100 text-emerald-800 rounded mb-1">
                    2021 - {language === 'id' ? 'SEKARANG' : 'PRESENT'}
                  </span>
                  <h4 className="text-sm font-bold text-stone-900">{t.milestone3Title}</h4>
                  <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                    {t.milestone3Desc}
                  </p>
                </div>
              </div>
              
              {/* Facilities Small Banner */}
              <div className="mt-8 p-3 bg-stone-900 text-stone-100 rounded text-center flex items-center justify-center gap-2 text-xs">
                <i className="w-4 h-4 text-amber-400" data-lucide="shield-check"></i>
                <span>{t.facilityBadge}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
