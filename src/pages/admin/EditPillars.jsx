import { useState, useEffect } from 'react'
import axios from 'axios'
import { PageHeader, Alert, FormActions, InputField, TextAreaField, SectionCard, AddButton, RemoveButton } from './AdminComponents'

const AVAILABLE_ICONS = [
  'package-search', 'cog', 'flask-conical', 'globe', 'leaf', 'factory',
  'truck', 'star', 'shield', 'award', 'target', 'zap', 'layers',
]

function EditPillars() {
  const [pillars, setPillars] = useState([])
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState({ type: '', text: '' })

  useEffect(() => { fetchData() }, [])

  const fetchData = async () => {
    try {
      const res = await axios.get('/api/content/pillars')
      setPillars(res.data)
    } catch {
      setPillars([
        { id: 1, number: '01', icon: 'package-search', title: 'Perdagangan Komoditas Hasil Alam', description: 'Kami menyediakan berbagai macam komoditas hasil alam Indonesia untuk kebutuhan perdagangan besar dan pasar ekspor.' },
        { id: 2, number: '02', icon: 'cog', title: 'Pengolahan Modern Mandiri', description: 'Melakukan proses pengolahan bahan baku dengan dukungan 6 mesin produksi modern.' },
        { id: 3, number: '03', icon: 'flask-conical', title: 'Quality Control & Laboratory', description: 'Memiliki laboratorium khusus untuk menjaga standar kualitas sebelum dipasarkan dan diekspor.' },
        { id: 4, number: '04', icon: 'globe', title: 'Export & International Trading', description: 'Pengalaman perdagangan ke pasar internasional termasuk China dan India.' },
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
    } catch {
      setMessage({ type: 'error', text: 'Gagal menyimpan. Perubahan hanya tersimpan sementara.' })
    } finally { setSaving(false) }
  }

  const update = (index, field, value) => {
    const arr = [...pillars]
    arr[index][field] = value
    setPillars(arr)
  }

  const add = () => setPillars([...pillars, { id: Date.now(), number: String(pillars.length + 1).padStart(2, '0'), icon: 'star', title: '', description: '' }])
  const remove = (i) => setPillars(pillars.filter((_, idx) => idx !== i))

  return (
    <div className="max-w-5xl">
      <SectionCard>
        <div className="flex items-start justify-between mb-6 pb-6 border-b border-stone-200">
          <PageHeader
            icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>}
            title="Edit Pilar Bisnis"
            description="Kelola pilar utama bisnis perusahaan"
          />
          <div className="flex-shrink-0 ml-4 mt-0">
            <AddButton onClick={add} label="Tambah Pilar" />
          </div>
        </div>
        <Alert type={message.type} text={message.text} onDismiss={() => setMessage({ type: '', text: '' })} />

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {pillars.map((pillar, index) => (
              <div key={pillar.id} className="border border-stone-200 hover:border-brand-crimson/50 rounded-2xl p-5 transition space-y-4 relative">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-stone-400 uppercase tracking-widest">Pilar {pillar.number}</span>
                  {pillars.length > 1 && <RemoveButton onClick={() => remove(index)} />}
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <InputField label="Nomor" value={pillar.number} onChange={(e) => update(index, 'number', e.target.value)} placeholder="01" />
                  <div>
                    <label className="block text-sm font-semibold text-stone-700 mb-1.5">Icon</label>
                    <select
                      value={pillar.icon}
                      onChange={(e) => update(index, 'icon', e.target.value)}
                      className="w-full px-3 py-2.5 border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-crimson/40 focus:border-brand-crimson bg-white text-stone-900 text-sm transition"
                    >
                      {AVAILABLE_ICONS.map(ic => <option key={ic} value={ic}>{ic}</option>)}
                    </select>
                  </div>
                </div>
                <InputField label="Judul" value={pillar.title} onChange={(e) => update(index, 'title', e.target.value)} placeholder="Judul pilar bisnis" />
                <TextAreaField label="Deskripsi" value={pillar.description} onChange={(e) => update(index, 'description', e.target.value)} rows={3} placeholder="Deskripsi singkat pilar bisnis..." />
              </div>
            ))}
          </div>
          <FormActions saving={saving} onReset={fetchData} />
        </form>
      </SectionCard>
    </div>
  )
}

export default EditPillars
