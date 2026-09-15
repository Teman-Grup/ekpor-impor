import { useState, useEffect } from 'react'
import axios from 'axios'

function EditPillars() {
  const [pillars, setPillars] = useState([])
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState({ type: '', text: '' })

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const response = await axios.get('/api/content/pillars')
      setPillars(response.data)
    } catch (error) {
      setPillars([
        {
          id: 1,
          number: '01',
          icon: 'package-search',
          title: 'Perdagangan Komoditas Hasil Alam',
          description: 'Kami menyediakan berbagai macam komoditas hasil alam Indonesia untuk kebutuhan perdagangan besar dan pasar ekspor.'
        },
        {
          id: 2,
          number: '02',
          icon: 'cog',
          title: 'Pengolahan Modern Mandiri',
          description: 'Melakukan proses pengolahan bahan baku dengan dukungan 6 mesin produksi modern.'
        },
        {
          id: 3,
          number: '03',
          icon: 'flask-conical',
          title: 'Quality Control & Laboratory',
          description: 'Memiliki laboratorium khusus untuk menjaga standar kualitas sebelum dipasarkan dan diekspor.'
        },
        {
          id: 4,
          number: '04',
          icon: 'globe',
          title: 'Export & International Trading',
          description: 'Pengalaman perdagangan ke pasar internasional termasuk China dan India.'
        }
      ])
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSaving(true)
    setMessage({ type: '', text: '' })

    try {
      await axios.put('/api/content/pillars', pillars)
      setMessage({ type: 'success', text: 'Pilar bisnis berhasil diupdate!' })
    } catch (error) {
      setMessage({ type: 'error', text: 'Gagal menyimpan perubahan.' })
    } finally {
      setSaving(false)
    }
  }

  const updatePillar = (index, field, value) => {
    const newPillars = [...pillars]
    newPillars[index][field] = value
    setPillars(newPillars)
  }

  const addPillar = () => {
    setPillars([
      ...pillars,
      {
        id: pillars.length + 1,
        number: String(pillars.length + 1).padStart(2, '0'),
        icon: 'star',
        title: '',
        description: ''
      }
    ])
  }

  const removePillar = (index) => {
    const newPillars = pillars.filter((_, i) => i !== index)
    setPillars(newPillars)
  }

  return (
    <div className="max-w-6xl">
      <div className="bg-white rounded-lg shadow-lg p-8 border border-stone-200">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-serif font-bold text-stone-900">Edit Pilar Bisnis</h2>
            <p className="text-stone-600 mt-1">Kelola pilar utama bisnis perusahaan</p>
          </div>
          <button
            type="button"
            onClick={addPillar}
            className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-md transition text-sm font-medium"
          >
            + Tambah Pilar
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pillars.map((pillar, index) => (
              <div key={pillar.id} className="border-2 border-stone-200 rounded-lg p-6 relative hover:border-brand-crimson transition">
                {pillars.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removePillar(index)}
                    className="absolute top-3 right-3 px-2 py-1 bg-red-600 hover:bg-red-700 text-white text-xs rounded-md transition"
                  >
                    Hapus
                  </button>
                )}
                
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1">
                        Nomor
                      </label>
                      <input
                        type="text"
                        value={pillar.number}
                        onChange={(e) => updatePillar(index, 'number', e.target.value)}
                        className="w-full px-3 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-crimson text-sm"
                        placeholder="01"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1">
                        Icon
                      </label>
                      <input
                        type="text"
                        value={pillar.icon}
                        onChange={(e) => updatePillar(index, 'icon', e.target.value)}
                        className="w-full px-3 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-crimson text-sm"
                        placeholder="package"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Judul
                    </label>
                    <input
                      type="text"
                      value={pillar.title}
                      onChange={(e) => updatePillar(index, 'title', e.target.value)}
                      className="w-full px-3 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-crimson text-sm"
                      placeholder="Judul Pilar"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Deskripsi
                    </label>
                    <textarea
                      value={pillar.description}
                      onChange={(e) => updatePillar(index, 'description', e.target.value)}
                      className="w-full px-3 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-crimson text-sm"
                      rows="3"
                      placeholder="Deskripsi pilar bisnis..."
                    />
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

export default EditPillars
