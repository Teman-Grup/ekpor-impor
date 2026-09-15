import { useState, useEffect } from 'react'
import axios from 'axios'
import { PageHeader, Alert, FormActions, InputField, TextAreaField, SectionCard, AddButton, RemoveButton } from './AdminComponents'

function EditCommodities() {
  const [commodities, setCommodities] = useState([])
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState({ type: '', text: '' })

  useEffect(() => { fetchData() }, [])

  const fetchData = async () => {
    try {
      const res = await axios.get('/api/content/commodities')
      setCommodities(res.data)
    } catch {
      setCommodities([
        {
          id: 1, name: "Jernang (Dragon's Blood)",
          description: 'Komoditas utama dengan pengolahan lengkap dari buah hingga blok.',
          image: 'https://lh3.googleusercontent.com/aida/AEtjO1Wy8xOQxV2cl4kkPhaPUunsldrBOL4nBfQD1JsV851HV0FGfUq8sfga0bSWtJ1ic3caH4hP2c1PS1ce5UvjxvlJldIqAZNIKJq4r2sk9NrlOgWGCRPZ6rbSmpsw3pOHsXl_pBk56y-_FnFxu8OgFA5BmZ_MJnjuzwjzoEq7msZlnYRGKaZmFHOmS0XW9vcxhymhLpzxOr1OD9lGyBiOWvTOCnAWEcLDKsnkmXL1xmkskYtDoxEVGzVTIQ',
          featured: true, grade: 'Super / Murni', hsCode: '1301.90'
        },
        { id: 2, name: 'Kayu Gaharu', description: 'Komoditas hasil alam bernilai tinggi untuk ekspor.', image: '', featured: false, grade: 'Grade A', hsCode: '1211.90' }
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
    } catch {
      setMessage({ type: 'error', text: 'Gagal menyimpan. Perubahan hanya tersimpan sementara.' })
    } finally { setSaving(false) }
  }

  const update = (i, field, value) => {
    const arr = [...commodities]
    arr[i][field] = value
    setCommodities(arr)
  }

  const add = () => setCommodities([...commodities, { id: Date.now(), name: '', description: '', image: '', featured: false, grade: '', hsCode: '' }])
  const remove = (i) => setCommodities(commodities.filter((_, idx) => idx !== i))

  return (
    <div className="max-w-6xl">
      <SectionCard>
        <div className="flex items-start justify-between mb-6 pb-6 border-b border-stone-200">
          <PageHeader
            icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>}
            title="Edit Komoditas"
            description="Kelola produk dan komoditas yang ditampilkan di website"
          />
          <div className="flex-shrink-0 ml-4">
            <AddButton onClick={add} label="Tambah Komoditas" />
          </div>
        </div>
        <Alert type={message.type} text={message.text} onDismiss={() => setMessage({ type: '', text: '' })} />

        <form onSubmit={handleSubmit}>
          <div className="space-y-4 mb-6">
            {commodities.map((c, index) => (
              <div key={c.id} className="border border-stone-200 hover:border-brand-crimson/50 rounded-2xl p-5 transition">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-stone-400 uppercase tracking-widest">Komoditas #{index + 1}</span>
                    {c.featured && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-amber-100 text-amber-700 text-xs font-semibold rounded-full">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                        Unggulan
                      </span>
                    )}
                  </div>
                  {commodities.length > 1 && <RemoveButton onClick={() => remove(index)} />}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                  {/* Image preview */}
                  <div>
                    {c.image ? (
                      <img src={c.image} alt={c.name} className="w-full h-40 object-cover rounded-xl border border-stone-200" onError={(e) => e.target.src = 'https://placehold.co/400x300?text=No+Image'} />
                    ) : (
                      <div className="w-full h-40 bg-stone-100 rounded-xl border-2 border-dashed border-stone-300 flex flex-col items-center justify-center gap-2 text-stone-400">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                        <span className="text-xs">Belum ada gambar</span>
                      </div>
                    )}
                  </div>

                  {/* Fields */}
                  <div className="lg:col-span-2 space-y-3">
                    <InputField label="Nama Komoditas" value={c.name} onChange={(e) => update(index, 'name', e.target.value)} placeholder="Jernang (Dragon's Blood)" />
                    <TextAreaField label="Deskripsi" value={c.description} onChange={(e) => update(index, 'description', e.target.value)} rows={3} placeholder="Deskripsi komoditas..." />
                    <div className="grid grid-cols-2 gap-3">
                      <InputField label="Grade / Kualitas" value={c.grade} onChange={(e) => update(index, 'grade', e.target.value)} placeholder="Super / Murni" />
                      <InputField label="HS Code" value={c.hsCode} onChange={(e) => update(index, 'hsCode', e.target.value)} placeholder="1301.90" />
                    </div>
                    <InputField label="URL Gambar" value={c.image} onChange={(e) => update(index, 'image', e.target.value)} placeholder="https://..." />
                    <label className="flex items-center gap-2.5 cursor-pointer select-none">
                      <div
                        onClick={() => update(index, 'featured', !c.featured)}
                        className={`relative w-10 h-5.5 h-[22px] rounded-full transition-colors ${c.featured ? 'bg-brand-crimson' : 'bg-stone-200'}`}
                      >
                        <div className={`absolute top-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform ${c.featured ? 'left-[22px]' : 'left-0.5'}`} />
                      </div>
                      <span className="text-sm text-stone-700 font-medium">Tampilkan sebagai komoditas unggulan</span>
                    </label>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <FormActions saving={saving} onReset={fetchData} />
        </form>
      </SectionCard>
    </div>
  )
}

export default EditCommodities
