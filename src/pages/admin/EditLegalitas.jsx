import { useState, useEffect } from 'react'
import axios from 'axios'
import { PageHeader, Alert, FormActions, InputField, SectionCard, AddButton, RemoveButton } from './AdminComponents'

function EditLegalitas() {
  const [data, setData] = useState({ title: '', subtitle: '', documents: [] })
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState({ type: '', text: '' })

  useEffect(() => { fetchData() }, [])

  const fetchData = async () => {
    try {
      const res = await axios.get('/api/content/legalitas')
      setData(res.data)
    } catch {
      setData({
        title: 'Legalitas & Perizinan',
        subtitle: 'Beroperasi dengan legalitas lengkap dan terpercaya',
        documents: [
          { id: 1, name: 'NIB (Nomor Induk Berusaha)', number: '1234567890', issuer: 'OSS - Kementerian Investasi', year: '2016', status: 'Aktif' },
          { id: 2, name: 'SIUP (Surat Izin Usaha Perdagangan)', number: 'SIUP-XXX/MEDAN/2016', issuer: 'Dinas Perdagangan Kota Medan', year: '2016', status: 'Aktif' },
          { id: 3, name: 'SKA (Surat Keterangan Asal)', number: '-', issuer: 'Dinas Perindustrian & Perdagangan', year: '2016', status: 'Aktif' },
          { id: 4, name: 'NPWP Perusahaan', number: 'XX.XXX.XXX.X-XXX.XXX', issuer: 'Direktorat Jenderal Pajak', year: '2016', status: 'Aktif' },
        ]
      })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSaving(true)
    setMessage({ type: '', text: '' })
    try {
      await axios.put('/api/content/legalitas', data)
      setMessage({ type: 'success', text: 'Data legalitas berhasil diupdate!' })
    } catch {
      setMessage({ type: 'error', text: 'Gagal menyimpan. Perubahan hanya tersimpan sementara.' })
    } finally { setSaving(false) }
  }

  const update = (i, field, value) => {
    const arr = [...data.documents]
    arr[i][field] = value
    setData({ ...data, documents: arr })
  }

  const add = () => setData({ ...data, documents: [...data.documents, { id: Date.now(), name: '', number: '', issuer: '', year: new Date().getFullYear().toString(), status: 'Aktif' }] })
  const remove = (i) => setData({ ...data, documents: data.documents.filter((_, idx) => idx !== i) })

  return (
    <div className="max-w-4xl space-y-5">
      <SectionCard>
        <PageHeader
          icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>}
          title="Edit Legalitas"
          description="Kelola dokumen perizinan dan legalitas perusahaan"
        />
        <Alert type={message.type} text={message.text} onDismiss={() => setMessage({ type: '', text: '' })} />

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <InputField label="Judul Section" value={data.title} onChange={(e) => setData({ ...data, title: e.target.value })} placeholder="Legalitas & Perizinan" />
            <InputField label="Subtitle" value={data.subtitle} onChange={(e) => setData({ ...data, subtitle: e.target.value })} placeholder="Beroperasi dengan legalitas lengkap" />
          </div>

          <div>
            <div className="flex items-center justify-between mb-3">
              <label className="text-sm font-semibold text-stone-700">Dokumen Legalitas</label>
              <AddButton onClick={add} label="Tambah Dokumen" />
            </div>
            <div className="space-y-3">
              {data.documents.map((doc, i) => (
                <div key={doc.id} className="border border-stone-200 hover:border-emerald-200 rounded-xl p-4 transition">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      <span className="text-xs font-bold text-stone-400">Dokumen #{i + 1}</span>
                    </div>
                    {data.documents.length > 1 && <RemoveButton onClick={() => remove(i)} />}
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <InputField label="Nama Dokumen" value={doc.name} onChange={(e) => update(i, 'name', e.target.value)} placeholder="NIB (Nomor Induk Berusaha)" />
                    <InputField label="Nomor Dokumen" value={doc.number} onChange={(e) => update(i, 'number', e.target.value)} placeholder="1234567890" />
                    <InputField label="Diterbitkan Oleh" value={doc.issuer} onChange={(e) => update(i, 'issuer', e.target.value)} placeholder="Kementerian Investasi" />
                    <div className="grid grid-cols-2 gap-2">
                      <InputField label="Tahun" value={doc.year} onChange={(e) => update(i, 'year', e.target.value)} placeholder="2016" />
                      <div>
                        <label className="block text-sm font-semibold text-stone-700 mb-1.5">Status</label>
                        <select
                          value={doc.status}
                          onChange={(e) => update(i, 'status', e.target.value)}
                          className="w-full px-3 py-2.5 border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-crimson/40 focus:border-brand-crimson bg-white text-stone-900 text-sm transition"
                        >
                          <option>Aktif</option>
                          <option>Kadaluarsa</option>
                          <option>Dalam Proses</option>
                        </select>
                      </div>
                    </div>
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

export default EditLegalitas
