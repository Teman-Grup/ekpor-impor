import { useState, useEffect } from 'react'
import axios from 'axios'

function EditContact() {
  const [formData, setFormData] = useState({
    phone: '',
    email: '',
    address: '',
    location: '',
    socialMedia: {
      facebook: '',
      instagram: '',
      linkedin: ''
    }
  })
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState({ type: '', text: '' })

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const response = await axios.get('/api/content/contact')
      setFormData(response.data)
    } catch (error) {
      setFormData({
        phone: '+62 812 600 100 28',
        email: 'ptoriginaljernangasia@gmail.com',
        address: 'Jl. Contoh Alamat, Medan',
        location: 'Medan, ID (GMT+7)',
        socialMedia: {
          facebook: '',
          instagram: '',
          linkedin: ''
        }
      })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSaving(true)
    setMessage({ type: '', text: '' })

    try {
      await axios.put('/api/content/contact', formData)
      setMessage({ type: 'success', text: 'Informasi kontak berhasil diupdate!' })
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
          <h2 className="text-2xl font-serif font-bold text-stone-900">Edit Informasi Kontak</h2>
          <p className="text-stone-600 mt-1">Kelola informasi kontak perusahaan</p>
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
          {/* Basic Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-stone-900 pb-2 border-b border-stone-200">
              Informasi Dasar
            </h3>

            <div>
              <label className="block text-sm font-semibold text-stone-700 mb-2">
                Nomor Telepon
              </label>
              <input
                type="text"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-crimson"
                placeholder="+62 812 600 100 28"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-stone-700 mb-2">
                Email
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-crimson"
                placeholder="ptoriginaljernangasia@gmail.com"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-stone-700 mb-2">
                Lokasi
              </label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="w-full px-4 py-3 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-crimson"
                placeholder="Medan, ID (GMT+7)"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-stone-700 mb-2">
                Alamat Lengkap
              </label>
              <textarea
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                className="w-full px-4 py-3 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-crimson"
                rows="3"
                placeholder="Alamat lengkap perusahaan..."
              />
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-stone-900 pb-2 border-b border-stone-200">
              Media Sosial
            </h3>

            <div>
              <label className="block text-sm font-semibold text-stone-700 mb-2">
                Facebook
              </label>
              <input
                type="text"
                value={formData.socialMedia.facebook}
                onChange={(e) => setFormData({ 
                  ...formData, 
                  socialMedia: { ...formData.socialMedia, facebook: e.target.value }
                })}
                className="w-full px-4 py-3 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-crimson"
                placeholder="https://facebook.com/..."
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-stone-700 mb-2">
                Instagram
              </label>
              <input
                type="text"
                value={formData.socialMedia.instagram}
                onChange={(e) => setFormData({ 
                  ...formData, 
                  socialMedia: { ...formData.socialMedia, instagram: e.target.value }
                })}
                className="w-full px-4 py-3 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-crimson"
                placeholder="https://instagram.com/..."
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-stone-700 mb-2">
                LinkedIn
              </label>
              <input
                type="text"
                value={formData.socialMedia.linkedin}
                onChange={(e) => setFormData({ 
                  ...formData, 
                  socialMedia: { ...formData.socialMedia, linkedin: e.target.value }
                })}
                className="w-full px-4 py-3 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-crimson"
                placeholder="https://linkedin.com/company/..."
              />
            </div>
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

export default EditContact
