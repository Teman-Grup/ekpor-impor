import { useState, useEffect } from 'react'
import axios from 'axios'
import { PageHeader, Alert, FormActions, InputField, TextAreaField, SectionCard } from './AdminComponents'

const phoneIcon = <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
const emailIcon = <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
const locationIcon = <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
const whatsappIcon = <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
const linkIcon = <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>

function EditContact() {
  const [formData, setFormData] = useState({
    phone: '', whatsapp: '', email: '', address: '', location: '',
    socialMedia: { facebook: '', instagram: '', linkedin: '' }
  })
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState({ type: '', text: '' })

  useEffect(() => { fetchData() }, [])

  const fetchData = async () => {
    try {
      const res = await axios.get('/api/content/contact')
      setFormData({ whatsapp: '', ...res.data })
    } catch {
      setFormData({
        phone: '+62 812 600 100 28',
        whatsapp: '+62 812 600 100 28',
        email: 'ptoriginaljernangasia@gmail.com',
        address: 'Jl. Contoh Alamat, Medan',
        location: 'Medan, ID (GMT+7)',
        socialMedia: { facebook: '', instagram: '', linkedin: '' }
      })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSaving(true)
    setMessage({ type: '', text: '' })
    try {
      await axios.put('/api/content/contact', formData)
      setMessage({ type: 'success', text: 'Informasi kontak berhasil diupdate!' })
    } catch {
      setMessage({ type: 'error', text: 'Gagal menyimpan. Perubahan hanya tersimpan sementara.' })
    } finally { setSaving(false) }
  }

  const setField = (field, value) => setFormData({ ...formData, [field]: value })
  const setSocial = (field, value) => setFormData({ ...formData, socialMedia: { ...formData.socialMedia, [field]: value } })

  return (
    <div className="max-w-3xl space-y-5">
      <SectionCard>
        <PageHeader
          icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>}
          title="Edit Informasi Kontak"
          description="Kelola nomor telepon, email, dan alamat perusahaan"
        />
        <Alert type={message.type} text={message.text} onDismiss={() => setMessage({ type: '', text: '' })} />

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-bold text-stone-500 uppercase tracking-widest mb-4">Informasi Dasar</h3>
            <div className="space-y-4">
              <InputField label="Nomor Telepon" id="phone" icon={phoneIcon} value={formData.phone} onChange={(e) => setField('phone', e.target.value)} placeholder="+62 812 600 100 28" />
              <InputField label="Nomor WhatsApp" id="whatsapp" icon={whatsappIcon} value={formData.whatsapp} onChange={(e) => setField('whatsapp', e.target.value)} placeholder="+62 812 600 100 28" hint="Digunakan untuk tombol WhatsApp di website" />
              <InputField label="Email" id="email" type="email" icon={emailIcon} value={formData.email} onChange={(e) => setField('email', e.target.value)} placeholder="ptoriginaljernangasia@gmail.com" />
              <InputField label="Lokasi / Kota" id="location" icon={locationIcon} value={formData.location} onChange={(e) => setField('location', e.target.value)} placeholder="Medan, ID (GMT+7)" />
              <TextAreaField label="Alamat Lengkap" id="address" value={formData.address} onChange={(e) => setField('address', e.target.value)} rows={3} placeholder="Alamat lengkap perusahaan..." />
            </div>
          </div>

          {/* Social Media */}
          <div className="pt-4 border-t border-stone-200">
            <h3 className="text-sm font-bold text-stone-500 uppercase tracking-widest mb-4">Media Sosial</h3>
            <div className="space-y-4">
              <InputField label="Facebook" id="facebook" icon={linkIcon} value={formData.socialMedia.facebook} onChange={(e) => setSocial('facebook', e.target.value)} placeholder="https://facebook.com/..." />
              <InputField label="Instagram" id="instagram" icon={linkIcon} value={formData.socialMedia.instagram} onChange={(e) => setSocial('instagram', e.target.value)} placeholder="https://instagram.com/..." />
              <InputField label="LinkedIn" id="linkedin" icon={linkIcon} value={formData.socialMedia.linkedin} onChange={(e) => setSocial('linkedin', e.target.value)} placeholder="https://linkedin.com/company/..." />
            </div>
          </div>

          <FormActions saving={saving} onReset={fetchData} />
        </form>
      </SectionCard>
    </div>
  )
}

export default EditContact
