import { useEffect } from 'react'

function OperationalSection() {
  useEffect(() => {
    if (window.lucide) {
      window.lucide.createIcons()
    }
  }, [])

  const steps = [
    { num: '01', title: 'Sourcing', desc: 'Pengadaan bahan baku melalui jaringan petani dan pemasok hasil alam terpercaya.', label: 'HULU / PETANI' },
    { num: '02', title: 'Selection', desc: 'Pemilahan dan penanganan bahan baku sebelum memasuki proses pengolahan pabrik.', label: 'SORTIR MUTU' },
    { num: '03', title: 'Processing', desc: 'Pengolahan bahan baku menggunakan 6 unit mesin produksi berstandar Medan.', label: 'FABRIKASI' },
    { num: '04', title: 'Quality Control', desc: 'Pengawalan kualitas produk melalui pemeriksaan dan uji laboratorium mandiri.', label: 'LAB TESTING' },
    { num: '05', title: 'Packing', desc: 'Produk dipersiapkan dan dikemas rapi sesuai kebutuhan standar pengiriman internasional.', label: 'EXPORT PACKAGING' },
    { num: '06', title: 'Quarantine', desc: 'Menjalani pemeriksaan karantina resmi negara sesuai regulasi perijinan.', label: 'PHYTOSANITARY' },
    { num: '07', title: 'Export', desc: 'Produk dikirim kepada buyer internasional tepat waktu via ocean freight/air cargo.', label: 'FINAL DELIVERY' }
  ]

  const colors = ['bg-brand-crimson', 'bg-brand-sienna', 'bg-amber-700', 'bg-brand-crimson', 'bg-amber-800', 'bg-stone-700', 'bg-emerald-700']

  return (
    <section className="py-16 md:py-20 bg-[#f4f1ea] border-b border-stone-200" id="alur-operasional">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-sienna block mb-1">END-TO-END EXPORT PIPELINE</span>
          <h2 className="text-3xl font-serif font-bold text-stone-900">Proses Operasional 7 Tahap Terintegrasi</h2>
          <p className="text-stone-600 text-xs sm:text-sm mt-2">
            Alur kerja sistematis kami menjamin setiap batch komoditas dari hulu hingga tiba di pelabuhan internasional memenuhi standar kualitas dan legalitas.
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
