import { useState, useEffect } from 'react'
import axios from 'axios'
import { PageHeader, Alert, FormActions, InputField, SectionCard } from './AdminComponents'

function EditNavbar() {
  const [formData, setFormData] = useState({
    companyName: '',
    tagline: '',
    phone: '',
    email: '',
    whatsapp: '',
    logoUrl: '',
  })
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState({ type: '', text: '' })

  useEffect(() => { fetchData() }, [])

  const fetchData = async () => {
    try {
      const res = await axios.get('/api/content/navbar')
      setFormData(res.data)
    } catch {
      setFormData({
        companyName: 'PT. ORIGINAL JERNANG ASIA',
        tagline: 'INDONESIAN NATURAL BOTANICAL COMMODITIES & TRADE',
        phone: '+62 812 600 100 28',
        email: 'ptoriginaljernangasia@gmail.com',
        whatsapp: '+62 812 600 100 28',
        logoUrl: '',
      })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSaving(true)
    setMessage({ type: '', text: '' })
    try {
      await axios.put('/api/content/navbar', formData)
      setMessage({ type: 'success', text: 'Identitas navbar berhasil diupdate!' })
    } catch {
      setMessage({ type: 'error', text: 'Gagal menyimpan. Perubahan hanya tersimpan sementara.' })
    } finally { setSaving(false) }
  }

  const set = (field, value) => setFormData({ ...formData, [field]: value })

  return (
    <div className="max-w-3xl space-y-5">
      <SectionCard>
        <PageHeader
          icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h7" /></svg>}
          title="Edit Navbar & Identitas Perusahaan"
          description="Kelola nama, tagline, logo, dan informasi kontak di navbar website"
        />
        <Alert type={message.type} text={message.text} onDismiss={() => setMessage({ type: '', text: '' })} />

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Brand Identity */}
          <div>
            <h3 className="text-sm font-bold text-stone-500 uppercase tracking-widest mb-4">Identitas Merek</h3>
            <div className="space-y-4">
              <InputField
                label="Nama Perusahaan"
                id="company-name"
                value={formData.companyName}
                onChange={(e) => set('companyName', e.target.value)}
                placeholder="PT. ORIGINAL JERNANG ASIA"
                hint="Ditampilkan di navbar utama website"
                icon={<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>}
              />
              <InputField
                label="Tagline / Slogan"
                id="tagline"
                value={formData.tagline}
                onChange={(e) => set('tagline', e.target.value)}
                placeholder="INDONESIAN NATURAL BOTANICAL COMMODITIES & TRADE"
                hint="Tagline yang ditampilkan di bawah nama perusahaan"
                icon={<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" /></svg>}
              />
            </div>
          </div>

          {/* Logo */}
          <div className="pt-4 border-t border-stone-200">
            <h3 className="text-sm font-bold text-stone-500 uppercase tracking-widest mb-4">Logo</h3>
            <InputField
              label="URL Logo (opsional)"
              id="logo-url"
              value={formData.logoUrl}
              onChange={(e) => set('logoUrl', e.target.value)}
              placeholder="https://... (kosongkan untuk gunakan logo default)"
              hint="Jika dikosongkan, akan menggunakan ikon daun bawaan"
              icon={<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>}
            />
            {formData.logoUrl && (
              <div className="mt-3 p-3 bg-stone-900 rounded-xl inline-flex items-center gap-3">
                <img src={formData.logoUrl} alt="Logo preview" className="h-10 w-10 object-contain" onError={(e) => e.target.src = 'https://placehold.co/40?text=ERR'} />
                <span className="text-xs text-stone-400">Preview logo</span>
              </div>
            )}
          </div>

          {/* Contact in Navbar */}
          <div className="pt-4 border-t border-stone-200">
            <h3 className="text-sm font-bold text-stone-500 uppercase tracking-widest mb-4">Kontak di Navbar / TopBar</h3>
            <div className="space-y-4">
              <InputField
                label="Nomor Telepon"
                id="nav-phone"
                value={formData.phone}
                onChange={(e) => set('phone', e.target.value)}
                placeholder="+62 812 600 100 28"
                icon={<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>}
              />
              <InputField
                label="WhatsApp (untuk tombol CTA)"
                id="nav-wa"
                value={formData.whatsapp}
                onChange={(e) => set('whatsapp', e.target.value)}
                placeholder="+62 812 600 100 28"
                hint="Digunakan untuk tombol REQUEST CATALOG / INQUIRY di navbar"
                icon={<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>}
              />
              <InputField
                label="Email"
                id="nav-email"
                type="email"
                value={formData.email}
                onChange={(e) => set('email', e.target.value)}
                placeholder="ptoriginaljernangasia@gmail.com"
                icon={<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>}
              />
            </div>
          </div>

          <FormActions saving={saving} onReset={fetchData} />
        </form>
      </SectionCard>
    </div>
  )
}

export default EditNavbar
