import { useLanguage } from '../context/LanguageContext'

function CommoditiesSection({ data }) {
  const { t } = useLanguage()
  
  if (!data) return null

  const featured = data.filter(c => c.featured)
  const others = data.filter(c => !c.featured)

  return (
    <section className="py-16 md:py-24 bg-white border-b border-stone-200" id="komoditas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-stone-200 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-brand-sienna block mb-1">
              {t.officialCatalog}
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900">
              {t.commoditiesTitle}
            </h2>
          </div>
        </div>

        {/* Featured Commodities */}
        {featured.length > 0 && (
          <div className="mb-12">
            {featured.map((commodity) => (
              <div key={commodity.id} className="bg-stone-900 text-white rounded-sm overflow-hidden shadow-md border border-stone-800">
                <div className="grid grid-cols-1 lg:grid-cols-12">
                  <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-[420px] bg-stone-950">
                    <img 
                      alt={commodity.name} 
                      className="w-full h-full object-cover" 
                      src={commodity.image}
                      onError={(e) => e.target.src = 'https://via.placeholder.com/800x600?text=No+Image'}
                    />
                    <div className="absolute top-4 left-4 bg-brand-crimson text-white text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-sm shadow">
                      {t.mainCommodity}
                    </div>
                  </div>
                  
                  <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between bg-gradient-to-br from-stone-900 via-stone-900 to-stone-950">
                    <div>
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-800 pb-3 mb-4">
                        {commodity.hsCode && (
                          <span className="text-xs font-mono text-amber-400">
                            HS CODE: {commodity.hsCode}
                          </span>
                        )}
                        {commodity.grade && (
                          <span className="text-xs px-2.5 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800 font-medium">
                            {commodity.grade}
                          </span>
                        )}
                      </div>
                      
                      <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-3">
                        {commodity.name}
                      </h3>
                      
                      <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                        {commodity.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Other Commodities */}
        {others.length > 0 && (
          <>
            <h3 className="text-lg font-serif font-bold text-stone-800 mb-6 flex items-center gap-2">
              <span>📦</span> {t.otherCommodities}
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {others.map((commodity) => (
                <div 
                  key={commodity.id} 
                  className="bg-stone-50 border border-stone-200 rounded-sm overflow-hidden flex flex-col justify-between hover:shadow-md transition"
                >
                  <div className="h-44 relative bg-stone-200 overflow-hidden">
                    <img 
                      alt={commodity.name} 
                      className="w-full h-full object-cover" 
                      src={commodity.image}
                      onError={(e) => e.target.src = 'https://via.placeholder.com/400x300?text=No+Image'}
                    />
                  </div>
                  
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="font-serif text-lg font-bold text-stone-900">
                        {commodity.name}
                      </h4>
                      <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                        {commodity.description}
                      </p>
                    </div>
                    
                    {commodity.grade && (
                      <div className="mt-4 pt-3 border-t border-stone-200 flex justify-between items-center text-xs">
                        <span className="text-stone-500 font-medium">Grade: {commodity.grade}</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  )
}

export default CommoditiesSection
