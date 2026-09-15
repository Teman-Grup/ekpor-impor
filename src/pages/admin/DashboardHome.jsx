import { Link } from 'react-router-dom'

const quickActions = [
  { to: '/admin/dashboard/navbar', label: 'Navbar & Identitas', desc: 'Edit nama, tagline, kontak', color: 'from-purple-600 to-purple-700', icon: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h7" /></svg>
  )},
  { to: '/admin/dashboard/hero', label: 'Hero Section', desc: 'Update gambar & judul utama', color: 'from-blue-600 to-blue-700', icon: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
  )},
  { to: '/admin/dashboard/commodities', label: 'Komoditas', desc: 'Tambah / edit produk', color: 'from-brand-crimson to-brand-sienna', icon: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
  )},
  { to: '/admin/dashboard/portfolio', label: 'Portfolio Ekspor', desc: 'Kelola negara tujuan ekspor', color: 'from-teal-600 to-teal-700', icon: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  )},
  { to: '/admin/dashboard/contact', label: 'Kontak', desc: 'Edit info kontak & sosmed', color: 'from-emerald-600 to-emerald-700', icon: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
  )},
  { to: '/admin/dashboard/legalitas', label: 'Legalitas', desc: 'Update dokumen perizinan', color: 'from-amber-600 to-amber-700', icon: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
  )},
]

const stats = [
  { label: 'Total Section', value: '9', sub: 'Halaman yang dapat diedit', gradient: 'from-brand-crimson to-brand-sienna', icon: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg>
  )},
  { label: 'Status Website', value: 'Aktif', sub: 'Live & berjalan normal', gradient: 'from-emerald-600 to-emerald-700', icon: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  )},
  { label: 'Terakhir Update', value: new Date().toLocaleDateString('id-ID', { day: '2-digit', month: 'short' }), sub: new Date().toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric' }), gradient: 'from-amber-600 to-amber-700', icon: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
  )},
]

function DashboardHome() {
  return (
    <div className="space-y-6 max-w-7xl">
      {/* Welcome Banner */}
      <div className="relative overflow-hidden bg-gradient-to-r from-stone-900 to-stone-800 rounded-2xl p-6 sm:p-8 text-white">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-crimson opacity-10 rounded-full -translate-y-1/2 translate-x-1/4 blur-3xl pointer-events-none" />
        <div className="relative">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-stone-400 text-sm font-medium uppercase tracking-widest mb-1">Selamat datang</p>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">Admin Dashboard</h2>
              <p className="text-stone-400 text-sm mt-2 max-w-md">
                Kelola seluruh konten website PT. Original Jernang Asia dari sini. 
                Pilih section di bawah untuk mulai mengedit.
              </p>
            </div>
            <div className="hidden sm:flex w-14 h-14 rounded-2xl bg-white/5 items-center justify-center border border-white/10">
              <svg className="w-7 h-7 text-brand-crimson" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {stats.map((stat) => (
          <div key={stat.label} className={`bg-gradient-to-br ${stat.gradient} rounded-2xl p-5 text-white shadow-lg`}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/70 text-xs font-semibold uppercase tracking-wider">{stat.label}</p>
                <p className="text-3xl font-bold mt-1 leading-none">{stat.value}</p>
                <p className="text-white/60 text-xs mt-1.5">{stat.sub}</p>
              </div>
              <div className="opacity-30">
                {stat.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div>
        <h3 className="text-base font-bold text-stone-900 mb-4 flex items-center gap-2">
          <svg className="w-4 h-4 text-brand-crimson" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          Aksi Cepat
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {quickActions.map((action) => (
            <Link
              key={action.to}
              to={action.to}
              className="group flex items-center gap-4 p-4 bg-white rounded-2xl border border-stone-200 hover:border-stone-300 hover:shadow-md transition-all duration-200"
            >
              <div className={`flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br ${action.color} flex items-center justify-center text-white shadow-sm`}>
                {action.icon}
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-stone-900 group-hover:text-brand-crimson transition-colors">{action.label}</p>
                <p className="text-xs text-stone-500 truncate">{action.desc}</p>
              </div>
              <svg className="w-4 h-4 text-stone-300 group-hover:text-brand-crimson group-hover:translate-x-0.5 transition-all ml-auto flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          ))}
        </div>
      </div>

      {/* Tips */}
      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 w-8 h-8 rounded-xl bg-amber-100 flex items-center justify-center">
            <svg className="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-bold text-amber-900 mb-1.5">Tips Penggunaan</p>
            <ul className="space-y-1 text-xs text-amber-800">
              <li className="flex items-center gap-1.5">
                <svg className="w-3 h-3 flex-shrink-0 text-amber-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                Simpan perubahan sebelum berpindah halaman
              </li>
              <li className="flex items-center gap-1.5">
                <svg className="w-3 h-3 flex-shrink-0 text-amber-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                Gunakan "Preview Website" untuk melihat hasil secara langsung
              </li>
              <li className="flex items-center gap-1.5">
                <svg className="w-3 h-3 flex-shrink-0 text-amber-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                Upload gambar dengan ukuran optimal (&lt;500KB) untuk performa
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardHome
