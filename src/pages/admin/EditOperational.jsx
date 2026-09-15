import { useState, useEffect } from 'react'
import axios from 'axios'
import { PageHeader, Alert, FormActions, InputField, TextAreaField, SectionCard, AddButton, RemoveButton } from './AdminComponents'

function EditOperational() {
  const [data, setData] = useState({ title: '', subtitle: '', steps: [] })
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState({ type: '', text: '' })

  useEffect(() => { fetchData() }, [])

  const fetchData = async () => {
    try {
      const res = await axios.get('/api/content/operational')
      setData(res.data)
    } catch {
      setData({
        title: 'Alur Operasional',
        subtitle: 'Proses bisnis yang terstruktur dan profesional',
        steps: [
          { id: 1, step: '01', title: 'Pengumpulan Bahan Baku', description: 'Pengumpulan komoditas dari petani dan supplier terpercaya di seluruh Sumatera.' },
          { id: 2, step: '02', title: 'Sortasi & Quality Control', description: 'Pemilahan dan pengecekan kualitas di laboratorium internal sesuai standar ekspor.' },
          { id: 3, step: '03', title: 'Pengolahan & Produksi', description: 'Proses pengolahan dengan 6 unit mesin produksi modern.' },
          { id: 4, step: '04', title: 'Pengemasan & Labeling', description: 'Pengemasan sesuai standar internasional dengan label lengkap sesuai regulasi.' },
          { id: 5, step: '05', title: 'Ekspor & Distribusi', description: 'Pengiriman ke buyer internasional dengan dokumen ekspor lengkap.' },
        ]
      })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSaving(true)
    setMessage({ type: '', text: '' })
    try {
      await axios.put('/api/content/operational', data)
      setMessage({ type: 'success', text: 'Alur operasional berhasil diupdate!' })
    } catch {
      setMessage({ type: 'error', text: 'Gagal menyimpan. Perubahan hanya tersimpan sementara.' })
    } finally { setSaving(false) }
  }

  const update = (i, field, value) => {
    const arr = [...data.steps]
    arr[i][field] = value
    setData({ ...data, steps: arr })
  }

  const add = () => setData({ ...data, steps: [...data.steps, { id: Date.now(), step: String(data.steps.length + 1).padStart(2, '0'), title: '', description: '' }] })
  const remove = (i) => setData({ ...data, steps: data.steps.filter((_, idx) => idx !== i) })

  return (
    <div className="max-w-3xl space-y-5">
      <SectionCard>
        <PageHeader
          icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>}
          title="Edit Alur Operasional"
          description="Kelola langkah-langkah proses bisnis perusahaan"
        />
        <Alert type={message.type} text={message.text} onDismiss={() => setMessage({ type: '', text: '' })} />

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <InputField label="Judul Section" value={data.title} onChange={(e) => setData({ ...data, title: e.target.value })} placeholder="Alur Operasional" />
            <InputField label="Subtitle" value={data.subtitle} onChange={(e) => setData({ ...data, subtitle: e.target.value })} placeholder="Proses bisnis yang terstruktur..." />
          </div>

          <div>
            <div className="flex items-center justify-between mb-3">
              <label className="text-sm font-semibold text-stone-700">Tahapan Proses</label>
              <AddButton onClick={add} label="Tambah Tahap" />
            </div>
            <div className="space-y-3">
              {data.steps.map((step, i) => (
                <div key={step.id} className="flex gap-3 items-start">
                  <div className="flex-shrink-0 flex flex-col items-center">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-crimson to-brand-sienna text-white flex items-center justify-center text-sm font-bold">
                      {step.step}
                    </div>
                    {i < data.steps.length - 1 && <div className="w-0.5 h-4 bg-stone-200 mt-1" />}
                  </div>
                  <div className="flex-1 border border-stone-200 hover:border-brand-crimson/40 rounded-xl p-4 transition space-y-3">
                    <div className="flex items-center justify-between">
                      <InputField value={step.step} onChange={(e) => update(i, 'step', e.target.value)} placeholder="01" />
                      {data.steps.length > 1 && <div className="ml-2 flex-shrink-0"><RemoveButton onClick={() => remove(i)} /></div>}
                    </div>
                    <InputField label="Judul Tahap" value={step.title} onChange={(e) => update(i, 'title', e.target.value)} placeholder="Pengumpulan Bahan Baku" />
                    <TextAreaField label="Deskripsi" value={step.description} onChange={(e) => update(i, 'description', e.target.value)} rows={2} placeholder="Deskripsi proses..." />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <FormActions saving={saving} onReset={fetchData} />
        </form>
      </SectionCard>
    </div>
  )
}

export default EditOperational
