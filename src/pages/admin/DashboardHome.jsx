import { useState, useEffect } from 'react'
import axios from 'axios'

function DashboardHome() {
  const [stats, setStats] = useState({
    totalSections: 0,
    lastUpdated: null,
    status: 'active'
  })

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow p-6 border border-stone-200">
        <h2 className="text-2xl font-serif font-bold text-stone-900 mb-4">Selamat Datang di Dashboard</h2>
        <p className="text-stone-600">
          Gunakan menu di sebelah kiri untuk mengelola konten website perusahaan.
        </p>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-brand-crimson to-brand-sienna text-white rounded-lg shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm opacity-90">Total Sections</p>
              <p className="text-3xl font-bold mt-1">6</p>
            </div>
            <div className="text-4xl opacity-50">📄</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 text-white rounded-lg shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm opacity-90">Website Status</p>
              <p className="text-xl font-bold mt-1">Active</p>
            </div>
            <div className="text-4xl opacity-50">✅</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-amber-600 to-amber-700 text-white rounded-lg shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm opacity-90">Last Update</p>
              <p className="text-sm font-bold mt-1">{new Date().toLocaleDateString('id-ID')}</p>
            </div>
            <div className="text-4xl opacity-50">🕒</div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow p-6 border border-stone-200">
        <h3 className="text-lg font-serif font-bold text-stone-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <a
            href="/admin/dashboard/hero"
            className="p-4 border-2 border-stone-200 rounded-lg hover:border-brand-crimson hover:bg-brand-cream transition"
          >
            <div className="text-2xl mb-2">🎯</div>
            <h4 className="font-bold text-stone-900">Edit Hero</h4>
            <p className="text-sm text-stone-600">Update hero section</p>
          </a>
          
          <a
            href="/admin/dashboard/commodities"
            className="p-4 border-2 border-stone-200 rounded-lg hover:border-brand-crimson hover:bg-brand-cream transition"
          >
            <div className="text-2xl mb-2">📦</div>
            <h4 className="font-bold text-stone-900">Kelola Komoditas</h4>
            <p className="text-sm text-stone-600">Tambah/edit produk</p>
          </a>
          
          <a
            href="/admin/dashboard/contact"
            className="p-4 border-2 border-stone-200 rounded-lg hover:border-brand-crimson hover:bg-brand-cream transition"
          >
            <div className="text-2xl mb-2">📞</div>
            <h4 className="font-bold text-stone-900">Update Kontak</h4>
            <p className="text-sm text-stone-600">Edit info kontak</p>
          </a>
        </div>
      </div>

      {/* Tips */}
      <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg">
        <h4 className="font-bold text-amber-900 mb-2 flex items-center gap-2">
          <span>💡</span> Tips
        </h4>
        <ul className="text-sm text-amber-800 space-y-1">
          <li>• Pastikan untuk menyimpan perubahan sebelum keluar dari halaman</li>
          <li>• Gunakan Preview Website untuk melihat perubahan secara real-time</li>
          <li>• Upload gambar dengan ukuran yang optimal untuk performa website</li>
        </ul>
      </div>
    </div>
  )
}

export default DashboardHome
