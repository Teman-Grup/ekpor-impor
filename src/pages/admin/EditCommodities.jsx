import { useState, useEffect } from 'react'
import axios from 'axios'

function EditCommodities() {
  const [commodities, setCommodities] = useState([])
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState({ type: '', text: '' })

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const response = await axios.get('/api/content/commodities')
      setCommodities(response.data)
    } catch (error) {
      setCommodities([
        {
          id: 1,
          name: 'Jernang (Dragon\'s Blood)',
          description: 'Komoditas utama dengan pengolahan lengkap dari buah hingga blok.',
          image: 'https://lh3.googleusercontent.com/aida/AEtjO1Wy8xOQxV2cl4kkPhaPUunsldrBOL4nBfQD1JsV851HV0FGfUq8sfga0bSWtJ1ic3caH4hP2c1PS1ce5UvjxvlJldIqAZNIKJq4r2sk9NrlOgWGCRPZ6rbSmpsw3pOHsXl_pBk56y-_FnFxu8OgFA5BmZ_MJnjuzwjzoEq7msZlnYRGKaZmFHOmS0XW9vcxhymhLpzxOr1OD9lGyBiOWvTOCnAWEcLDKsnkmXL1xmkskYtDoxEVGzVTIQ',
          featured: true,
          grade: 'Super / Murni',
          hsCode: '1301.90'
        },
        {
          id: 2,
          name: 'Kayu Gaharu',
          description: 'Komoditas hasil alam bernilai tinggi untuk ekspor.',
          image: 'https://via.placeholder.com/400x300',
          featured: false,
          grade: 'Grade A',
          hsCode: '1211.90'
        }
      ])
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSaving(true)
    setMessage({ type: '', text: '' })

    try {
      await axios.put('/api/content/commodities', commodities)
      setMessage({ type: 'success', text: 'Komoditas berhasil diupdate!' })
    } catch (error) {
      setMessage({ type: 'error', text: 'Gagal menyimpan perubahan.' })
    } finally {
      setSaving(false)
    }
  }

  const updateCommodity = (index, field, value) => {
    const newCommodities = [...commodities]
    newCommodities[index][field] = value
    setCommodities(newCommodities)
  }

  const addCommodity = () => {
    setCommodities([
      ...commodities,
      {
        id: Date.now(),
        name: '',
        description: '',
        image: '',
        featured: false,
        grade: '',
        hsCode: ''
      }
    ])
  }

  const removeCommodity = (index) => {
    const newCommodities = commodities.filter((_, i) => i !== index)
    setCommodities(newCommodities)
  }

  return (
    <div className="max-w-6xl">
      <div className="bg-white rounded-lg shadow-lg p-8 border border-stone-200">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-serif font-bold text-stone-900">Edit Komoditas</h2>
            <p className="text-stone-600 mt-1">Kelola produk dan komoditas perusahaan</p>
          </div>
          <button
            type="button"
            onClick={addCommodity}
            className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-md transition text-sm font-medium"
          >
            + Tambah Komoditas
          </button>
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
          <div className="space-y-6">
            {commodities.map((commodity, index) => (
              <div key={commodity.id} className="border-2 border-stone-200 rounded-lg p-6 relative hover:border-brand-crimson transition">
                {commodities.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeCommodity(index)}
                    className="absolute top-3 right-3 px-2 py-1 bg-red-600 hover:bg-red-700 text-white text-xs rounded-md transition z-10"
                  >
                    Hapus
                  </button>
                )}
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Image Preview */}
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-2">
                      Preview Gambar
                    </label>
                    {commodity.image ? (
                      <img 
                        src={commodity.image} 
                        alt={commodity.name}
                        className="w-full h-48 object-cover rounded-md border border-stone-200"
                        onError={(e) => e.target.src = 'https://via.placeholder.com/400x300?text=No+Image'}
                      />
                    ) : (
                      <div className="w-full h-48 bg-stone-100 rounded-md border border-stone-200 flex items-center justify-center">
                        <span className="text-stone-400 text-sm">No Image</span>
                      </div>
                    )}
                  </div>

                  {/* Form Fields */}
                  <div className="lg:col-span-2 space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1">
                        Nama Komoditas
                      </label>
                      <input
                        type="text"
                        value={commodity.name}
                        onChange={(e) => updateCommodity(index, 'name', e.target.value)}
                        className="w-full px-3 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-crimson text-sm"
                        placeholder="Jernang (Dragon's Blood)"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1">
                        Deskripsi
                      </label>
                      <textarea
                        value={commodity.description}
                        onChange={(e) => updateCommodity(index, 'description', e.target.value)}
                        className="w-full px-3 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-crimson text-sm"
                        rows="3"
                        placeholder="Deskripsi komoditas..."
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-stone-700 mb-1">
                          Grade
                        </label>
                        <input
                          type="text"
                          value={commodity.grade}
                          onChange={(e) => updateCommodity(index, 'grade', e.target.value)}
                          className="w-full px-3 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-crimson text-sm"
                          placeholder="Super / Murni"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-stone-700 mb-1">
                          HS Code
                        </label>
                        <input
                          type="text"
                          value={commodity.hsCode}
                          onChange={(e) => updateCommodity(index, 'hsCode', e.target.value)}
                          className="w-full px-3 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-crimson text-sm"
                          placeholder="1301.90"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1">
                        URL Gambar
                      </label>
                      <input
                        type="text"
                        value={commodity.image}
                        onChange={(e) => updateCommodity(index, 'image', e.target.value)}
                        className="w-full px-3 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-crimson text-sm"
                        placeholder="https://..."
                      />
                    </div>

                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        id={`featured-${commodity.id}`}
                        checked={commodity.featured}
                        onChange={(e) => updateCommodity(index, 'featured', e.target.checked)}
                        className="w-4 h-4 text-brand-crimson focus:ring-brand-crimson border-stone-300 rounded"
                      />
                      <label htmlFor={`featured-${commodity.id}`} className="text-sm text-stone-700">
                        Tampilkan sebagai komoditas unggulan
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            ))}
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

export default EditCommodities
