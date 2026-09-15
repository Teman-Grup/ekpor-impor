import { useState, useEffect } from 'react'
import { Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom'
import axios from 'axios'

// Dashboard Pages
import DashboardHome from './DashboardHome'
import EditHero from './EditHero'
import EditAbout from './EditAbout'
import EditPillars from './EditPillars'
import EditCommodities from './EditCommodities'
import EditContact from './EditContact'

function AdminDashboard({ setAuth }) {
  const navigate = useNavigate()
  const location = useLocation()
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  const handleLogout = () => {
    localStorage.removeItem('adminToken')
    setAuth(false)
    navigate('/admin/login')
  }

  const menuItems = [
    { path: '/admin/dashboard', label: 'Dashboard', icon: '📊' },
    { path: '/admin/dashboard/hero', label: 'Hero Section', icon: '🎯' },
    { path: '/admin/dashboard/about', label: 'Tentang Kami', icon: '📝' },
    { path: '/admin/dashboard/pillars', label: 'Pilar Bisnis', icon: '🏛️' },
    { path: '/admin/dashboard/commodities', label: 'Komoditas', icon: '📦' },
    { path: '/admin/dashboard/contact', label: 'Kontak', icon: '📞' },
  ]

  return (
    <div className="min-h-screen bg-stone-50 flex">
      {/* Sidebar */}
      <aside className={`${isSidebarOpen ? 'w-64' : 'w-20'} bg-stone-900 text-white transition-all duration-300 flex flex-col`}>
        {/* Header */}
        <div className="p-6 border-b border-stone-800">
          {isSidebarOpen ? (
            <div>
              <h1 className="font-serif text-xl font-bold">Admin Panel</h1>
              <p className="text-xs text-stone-400 mt-1">PT. Original Jernang Asia</p>
            </div>
          ) : (
            <div className="text-2xl">🏢</div>
          )}
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-md transition ${
                location.pathname === item.path
                  ? 'bg-brand-crimson text-white'
                  : 'hover:bg-stone-800 text-stone-300 hover:text-white'
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              {isSidebarOpen && <span className="text-sm font-medium">{item.label}</span>}
            </Link>
          ))}
        </nav>

        {/* Footer Actions */}
        <div className="p-4 border-t border-stone-800 space-y-2">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="w-full px-4 py-2 bg-stone-800 hover:bg-stone-700 rounded-md text-sm transition"
          >
            {isSidebarOpen ? '← Collapse' : '→'}
          </button>
          <button
            onClick={handleLogout}
            className="w-full px-4 py-2 bg-red-600 hover:bg-red-700 rounded-md text-sm transition flex items-center justify-center gap-2"
          >
            {isSidebarOpen && <span>Logout</span>}
            <span>🚪</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {/* Top Bar */}
        <header className="bg-white border-b border-stone-200 px-8 py-4 sticky top-0 z-10">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-serif font-bold text-stone-900">Content Management</h2>
              <p className="text-sm text-stone-600">Kelola konten website perusahaan</p>
            </div>
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-brand-crimson text-white rounded-md hover:bg-brand-sienna transition text-sm font-medium"
            >
              Preview Website →
            </a>
          </div>
        </header>

        {/* Content Area */}
        <div className="p-8">
          <Routes>
            <Route index element={<DashboardHome />} />
            <Route path="hero" element={<EditHero />} />
            <Route path="about" element={<EditAbout />} />
            <Route path="pillars" element={<EditPillars />} />
            <Route path="commodities" element={<EditCommodities />} />
            <Route path="contact" element={<EditContact />} />
          </Routes>
        </div>
      </main>
    </div>
  )
}

export default AdminDashboard
