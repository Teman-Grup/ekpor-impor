function PillarsSection({ data }) {
  if (!data) return null

  return (
    <section className="py-16 bg-stone-100/70 border-b border-stone-200" id="bisnis-pengolahan">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-sienna block mb-2">PILAR UTAMA BISNIS</span>
          <h2 className="text-3xl font-serif font-bold text-stone-900">
            Kapabilitas Pengolahan & Perdagangan Terintegrasi
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.map((pillar, index) => (
            <div 
              key={pillar.id || index} 
              className="bg-white p-6 rounded-sm border border-stone-200 shadow-sm flex flex-col justify-between hover:border-brand-sienna transition duration-200"
            >
              <div>
                <div className="w-12 h-12 rounded bg-amber-50 text-brand-sienna flex items-center justify-center mb-4 text-2xl">
                  {getIcon(pillar.icon)}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function getIcon(iconName) {
  const icons = {
    'package-search': '📦',
    'cog': '⚙️',
    'flask-conical': '🧪',
    'globe': '🌐',
    'star': '⭐',
    'package': '📦',
    'shield': '🛡️'
  }
  return icons[iconName] || '📌'
}

export default PillarsSection
