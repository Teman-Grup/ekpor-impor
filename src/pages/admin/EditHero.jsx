import { useState, useEffect } from 'react'
import axios from 'axios'

function EditHero() {
  const [formData, setFormData] = useState({
    badge: '',
    title: '',
    subtitle: '',
    image: '',
    established: '2016'
  })
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState({ type: '', text: '' })

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const response = await axios.get('/api/content/hero')
      setFormData(response.data)
    } catch (error) {
      // Set default values
      setFormData({
        badge: 'EST. 2016 • MEDAN, NORTH SUMATRA, INDONESIA',
        title: 'PT. ORIGINAL JERNANG ASIA',
        subtitle: 'Indonesian Natural Commodities Exporter & Trading',
        image: 'https://lh3.googleusercontent.com/aida/AEtjO1Wy8xOQxV2cl4kkPhaPUunsldrBOL4nBfQD1JsV851HV0FGfUq8sfga0bSWtJ1ic3caH4hP2c1PS1ce5UvjxvlJldIqAZNIKJq4r2sk9NrlOgWGCRPZ6rbSmpsw3pOHsXl_pBk56y-_FnFxu8OgFA5BmZ_MJnjuzwjzoEq7msZlnYRGKaZmFHOmS0XW9vcxhymhLpzxOr1OD9lGyBiOWvTOCnAWEcLDKsnkmXL1xmkskYtDoxEVGzVTIQ',
        established: '2016'
      })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSaving(true)
    setMessage({ type: '', text: '' })

    try {
      await axios.put('/api/content/hero', formData)
      setMessage({ type: 'success', text: 'Hero section berhasil diupdate!' })
    } catch (error) {
      setMessage({ type: 'error', text: 'Gagal menyimpan perubahan.' })
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="max-w-4xl">
      <div className="bg-white rounded-lg shadow-lg p-8 border border-stone-200">
        <div className="mb-6">
          <h2 className="text-2xl font-serif font-bold text-stone-900">Edit Hero Section</h2>
          <p className="text-stone-600 mt-1">Kelola konten hero section di halaman utama</p>
        </div>

        {message.text && (
          <div className={`mb-6 p-4 rounded-lg ${
            message.type === 'success' 
              ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' 
              : 'bg-red-50 text-red-800 border border-red-200'
          }`}>
            {message.text}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-stone-700 mb-2">
              Badge Text
            </label>
            <input
              type="text"
              value={formData.badge}
              onChange={(e) => setFormData({ ...formData, badge: e.target.value })}
              className="w-full px-4 py-3 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-crimson"
              placeholder="EST. 2016 • MEDAN, NORTH SUMATRA, INDONESIA"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-stone-700 mb-2">
              Judul Utama
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full px-4 py-3 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-crimson text-xl font-bold"
              placeholder="PT. ORIGINAL JERNANG ASIA"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-stone-700 mb-2">
              Subtitle
            </label>
            <input
              type="text"
              value={formData.subtitle}
              onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
              className="w-full px-4 py-3 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-crimson"
              placeholder="Indonesian Natural Commodities Exporter & Trading"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-stone-700 mb-2">
              Hero Image URL
            </label>
            <input
              type="text"
              value={formData.image}
              onChange={(e) => setFormData({ ...formData, image: e.target.value })}
              className="w-full px-4 py-3 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-crimson text-sm"
              placeholder="https://..."
            />
            {formData.image && (
              <div className="mt-3">
                <img 
                  src={formData.image} 
                  alt="Preview" 
                  className="w-full h-48 object-cover rounded-md border border-stone-200"
                  onError={(e) => e.target.src = 'https://via.placeholder.com/800x400?text=Image+Not+Found'}
                />
              </div>
            )}
          </div>

          <div className="flex gap-4 pt-4 border-t border-stone-200">
            <button
              type="submit"
              disabled={saving}
              className="px-6 py-3 bg-brand-crimson hover:bg-brand-sienna text-white font-semibold rounded-md transition disabled:opacity-50"
            >
              {saving ? 'Menyimpan...' : 'Simpan Perubahan'}
            </button>
            <button
              type="button"
              onClick={fetchData}
              className="px-6 py-3 bg-stone-200 hover:bg-stone-300 text-stone-800 font-semibold rounded-md transition"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditHero
