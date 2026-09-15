import { useState, useEffect } from 'react'
import { Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom'

// Dashboard Pages
import DashboardHome from './DashboardHome'
import EditHero from './EditHero'
import EditAbout from './EditAbout'
import EditPillars from './EditPillars'
import EditCommodities from './EditCommodities'
import EditContact from './EditContact'
import EditPortfolio from './EditPortfolio'
import EditLegalitas from './EditLegalitas'
import EditOperational from './EditOperational'
import EditNavbar from './EditNavbar'

// ── SVG Icon Components ────────────────────────────────────────────────────
const Icon = ({ name, className = 'w-5 h-5' }) => {
  const icons = {
    dashboard: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    hero: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    about: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    pillars: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    commodities: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    portfolio: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    operational: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
    legalitas: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    contact: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    navbar: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h7" />
      </svg>
    ),
    logout: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
      </svg>
    ),
    chevronLeft: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
      </svg>
    ),
    chevronRight: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    ),
    menu: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    ),
    close: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    ),
    external: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
      </svg>
    ),
  }
  return icons[name] || null
}

// ── Menu Config ────────────────────────────────────────────────────────────
const menuGroups = [
  {
    label: 'Overview',
    items: [
      { path: '/admin/dashboard', label: 'Dashboard', icon: 'dashboard', exact: true },
    ]
  },
  {
    label: 'Konten Website',
    items: [
      { path: '/admin/dashboard/navbar', label: 'Navbar & Identitas', icon: 'navbar' },
      { path: '/admin/dashboard/hero', label: 'Hero Section', icon: 'hero' },
      { path: '/admin/dashboard/about', label: 'Tentang Kami', icon: 'about' },
      { path: '/admin/dashboard/pillars', label: 'Pilar Bisnis', icon: 'pillars' },
      { path: '/admin/dashboard/commodities', label: 'Komoditas', icon: 'commodities' },
      { path: '/admin/dashboard/portfolio', label: 'Portfolio Ekspor', icon: 'portfolio' },
      { path: '/admin/dashboard/operational', label: 'Alur Operasional', icon: 'operational' },
      { path: '/admin/dashboard/legalitas', label: 'Legalitas', icon: 'legalitas' },
      { path: '/admin/dashboard/contact', label: 'Kontak', icon: 'contact' },
    ]
  }
]

// ── Sidebar Link ───────────────────────────────────────────────────────────
function SidebarLink({ item, isActive, collapsed, onClick }) {
  return (
    <Link
      to={item.path}
      onClick={onClick}
      title={collapsed ? item.label : undefined}
      className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group relative ${
        isActive
          ? 'bg-gradient-to-r from-brand-crimson to-brand-sienna text-white shadow-lg shadow-brand-crimson/20'
          : 'text-stone-400 hover:text-white hover:bg-white/5'
      }`}
    >
      <span className="flex-shrink-0">
        <Icon name={item.icon} className="w-[18px] h-[18px]" />
      </span>
      {!collapsed && (
        <span className="text-sm font-medium truncate">{item.label}</span>
      )}
      {/* Tooltip for collapsed mode */}
      {collapsed && (
        <div className="absolute left-full ml-3 px-2.5 py-1.5 bg-stone-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50 border border-stone-700">
          {item.label}
        </div>
      )}
    </Link>
  )
}

// ── Main Component ─────────────────────────────────────────────────────────
function AdminDashboard({ setAuth }) {
  const navigate = useNavigate()
  const location = useLocation()
  const [collapsed, setCollapsed] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  // Close mobile sidebar on route change
  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const handleLogout = () => {
    localStorage.removeItem('adminToken')
    setAuth(false)
    navigate('/admin/login')
  }

  const isActive = (path, exact) => {
    if (exact) return location.pathname === path
    return location.pathname.startsWith(path) && path !== '/admin/dashboard'
      ? location.pathname.startsWith(path)
      : location.pathname === path
  }

  // Current page label for breadcrumb
  const currentPage = menuGroups.flatMap(g => g.items).find(item =>
    item.exact ? location.pathname === item.path : location.pathname === item.path
  )

  // Sidebar content (shared between desktop & mobile)
  const SidebarContent = ({ onLinkClick }) => (
    <div className="flex flex-col h-full">
      {/* Brand */}
      <div className={`flex items-center gap-3 p-5 border-b border-white/5 ${collapsed && !onLinkClick ? 'justify-center' : ''}`}>
        <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center shadow-lg overflow-hidden p-0.5">
            <img src="/assets/logo.png" alt="Logo" className="w-full h-full object-contain" />
          </div>
        {(!collapsed || onLinkClick) && (
          <div className="min-w-0">
            <p className="text-white text-sm font-bold leading-tight truncate">Admin Panel</p>
            <p className="text-stone-500 text-xs truncate">PT. Original Jernang Asia</p>
          </div>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-5">
        {menuGroups.map((group) => (
          <div key={group.label}>
            {(!collapsed || onLinkClick) && (
              <p className="px-3 text-xs font-semibold text-stone-600 uppercase tracking-widest mb-2">{group.label}</p>
            )}
            <div className="space-y-0.5">
              {group.items.map((item) => (
                <SidebarLink
                  key={item.path}
                  item={item}
                  isActive={isActive(item.path, item.exact)}
                  collapsed={collapsed && !onLinkClick}
                  onClick={onLinkClick}
                />
              ))}
            </div>
          </div>
        ))}
      </nav>

      {/* Footer */}
      <div className="p-3 border-t border-white/5 space-y-1">
        {/* Preview Website */}
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-stone-400 hover:text-white hover:bg-white/5 transition-all duration-200 ${collapsed && !onLinkClick ? 'justify-center' : ''}`}
          title="Preview Website"
        >
          <Icon name="external" className="w-[18px] h-[18px] flex-shrink-0" />
          {(!collapsed || onLinkClick) && <span className="text-sm font-medium">Preview Website</span>}
        </a>
        {/* Logout */}
        <button
          onClick={handleLogout}
          className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-stone-400 hover:text-red-400 hover:bg-red-500/5 transition-all duration-200 ${collapsed && !onLinkClick ? 'justify-center' : ''}`}
          title="Logout"
        >
          <Icon name="logout" className="w-[18px] h-[18px] flex-shrink-0" />
          {(!collapsed || onLinkClick) && <span className="text-sm font-medium">Logout</span>}
        </button>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-stone-50 flex">
      {/* ── Mobile Overlay ── */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* ── Mobile Drawer ── */}
      <aside
        className={`fixed inset-y-0 left-0 w-72 bg-stone-950 z-50 lg:hidden flex flex-col transform transition-transform duration-300 ease-in-out ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Close button */}
        <button
          onClick={() => setMobileOpen(false)}
          className="absolute top-4 right-4 text-stone-400 hover:text-white transition"
        >
          <Icon name="close" className="w-5 h-5" />
        </button>
        <SidebarContent onLinkClick={() => setMobileOpen(false)} />
      </aside>

      {/* ── Desktop Sidebar ── */}
      <aside
        className={`hidden lg:flex flex-col bg-stone-950 transition-all duration-300 ${collapsed ? 'w-[72px]' : 'w-64'}`}
      >
        <SidebarContent />

        {/* Collapse toggle */}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="absolute bottom-20 -right-3 w-6 h-6 bg-stone-800 border border-stone-700 rounded-full flex items-center justify-center text-stone-400 hover:text-white hover:bg-stone-700 transition shadow-lg"
          style={{ marginLeft: collapsed ? '60px' : '248px' }}
        >
          {collapsed ? <Icon name="chevronRight" className="w-3 h-3" /> : <Icon name="chevronLeft" className="w-3 h-3" />}
        </button>
      </aside>

      {/* ── Main Content ── */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top Bar */}
        <header className="bg-white border-b border-stone-200 px-4 sm:px-6 py-3.5 flex items-center justify-between sticky top-0 z-30 shadow-sm">
          <div className="flex items-center gap-3">
            {/* Mobile hamburger */}
            <button
              id="admin-mobile-menu-btn"
              onClick={() => setMobileOpen(true)}
              className="lg:hidden p-2 rounded-xl text-stone-500 hover:text-stone-900 hover:bg-stone-100 transition"
            >
              <Icon name="menu" className="w-5 h-5" />
            </button>
            {/* Breadcrumb */}
            <div>
              <p className="text-xs text-stone-400 font-medium hidden sm:block">Admin Panel</p>
              <h1 className="text-base sm:text-lg font-bold text-stone-900 leading-tight">
                {currentPage ? currentPage.label : 'Dashboard'}
              </h1>
            </div>
          </div>

          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            id="preview-website-btn"
            className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-2 bg-brand-crimson hover:bg-brand-sienna text-white rounded-xl text-xs sm:text-sm font-semibold transition shadow-sm"
          >
            <span className="hidden sm:inline">Preview Website</span>
            <span className="sm:hidden">Preview</span>
            <Icon name="external" className="w-3.5 h-3.5" />
          </a>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto p-4 sm:p-6 lg:p-8">
          <Routes>
            <Route index element={<DashboardHome />} />
            <Route path="navbar" element={<EditNavbar />} />
            <Route path="hero" element={<EditHero />} />
            <Route path="about" element={<EditAbout />} />
            <Route path="pillars" element={<EditPillars />} />
            <Route path="commodities" element={<EditCommodities />} />
            <Route path="portfolio" element={<EditPortfolio />} />
            <Route path="operational" element={<EditOperational />} />
            <Route path="legalitas" element={<EditLegalitas />} />
            <Route path="contact" element={<EditContact />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}

export default AdminDashboard
