function TopBar({ data }) {
  if (!data) return null

  return (
    <header className="w-full bg-[#181816] text-[#c9c5be] text-xs border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-col md:flex-row justify-between items-center gap-2">
        <div className="flex items-center flex-wrap gap-4 sm:gap-6">
          <span className="inline-flex items-center gap-1.5 text-stone-300">
            📍 {data.location}
          </span>
          <a className="inline-flex items-center gap-1.5 hover:text-white transition-colors" href={`tel:${data.phone}`}>
            📞 {data.phone}
          </a>
          <a className="hidden sm:inline-flex items-center gap-1.5 hover:text-white transition-colors" href={`mailto:${data.email}`}>
            ✉️ {data.email}
          </a>
        </div>
        <div className="flex items-center gap-4 text-[11px] uppercase tracking-wider">
          <div className="flex items-center gap-1 text-stone-400 font-medium">
            <span className="text-white font-semibold cursor-pointer">ID</span>
            <span>/</span>
            <span className="hover:text-white cursor-pointer transition-colors">EN</span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default TopBar
