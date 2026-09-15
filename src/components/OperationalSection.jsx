import { useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'

function OperationalSection() {
  const { t, language } = useLanguage()
  
  useEffect(() => {
    if (window.lucide) {
      window.lucide.createIcons()
    }
  }, [language])

  const steps = [
    { num: '01', title: t.step1, desc: t.step1Desc, label: t.step1Label },
    { num: '02', title: t.step2, desc: t.step2Desc, label: t.step2Label },
    { num: '03', title: t.step3, desc: t.step3Desc, label: t.step3Label },
    { num: '04', title: t.step4, desc: t.step4Desc, label: t.step4Label },
    { num: '05', title: t.step5, desc: t.step5Desc, label: t.step5Label },
    { num: '06', title: t.step6, desc: t.step6Desc, label: t.step6Label },
    { num: '07', title: t.step7, desc: t.step7Desc, label: t.step7Label }
  ]

  const colors = ['bg-brand-crimson', 'bg-brand-sienna', 'bg-amber-700', 'bg-brand-crimson', 'bg-amber-800', 'bg-stone-700', 'bg-emerald-700']

  return (
    <section className="py-16 md:py-20 bg-[#f4f1ea] border-b border-stone-200" id="alur-operasional">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-sienna block mb-1">{t.exportPipeline}</span>
          <h2 className="text-3xl font-serif font-bold text-stone-900">{t.operationalTitle}</h2>
          <p className="text-stone-600 text-xs sm:text-sm mt-2">
            {t.operationalSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-4 rounded border border-stone-200 text-center flex flex-col items-center">
              <span className={`w-8 h-8 rounded-full ${colors[index]} text-white font-mono text-xs font-bold flex items-center justify-center mb-2`}>
                {step.num}
              </span>
              <h4 className="font-bold text-xs text-stone-900">{step.title}</h4>
              <p className="text-[11px] text-stone-500 mt-1 leading-snug">{step.desc}</p>
              <span className="mt-3 text-[10px] text-stone-400 font-mono">{step.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OperationalSection
