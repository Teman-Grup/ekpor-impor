import { useEffect } from 'react'

function LegalitasSection() {
  useEffect(() => {
    if (window.lucide) {
      window.lucide.createIcons()
    }
  }, [])

  return (
    <section className="py-16 md:py-20 bg-stone-100 border-b border-stone-200" id="legalitas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-stone-300 rounded-sm p-8 shadow-sm">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center pb-6 border-b border-stone-200 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-brand-sienna block mb-1">DOKUMENTASI LEGALITAS & KEPATUHAN NEGARA</span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">Legalitas Resmi PT. Original Jernang Asia</h2>
              <p className="text-xs text-stone-500 mt-1">Entitas bisnis berbadan hukum penuh dan terdaftar di kementerian terkait Republik Indonesia.</p>
            </div>
            <div className="flex items-center gap-2 bg-emerald-50 text-emerald-800 border border-emerald-300 px-3 py-1.5 rounded text-xs font-semibold">
              <i className="w-4 h-4 text-emerald-600" data-lucide="badge-check"></i>
              <span>STATUS: REGULATED & AKTIF</span>
            </div>
          </div>

          {/* Legal Credentials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-6 border-b border-stone-200 text-xs">
            <div>
              <span className="text-stone-400 uppercase tracking-wider block text-[10px] font-semibold">NAMA RESMI BADAN USAHA</span>
              <span className="font-serif font-bold text-base text-stone-900 block mt-1">PT. Original Jernang Asia</span>
            </div>
            <div>
              <span className="text-stone-400 uppercase tracking-wider block text-[10px] font-semibold">NOMOR POKOK WAJIB PAJAK (NPWP)</span>
              <span className="font-mono font-bold text-base text-stone-900 block mt-1 tracking-wider">0764378550122000</span>
            </div>
            <div>
              <span className="text-stone-400 uppercase tracking-wider block text-[10px] font-semibold">NOMOR INDUK BERUSAHA (NIB)</span>
              <span className="font-mono font-bold text-base text-stone-900 block mt-1 tracking-wider">1701220042861</span>
            </div>
            <div>
              <span className="text-stone-400 uppercase tracking-wider block text-[10px] font-semibold">AKTA PENDIRIAN RESMI</span>
              <span className="font-bold text-stone-900 block mt-1">Akta No. 02</span>
              <span className="text-stone-500 text-[11px]">Tanggal Akta: 11 April 2022</span>
            </div>
            <div>
              <span className="text-stone-400 uppercase tracking-wider block text-[10px] font-semibold">SK PENGESAHAN KEMENKUMHAM</span>
              <span className="font-mono font-bold text-stone-900 block mt-1">AHU-0047642.AH.01.11 / 2022</span>
              <span className="text-stone-500 text-[11px]">Kementerian Hukum dan HAM RI</span>
            </div>
            <div>
              <span className="text-stone-400 uppercase tracking-wider block text-[10px] font-semibold">KLASIFIKASI BAKU LAPANGAN USAHA (KBLI)</span>
              <span className="font-bold text-stone-900 block mt-1">KBLI 46900</span>
              <span className="text-stone-500 text-[11px]">Perdagangan Besar Berbagai Macam Barang</span>
            </div>
          </div>

          {/* Address Verification Banner */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-600 gap-4">
            <div className="flex items-center gap-2">
              <i className="w-4 h-4 text-brand-sienna flex-shrink-0" data-lucide="map-pin"></i>
              <span><strong>Alamat Terdaftar:</strong> Jl. Garu VI No. 24, Harjosari I, Medan Amplas, Kota Medan • Kode Pos 20147</span>
            </div>
            <div className="text-stone-500 font-mono text-[11px] flex items-center gap-1.5">
              <i className="w-4 h-4 text-emerald-600" data-lucide="shield-check"></i>
              <span>Legalitas Ekspor Sah & Valid</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LegalitasSection
