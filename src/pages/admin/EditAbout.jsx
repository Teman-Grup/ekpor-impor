import { useState, useEffect } from 'react'
import axios from 'axios'
import { PageHeader, Alert, FormActions, InputField, TextAreaField, SectionCard, AddButton, RemoveButton } from './AdminComponents'

function EditAbout() {
  const [formData, setFormData] = useState({ title: '', paragraphs: [''] })
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState({ type: '', text: '' })

  useEffect(() => { fetchData() }, [])

  const fetchData = async () => {
    try {
      const res = await axios.get('/api/content/about')
      setFormData(res.data)
    } catch {
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
    } catch {
      setMessage({ type: 'error', text: 'Gagal menyimpan. Perubahan hanya tersimpan sementara.' })
    } finally { setSaving(false) }
  }

  const updateParagraph = (index, value) => {
    const arr = [...formData.paragraphs]
    arr[index] = value
    setFormData({ ...formData, paragraphs: arr })
  }

  return (
    <div className="max-w-3xl">
      <SectionCard>
        <PageHeader
          icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>}
          title="Edit Tentang Kami"
          description="Kelola konten profil dan sejarah perusahaan"
        />
        <Alert type={message.type} text={message.text} onDismiss={() => setMessage({ type: '', text: '' })} />
        <form onSubmit={handleSubmit} className="space-y-5">
          <InputField
            label="Judul Section"
            id="about-title"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            placeholder="Tentang Kami & Integritas Perdagangan"
          />

          <div>
            <div className="flex items-center justify-between mb-3">
              <label className="text-sm font-semibold text-stone-700">Paragraf Konten</label>
              <AddButton onClick={() => setFormData({ ...formData, paragraphs: [...formData.paragraphs, ''] })} label="Tambah Paragraf" />
            </div>
            <div className="space-y-3">
              {formData.paragraphs.map((p, i) => (
                <div key={i} className="flex gap-2 items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-lg bg-stone-100 flex items-center justify-center text-xs font-bold text-stone-500 mt-2">{i + 1}</div>
                  <div className="flex-1">
                    <TextAreaField
                      id={`para-${i}`}
                      value={p}
                      onChange={(e) => updateParagraph(i, e.target.value)}
                      rows={4}
                      placeholder={`Paragraf ${i + 1}...`}
                    />
                  </div>
                  {formData.paragraphs.length > 1 && (
                    <RemoveButton onClick={() => setFormData({ ...formData, paragraphs: formData.paragraphs.filter((_, idx) => idx !== i) })} />
                  )}
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

export default EditAbout
