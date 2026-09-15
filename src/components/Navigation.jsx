function Navigation({ data }) {
  if (!data) return null

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-stone-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <a className="flex items-center gap-3.5 group" href="#">
          <div className="w-12 h-12 flex-shrink-0 bg-stone-50 border border-stone-200 rounded-sm p-1 shadow-sm flex items-center justify-center">
            <img 
              alt="PT. Original Jernang Asia Emblem" 
              className="w-full h-full object-contain" 
              src={data.logo}
            />
          </div>
          <div>
            <span className="block font-serif text-lg sm:text-xl font-bold tracking-tight text-stone-900 group-hover:text-brand-crimson transition-colors leading-tight">
              {data.companyName}
            </span>
            <span className="block text-[10px] sm:text-[11px] font-semibold tracking-widest text-brand-sienna uppercase">
              {data.tagline}
            </span>
          </div>
        </a>

        <div className="hidden lg:flex items-center space-x-6 text-[13px] font-medium text-stone-700">
          <a className="hover:text-brand-sienna transition-colors py-2 border-b-2 border-transparent hover:border-brand-sienna" href="#tentang-kami">Tentang Kami</a>
          <a className="hover:text-brand-sienna transition-colors py-2 border-b-2 border-transparent hover:border-brand-sienna" href="#bisnis-pengolahan">Bisnis</a>
          <a className="hover:text-brand-sienna transition-colors py-2 border-b-2 border-transparent hover:border-brand-sienna" href="#komoditas">Komoditas</a>
          <a className="hover:text-brand-sienna transition-colors py-2 border-b-2 border-transparent hover:border-brand-sienna" href="#kontak">Kontak</a>
        </div>

        <a 
          className="inline-flex items-center justify-center px-5 py-2.5 bg-brand-sienna hover:bg-brand-crimson text-white text-xs font-semibold tracking-wider uppercase rounded-sm shadow transition duration-200" 
          href="#kontak"
        >
          HUBUNGI KAMI
        </a>
      </div>
    </nav>
  )
}

export default Navigation
