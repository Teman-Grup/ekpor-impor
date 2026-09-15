import { useEffect } from 'react'

function AboutSection({ data }) {
  useEffect(() => {
    if (window.lucide) {
      window.lucide.createIcons()
    }
  }, [])

  if (!data) return null

  return (
    <section className="py-16 md:py-24 bg-[#fbf9f4] border-b border-stone-200" id="tentang-kami">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Narrative & Mission statement */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-brand-sienna font-semibold text-xs tracking-wider uppercase">
              <i className="w-4 h-4" data-lucide="building-2"></i>
              PROFIL KORPORASI & SEJARAH
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 leading-tight">
              {data.title}
            </h2>
            
            <div className="space-y-4 text-stone-600 leading-relaxed text-sm sm:text-base">
              {data.paragraphs && data.paragraphs.map((paragraph, index) => (
                <p key={index}>
                  {index === 0 ? (
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
                "Kami juga memiliki komitmen untuk membangun hubungan yang baik dengan para petani dan pemasok hasil alam di Indonesia. Bagi kami, keberhasilan perusahaan harus berjalan seiring dengan berkembangnya para petani dan seluruh pihak yang terlibat dalam rantai pasok."
              </p>
            </div>
          </div>

          {/* Right: Milestones Timeline Card */}
          <div className="lg:col-span-5">
            <div className="bg-white border border-stone-200 rounded-sm p-6 shadow-sm">
              <div className="flex items-center gap-2 border-b border-stone-200 pb-3 mb-6">
                <i className="w-5 h-5 text-brand-sienna" data-lucide="clock"></i>
                <h3 className="font-serif text-lg font-bold text-stone-900">PERJALANAN KAMI</h3>
              </div>
              
              <div className="space-y-6 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-stone-200">
                {/* Milestone 1 */}
                <div className="relative pl-8">
                  <span className="absolute left-1.5 top-1.5 w-4 h-4 rounded-full bg-brand-crimson border-4 border-white"></span>
                  <span className="inline-block px-2 py-0.5 text-[11px] font-bold bg-brand-sienna/10 text-brand-sienna rounded mb-1">2016</span>
                  <h4 className="text-sm font-bold text-stone-900">Fondasi & Spesialisasi Jernang</h4>
                  <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                    Pendirian entitas di Medan, mengkhususkan diri dalam pengadaan dan agregasi resin jernang ber-kemurnian tinggi dari hutan pedalaman Sumatera.
                  </p>
                </div>
                
                {/* Milestone 2 */}
                <div className="relative pl-8">
                  <span className="absolute left-1.5 top-1.5 w-4 h-4 rounded-full bg-amber-600 border-4 border-white"></span>
                  <span className="inline-block px-2 py-0.5 text-[11px] font-bold bg-amber-100 text-amber-800 rounded mb-1">2018 - 2020</span>
                  <h4 className="text-sm font-bold text-stone-900">Diversifikasi Komoditas Hutan Tropis</h4>
                  <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                    Ekspansi komersial menuju gaharu, kemenyan, damar batu, dan turunan pinang seiring penguatan kemitraan dengan kelompok tani lokal.
                  </p>
                </div>
                
                {/* Milestone 3 */}
                <div className="relative pl-8">
                  <span className="absolute left-1.5 top-1.5 w-4 h-4 rounded-full bg-emerald-700 border-4 border-white"></span>
                  <span className="inline-block px-2 py-0.5 text-[11px] font-bold bg-emerald-100 text-emerald-800 rounded mb-1">2021 - SEKARANG</span>
                  <h4 className="text-sm font-bold text-stone-900">Modernisasi Mesin & Rantai Ekspor Global</h4>
                  <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                    Instalasi 6 unit mesin produksi, fasilitas lab mandiri, dan pengiriman kontainer teratur ke pasar internasional di China & India.
                  </p>
                </div>
              </div>
              
              {/* Facilities Small Banner */}
              <div className="mt-8 p-3 bg-stone-900 text-stone-100 rounded text-center flex items-center justify-center gap-2 text-xs">
                <i className="w-4 h-4 text-amber-400" data-lucide="shield-check"></i>
                <span>Fasilitas Medan Amplas • Kualifikasi Ekspor</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
