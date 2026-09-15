import { useState, useEffect } from 'react'
import axios from 'axios'

function EditAbout() {
  const [formData, setFormData] = useState({
    title: '',
    paragraphs: ['']
  })
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState({ type: '', text: '' })

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const response = await axios.get('/api/content/about')
      setFormData(response.data)
    } catch (error) {
      setFormData({
        title: 'Tentang Kami & Integritas Perdagangan',
        paragraphs: [
          'PT. Original Jernang Asia merupakan perusahaan yang bergerak di bidang perdagangan besar, pengolahan, serta ekspor dan impor berbagai komoditas hasil alam Indonesia.',
          'Didirikan pada tahun 2016, perusahaan memulai kegiatan usaha dengan fokus pada komoditas jernang dan berkembang dengan memperdagangkan berbagai hasil alam lainnya.',
          'Dalam perjalanannya, PT. Original Jernang Asia berkembang menjadi salah satu perusahaan yang berfokus pada komoditas jernang di Kota Medan.'
        ]
      })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSaving(true)
    setMessage({ type: '', text: '' })

    try {
      await axios.put('/api/content/about', formData)
      setMessage({ type: 'success', text: 'Tentang Kami berhasil diupdate!' })
    } catch (error) {
      setMessage({ type: 'error', text: 'Gagal menyimpan perubahan.' })
    } finally {
      setSaving(false)
    }
  }

  const addParagraph = () => {
    setFormData({
      ...formData,
      paragraphs: [...formData.paragraphs, '']
    })
  }

  const removeParagraph = (index) => {
    const newParagraphs = formData.paragraphs.filter((_, i) => i !== index)
    setFormData({ ...formData, paragraphs: newParagraphs })
  }

  const updateParagraph = (index, value) => {
    const newParagraphs = [...formData.paragraphs]
    newParagraphs[index] = value
    setFormData({ ...formData, paragraphs: newParagraphs })
  }

  return (
    <div className="max-w-4xl">
      <div className="bg-white rounded-lg shadow-lg p-8 border border-stone-200">
        <div className="mb-6">
          <h2 className="text-2xl font-serif font-bold text-stone-900">Edit Tentang Kami</h2>
          <p className="text-stone-600 mt-1">Kelola konten section tentang perusahaan</p>
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
              Judul Section
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full px-4 py-3 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-crimson"
              placeholder="Tentang Kami & Integritas Perdagangan"
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-3">
              <label className="block text-sm font-semibold text-stone-700">
                Paragraf
              </label>
              <button
                type="button"
                onClick={addParagraph}
                className="px-3 py-1 bg-emerald-600 hover:bg-emerald-700 text-white text-sm rounded-md transition"
              >
                + Tambah Paragraf
              </button>
            </div>

            <div className="space-y-4">
              {formData.paragraphs.map((paragraph, index) => (
                <div key={index} className="relative">
                  <textarea
                    value={paragraph}
                    onChange={(e) => updateParagraph(index, e.target.value)}
                    className="w-full px-4 py-3 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-crimson"
                    rows="4"
                    placeholder={`Paragraf ${index + 1}`}
                  />
                  {formData.paragraphs.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeParagraph(index)}
                      className="absolute top-2 right-2 px-2 py-1 bg-red-600 hover:bg-red-700 text-white text-xs rounded-md transition"
                    >
                      Hapus
                    </button>
                  )}
                </div>
              ))}
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

export default EditAbout
