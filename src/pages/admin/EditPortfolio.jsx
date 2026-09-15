import { useState, useEffect } from 'react'
import axios from 'axios'
import { PageHeader, Alert, FormActions, InputField, SectionCard, AddButton, RemoveButton } from './AdminComponents'

function EditPortfolio() {
  const [data, setData] = useState({ title: '', subtitle: '', countries: [] })
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState({ type: '', text: '' })

  useEffect(() => { fetchData() }, [])

  const fetchData = async () => {
    try {
      const res = await axios.get('/api/content/portfolio')
      setData(res.data)
    } catch {
      setData({
        title: 'Portfolio Ekspor',
        subtitle: 'Komoditas kami telah menembus pasar internasional',
        countries: [
          { id: 1, name: 'China', flag: '🇨🇳', commodity: 'Jernang, Gaharu', volume: '±20 Ton/Tahun' },
          { id: 2, name: 'India', flag: '🇮🇳', commodity: 'Jernang, Kopal', volume: '±15 Ton/Tahun' },
          { id: 3, name: 'Malaysia', flag: '🇲🇾', commodity: 'Berbagai Komoditas', volume: '±10 Ton/Tahun' },
        ]
      })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSaving(true)
    setMessage({ type: '', text: '' })
    try {
      await axios.put('/api/content/portfolio', data)
      setMessage({ type: 'success', text: 'Portfolio ekspor berhasil diupdate!' })
    } catch {
      setMessage({ type: 'error', text: 'Gagal menyimpan. Perubahan hanya tersimpan sementara.' })
    } finally { setSaving(false) }
  }

  const updateCountry = (i, field, value) => {
    const arr = [...data.countries]
    arr[i][field] = value
    setData({ ...data, countries: arr })
  }

  const add = () => setData({ ...data, countries: [...data.countries, { id: Date.now(), name: '', flag: '🌐', commodity: '', volume: '' }] })
  const remove = (i) => setData({ ...data, countries: data.countries.filter((_, idx) => idx !== i) })

  return (
    <div className="max-w-4xl space-y-5">
      <div className="bg-white rounded-2xl shadow-sm border border-stone-200 p-6 sm:p-8">
        <PageHeader
          icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
          title="Edit Portfolio Ekspor"
          description="Kelola data negara tujuan ekspor dan volume perdagangan"
        />
        <Alert type={message.type} text={message.text} onDismiss={() => setMessage({ type: '', text: '' })} />

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <InputField label="Judul Section" id="portfolio-title" value={data.title} onChange={(e) => setData({ ...data, title: e.target.value })} placeholder="Portfolio Ekspor" />
            <InputField label="Subtitle" id="portfolio-sub" value={data.subtitle} onChange={(e) => setData({ ...data, subtitle: e.target.value })} placeholder="Komoditas kami telah menembus pasar internasional" />
          </div>

          <div>
            <div className="flex items-center justify-between mb-3">
              <label className="text-sm font-semibold text-stone-700">Negara Tujuan Ekspor</label>
              <AddButton onClick={add} label="Tambah Negara" />
            </div>
            <div className="space-y-3">
              {data.countries.map((c, i) => (
                <div key={c.id} className="border border-stone-200 hover:border-brand-crimson/40 rounded-xl p-4 transition">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-stone-400">Negara #{i + 1}</span>
                    {data.countries.length > 1 && <RemoveButton onClick={() => remove(i)} />}
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <InputField label="Flag Emoji" value={c.flag} onChange={(e) => updateCountry(i, 'flag', e.target.value)} placeholder="🇨🇳" />
                    <InputField label="Nama Negara" value={c.name} onChange={(e) => updateCountry(i, 'name', e.target.value)} placeholder="China" />
                    <InputField label="Komoditas" value={c.commodity} onChange={(e) => updateCountry(i, 'commodity', e.target.value)} placeholder="Jernang, Gaharu" />
                    <InputField label="Volume" value={c.volume} onChange={(e) => updateCountry(i, 'volume', e.target.value)} placeholder="±20 Ton/Tahun" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <FormActions saving={saving} onReset={fetchData} />
        </form>
      </div>
    </div>
  )
}

export default EditPortfolio
