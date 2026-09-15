import { useState, useEffect } from 'react'
import axios from 'axios'
import { PageHeader, Alert, FormActions, InputField, SectionCard } from './AdminComponents'

function EditHero() {
  const [formData, setFormData] = useState({ badge: '', title: '', subtitle: '', image: '', established: '2016' })
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState({ type: '', text: '' })

  useEffect(() => { fetchData() }, [])

  const fetchData = async () => {
    try {
      const res = await axios.get('/api/content/hero')
      setFormData(res.data)
    } catch {
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
    } catch {
      setMessage({ type: 'error', text: 'Gagal menyimpan. Perubahan hanya tersimpan sementara.' })
    } finally { setSaving(false) }
  }

  return (
    <div className="max-w-3xl">
      <SectionCard>
        <PageHeader
          icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>}
          title="Edit Hero Section"
          description="Kelola teks dan gambar di bagian banner utama website"
        />
        <Alert type={message.type} text={message.text} onDismiss={() => setMessage({ type: '', text: '' })} />
        <form onSubmit={handleSubmit} className="space-y-5">
          <InputField
            label="Badge Text"
            id="hero-badge"
            value={formData.badge}
            onChange={(e) => setFormData({ ...formData, badge: e.target.value })}
            placeholder="EST. 2016 • MEDAN, NORTH SUMATRA, INDONESIA"
          />
          <InputField
            label="Judul Utama"
            id="hero-title"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            placeholder="PT. ORIGINAL JERNANG ASIA"
          />
          <InputField
            label="Subtitle / Tagline"
            id="hero-subtitle"
            value={formData.subtitle}
            onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
            placeholder="Indonesian Natural Commodities Exporter & Trading"
          />
          <InputField
            label="Tahun Berdiri"
            id="hero-est"
            type="number"
            value={formData.established}
            onChange={(e) => setFormData({ ...formData, established: e.target.value })}
            placeholder="2016"
          />
          <div>
            <label className="block text-sm font-semibold text-stone-700 mb-1.5">Hero Image URL</label>
            <input
              type="text"
              value={formData.image}
              onChange={(e) => setFormData({ ...formData, image: e.target.value })}
              className="w-full px-4 py-2.5 border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-crimson/40 focus:border-brand-crimson bg-white text-stone-900 text-sm transition"
              placeholder="https://..."
            />
            {formData.image && (
              <div className="mt-3 relative overflow-hidden rounded-xl border border-stone-200">
                <img
                  src={formData.image}
                  alt="Preview"
                  className="w-full h-44 object-cover"
                  onError={(e) => e.target.src = 'https://placehold.co/800x400?text=Image+Not+Found'}
                />
                <div className="absolute top-2 right-2 bg-black/50 text-white text-xs px-2 py-0.5 rounded-md">Preview</div>
              </div>
            )}
          </div>
          <FormActions saving={saving} onReset={fetchData} />
        </form>
      </SectionCard>
    </div>
  )
}

export default EditHero
