import { useEffect } from 'react'

function PortfolioSection() {
  useEffect(() => {
    if (window.lucide) {
      window.lucide.createIcons()
    }
  }, [])

  return (
    <section className="py-16 bg-stone-50 border-b border-stone-200" id="portofolio-ekspor">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-stone-200 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-brand-sienna block mb-1">GLOBAL MARKET PENETRATION</span>
            <h2 className="text-3xl font-serif font-bold text-stone-900">Pengalaman Perdagangan & Ekspor</h2>
            <p className="text-stone-600 text-xs sm:text-sm mt-1">Rekam jejak pengiriman terverifikasi ke pusat perdagangan komoditas utama dunia.</p>
          </div>
          <div className="text-xs bg-white border border-stone-300 px-3 py-1.5 rounded flex items-center gap-2 text-stone-700">
            <i className="w-4 h-4 text-brand-sienna" data-lucide="anchor"></i>
            <span>Major Ports: Guangzhou, Shanghai, Chennai, Nhava Sheva</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* China Market */}
          <div className="bg-white border border-stone-200 rounded-sm p-6 shadow-sm">
            <div className="flex justify-between items-start mb-3">
              <span className="text-[11px] font-bold text-stone-500 uppercase tracking-wider">DESTINASI UTAMA EKSPOR #01</span>
              <span className="px-2 py-0.5 bg-red-100 text-red-800 font-bold text-xs rounded">CHINA (PRC)</span>
            </div>
            <h3 className="text-xl font-serif font-bold text-stone-900 mb-2">Pasar China • Jernang, Damar Batu & Kemenyan</h3>
            <p className="text-xs text-stone-600 leading-relaxed mb-4">
              Hubungan dagang mapan untuk pasokan resin botani bernilai medis dan industri farmasi tradisional.
            </p>
            <div className="bg-stone-50 p-3 rounded border border-stone-200 mb-4 text-xs">
              <span className="font-bold text-stone-800 block mb-1">Komoditas Terverifikasi Ekspor ke China:</span>
              <div className="flex flex-wrap gap-1.5">
                <span className="px-2 py-0.5 bg-white border border-stone-300 rounded text-stone-700">Jernang Super</span>
                <span className="px-2 py-0.5 bg-white border border-stone-300 rounded text-stone-700">Damar Batu</span>
                <span className="px-2 py-0.5 bg-white border border-stone-300 rounded text-stone-700">Kemenyan Alami</span>
              </div>
            </div>
            <div className="relative rounded overflow-hidden h-48 border border-stone-200 bg-stone-100">
              <img 
                alt="Dokumentasi Kunjungan Buyer China" 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida/AEtjO1Wy8xOQxV2cl4kkPhaPUunsldrBOL4nBfQD1JsV851HV0FGfUq8sfga0bSWtJ1ic3caH4hP2c1PS1ce5UvjxvlJldIqAZNIKJq4r2sk9NrlOgWGCRPZ6rbSmpsw3pOHsXl_pBk56y-_FnFxu8OgFA5BmZ_MJnjuzwjzoEq7msZlnYRGKaZmFHOmS0XW9vcxhymhLpzxOr1OD9lGyBiOWvTOCnAWEcLDKsnkmXL1xmkskYtDoxEVGzVTIQ"
              />
              <div className="absolute bottom-0 inset-x-0 bg-stone-900/80 p-2 text-[10px] text-white flex justify-between items-center">
                <span>Dokumentasi Kemitraan Buyer Resmi</span>
                <i className="w-3.5 h-3.5" data-lucide="external-link"></i>
              </div>
            </div>
          </div>

          {/* India Market */}
          <div className="bg-white border border-stone-200 rounded-sm p-6 shadow-sm">
            <div className="flex justify-between items-start mb-3">
              <span className="text-[11px] font-bold text-stone-500 uppercase tracking-wider">DESTINASI UTAMA EKSPOR #02</span>
              <span className="px-2 py-0.5 bg-amber-100 text-amber-800 font-bold text-xs rounded">INDIA</span>
            </div>
            <h3 className="text-xl font-serif font-bold text-stone-900 mb-2">Pasar India • Lidi & Buah Pinang</h3>
            <p className="text-xs text-stone-600 leading-relaxed mb-4">
              Pengiriman skala kontainer besar secara kontinu untuk komoditas lidi sawit bermutu dan pinang belah kering.
            </p>
            <div className="bg-stone-50 p-3 rounded border border-stone-200 mb-4 text-xs">
              <span className="font-bold text-stone-800 block mb-1">Komoditas Terverifikasi Ekspor ke India:</span>
              <div className="flex flex-wrap gap-1.5">
                <span className="px-2 py-0.5 bg-white border border-stone-300 rounded text-stone-700">Lidi Sawit</span>
                <span className="px-2 py-0.5 bg-white border border-stone-300 rounded text-stone-700">Buah Pinang 90-95</span>
              </div>
            </div>
            <div className="relative rounded overflow-hidden h-48 border border-stone-200 bg-stone-100">
              <img 
                alt="Pengapalan Kontainer" 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida/AEtjO1Wy8xOQxV2cl4kkPhaPUunsldrBOL4nBfQD1JsV851HV0FGfUq8sfga0bSWtJ1ic3caH4hP2c1PS1ce5UvjxvlJldIqAZNIKJq4r2sk9NrlOgWGCRPZ6rbSmpsw3pOHsXl_pBk56y-_FnFxu8OgFA5BmZ_MJnjuzwjzoEq7msZlnYRGKaZmFHOmS0XW9vcxhymhLpzxOr1OD9lGyBiOWvTOCnAWEcLDKsnkmXL1xmkskYtDoxEVGzVTIQ"
              />
              <div className="absolute bottom-0 inset-x-0 bg-stone-900/80 p-2 text-[10px] text-white flex justify-between items-center">
                <span>Pelayaran Kontainer di Selat Malaka</span>
                <i className="w-3.5 h-3.5" data-lucide="external-link"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PortfolioSection
