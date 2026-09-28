import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'
import { 
  getSupabaseAllContent, 
  getSupabaseSection, 
  upsertSupabaseSection, 
  isSupabaseConfigured,
  getSupabaseConfigStatus 
} from './supabase.js'

dotenv.config()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const PORT = process.env.PORT || 5001

// Middleware
app.use(cors())
app.use(express.json())

// Data file path
const DATA_FILE = path.join(__dirname, 'data.json')

// Initialize data file if it doesn't exist
async function initializeData() {
  try {
    await fs.access(DATA_FILE)
  } catch {
    const defaultData = {
      hero: {
        badge: 'EST. 2016 • MEDAN, NORTH SUMATRA, INDONESIA',
        title: 'PT. ORIGINAL JERNANG ASIA',
        subtitle: 'Indonesian Natural Commodities Exporter & Trading',
        image: 'https://lh3.googleusercontent.com/aida/AEtjO1Wy8xOQxV2cl4kkPhaPUunsldrBOL4nBfQD1JsV851HV0FGfUq8sfga0bSWtJ1ic3caH4hP2c1PS1ce5UvjxvlJldIqAZNIKJq4r2sk9NrlOgWGCRPZ6rbSmpsw3pOHsXl_pBk56y-_FnFxu8OgFA5BmZ_MJnjuzwjzoEq7msZlnYRGKaZmFHOmS0XW9vcxhymhLpzxOr1OD9lGyBiOWvTOCnAWEcLDKsnkmXL1xmkskYtDoxEVGzVTIQ',
        established: '2016'
      },
      about: {
        title: 'Tentang Kami & Integritas Perdagangan',
        paragraphs: [
          'PT. Original Jernang Asia merupakan perusahaan yang bergerak di bidang perdagangan besar, pengolahan, serta ekspor dan impor berbagai komoditas hasil alam Indonesia.',
          'Didirikan pada tahun 2016, perusahaan memulai kegiatan usaha dengan fokus pada komoditas jernang dan berkembang dengan memperdagangkan berbagai hasil alam lainnya, seperti kayu gaharu, kemenyan, damar batu, lidi, buah pinang, serta berbagai komoditas hasil alam lainnya.',
          'Dalam perjalanannya, PT. Original Jernang Asia berkembang menjadi salah satu perusahaan yang berfokus pada komoditas jernang di Kota Medan dan telah membangun hubungan perdagangan dengan buyer internasional, termasuk pasar China.',
          'Kami memahami bahwa perdagangan komoditas hasil alam bukan hanya mengenai ketersediaan produk, tetapi juga mengenai kualitas, konsistensi, ketepatan proses, dan kepercayaan. Karena itu, kami terus mengembangkan proses pengolahan dan pengawasan kualitas untuk memastikan produk yang kami hasilkan dapat memenuhi kebutuhan pasar dan menjaga hubungan bisnis jangka panjang dengan buyer.',
          'Dengan fasilitas produksi yang didukung sekitar enam mesin serta laboratorium khusus, kami memiliki kemampuan untuk melakukan proses pengolahan bahan baku secara lebih terstruktur sebelum produk dipasarkan dan diekspor.'
        ]
      },
      pillars: [
        {
          id: 1,
          number: '01',
          icon: 'package-search',
          title: 'Perdagangan Komoditas Hasil Alam',
          description: 'Kami menyediakan berbagai macam komoditas hasil alam Indonesia untuk kebutuhan perdagangan besar dan pasar ekspor (Jernang, Kayu Gaharu, Kemenyan, Damar Batu, Bigar Bambu, Lidi, Buah Pinang).',
          badge: 'Broad Supply Network'
        },
        {
          id: 2,
          number: '02',
          icon: 'cog',
          title: 'Pengolahan Modern Mandiri',
          description: 'PT. Original Jernang Asia tidak hanya berperan sebagai perusahaan perdagangan, tetapi juga melakukan proses pengolahan bahan baku, khususnya pada komoditas jernang, proses produksi dan buah hingga menjadi tepung jernang dan blok dengan dukungan 6 mesin produksi.',
          badge: '6 Mesin Pabrik Aktif'
        },
        {
          id: 3,
          number: '03',
          icon: 'flask-conical',
          title: 'Quality Control & Laboratory',
          description: 'Memiliki laboratorium khusus serta fasilitas pengujian untuk menjaga standar kualitas sebelum dipasarkan dan diekspor. Setiap batch diuji kemurnian, kadar air, dan senyawa aktifnya.',
          badge: 'Dedicated Lab Assays'
        },
        {
          id: 4,
          number: '04',
          icon: 'globe',
          title: 'Export & International Trading',
          description: 'Pengalaman perdagangan dan pengiriman komoditas ke pasar internasional (termasuk China dan India) mulai dari perijinan, packing, karantina resmi, hingga ekspor transportasi kepelabuhan.',
          badge: 'China & India Verified'
        }
      ],
      commodities: [
        {
          id: 1,
          name: 'Jernang (Dragon\'s Blood)',
          description: 'Salah satu komoditas utama dalam perjalanan bisnis PT. Original Jernang Asia. Pengolahan mulai dari bahan baku hingga siap dipasarkan: penanganan buah jernang, pengolahan menjadi tepung jernang, hingga proses pembentukan menjadi blok dengan pengawasan laboratorium.',
          image: 'https://lh3.googleusercontent.com/aida/AEtjO1Wy8xOQxV2cl4kkPhaPUunsldrBOL4nBfQD1JsV851HV0FGfUq8sfga0bSWtJ1ic3caH4hP2c1PS1ce5UvjxvlJldIqAZNIKJq4r2sk9NrlOgWGCRPZ6rbSmpsw3pOHsXl_pBk56y-_FnFxu8OgFA5BmZ_MJnjuzwjzoEq7msZlnYRGKaZmFHOmS0XW9vcxhymhLpzxOr1OD9lGyBiOWvTOCnAWEcLDKsnkmXL1xmkskYtDoxEVGzVTIQ',
          featured: true,
          grade: 'Super / Murni',
          hsCode: '1301.90',
          forms: 'Buah, Tepung & Blok'
        },
        {
          id: 2,
          name: 'Kayu Gaharu',
          description: 'Komoditas hasil alam bernilai tinggi yang menjadi bagian dari portofolio perdagangan dan pengiriman perusahaan.',
          image: 'https://lh3.googleusercontent.com/aida/AEtjO1Wy8xOQxV2cl4kkPhaPUunsldrBOL4nBfQD1JsV851HV0FGfUq8sfga0bSWtJ1ic3caH4hP2c1PS1ce5UvjxvlJldIqAZNIKJq4r2sk9NrlOgWGCRPZ6rbSmpsw3pOHsXl_pBk56y-_FnFxu8OgFA5BmZ_MJnjuzwjzoEq7msZlnYRGKaZmFHOmS0XW9vcxhymhLpzxOr1OD9lGyBiOWvTOCnAWEcLDKsnkmXL1xmkskYtDoxEVGzVTIQ',
          featured: false,
          grade: 'Ekspor Terpilih',
          destination: 'Export to China'
        },
        {
          id: 3,
          name: 'Kemenyan',
          description: 'Komoditas hasil alam yang telah menjadi bagian dari aktivitas perdagangan perusahaan, termasuk jejak pengiriman ke pasar China.',
          image: 'https://lh3.googleusercontent.com/aida/AEtjO1Wy8xOQxV2cl4kkPhaPUunsldrBOL4nBfQD1JsV851HV0FGfUq8sfga0bSWtJ1ic3caH4hP2c1PS1ce5UvjxvlJldIqAZNIKJq4r2sk9NrlOgWGCRPZ6rbSmpsw3pOHsXl_pBk56y-_FnFxu8OgFA5BmZ_MJnjuzwjzoEq7msZlnYRGKaZmFHOmS0XW9vcxhymhLpzxOr1OD9lGyBiOWvTOCnAWEcLDKsnkmXL1xmkskYtDoxEVGzVTIQ',
          featured: false,
          destination: 'Export to China'
        },
        {
          id: 4,
          name: 'Damar Batu',
          description: 'Komoditas hasil alam yang telah diperdagangkan dan dikirim secara berulang untuk pasar ekspor China.',
          image: 'https://lh3.googleusercontent.com/aida/AEtjO1Wy8xOQxV2cl4kkPhaPUunsldrBOL4nBfQD1JsV851HV0FGfUq8sfga0bSWtJ1ic3caH4hP2c1PS1ce5UvjxvlJldIqAZNIKJq4r2sk9NrlOgWGCRPZ6rbSmpsw3pOHsXl_pBk56y-_FnFxu8OgFA5BmZ_MJnjuzwjzoEq7msZlnYRGKaZmFHOmS0XW9vcxhymhLpzxOr1OD9lGyBiOWvTOCnAWEcLDKsnkmXL1xmkskYtDoxEVGzVTIQ',
          featured: false,
          destination: 'Export to China'
        },
        {
          id: 5,
          name: 'Lidi',
          description: 'Komoditas portofolio perdagangan dengan pengalaman dan rekam jejak pengiriman kontainer ekspor ke India.',
          image: 'https://lh3.googleusercontent.com/aida/AEtjO1Wy8xOQxV2cl4kkPhaPUunsldrBOL4nBfQD1JsV851HV0FGfUq8sfga0bSWtJ1ic3caH4hP2c1PS1ce5UvjxvlJldIqAZNIKJq4r2sk9NrlOgWGCRPZ6rbSmpsw3pOHsXl_pBk56y-_FnFxu8OgFA5BmZ_MJnjuzwjzoEq7msZlnYRGKaZmFHOmS0XW9vcxhymhLpzxOr1OD9lGyBiOWvTOCnAWEcLDKsnkmXL1xmkskYtDoxEVGzVTIQ',
          featured: false,
          destination: 'Export to India'
        },
        {
          id: 6,
          name: 'Buah Pinang',
          description: 'Hasil alam pilihan yang telah diperdagangkan dengan rekam jejak ekspor subtansial berbagai pelabuhan utama di India.',
          image: 'https://lh3.googleusercontent.com/aida/AEtjO1Wy8xOQxV2cl4kkPhaPUunsldrBOL4nBfQD1JsV851HV0FGfUq8sfga0bSWtJ1ic3caH4hP2c1PS1ce5UvjxvlJldIqAZNIKJq4r2sk9NrlOgWGCRPZ6rbSmpsw3pOHsXl_pBk56y-_FnFxu8OgFA5BmZ_MJnjuzwjzoEq7msZlnYRGKaZmFHOmS0XW9vcxhymhLpzxOr1OD9lGyBiOWvTOCnAWEcLDKsnkmXL1xmkskYtDoxEVGzVTIQ',
          featured: false,
          destination: 'Export to India'
        },
        {
          id: 7,
          name: 'Bigar Bambu & Hasil Alam Lainnya',
          description: 'Diperdagangkan dan disortir secara presisi sesuai spesifikasi teknis dan permintaan buyer internasional.',
          image: 'https://lh3.googleusercontent.com/aida/AEtjO1Wy8xOQxV2cl4kkPhaPUunsldrBOL4nBfQD1JsV851HV0FGfUq8sfga0bSWtJ1ic3caH4hP2c1PS1ce5UvjxvlJldIqAZNIKJq4r2sk9NrlOgWGCRPZ6rbSmpsw3pOHsXl_pBk56y-_FnFxu8OgFA5BmZ_MJnjuzwjzoEq7msZlnYRGKaZmFHOmS0XW9vcxhymhLpzxOr1OD9lGyBiOWvTOCnAWEcLDKsnkmXL1xmkskYtDoxEVGzVTIQ',
          featured: false,
          grade: 'Kustomisasi Spesifikasi Buyer'
        }
      ],
      contact: {
        phone: '+62 812 600 100 28',
        email: 'ptoriginaljernangasia@gmail.com',
        address: 'Jl. Contoh Alamat, Medan',
        location: 'Medan, ID (GMT+7)',
        socialMedia: {
          facebook: '',
          instagram: '',
          linkedin: ''
        }
      },
      topBar: {
        location: 'Medan, ID (GMT+7)',
        phone: '+62 812 600 100 28',
        email: 'ptoriginaljernangasia@gmail.com'
      },
      navigation: {
        companyName: 'PT. ORIGINAL JERNANG ASIA',
        tagline: 'INDONESIAN NATURAL BOTANICAL COMMODITIES & TRADE',
        logo: 'https://lh3.googleusercontent.com/aida/AEtjO1X2rg3ru0z-WwE_z1dhWflRfkkKBXCbRUzd4ce4bx4G6xhUp8TeV2fvsW90EDaLo1mlSbSyVP8P89lQmNjvnjKBMC1KEilpv2lACFtjij9aTo-R73gbcNwJdj4YDMQLNOYTQIB004GdX8oBUxvT7GN9nrKAjvhvq30w9zQerKu1Pb7LcZ4oyj7w00F2S6SKOAdGXA_1TP8YloMUbJf_pElQZlRsXF10x-JdXs1Zfu0qRMQ8GL07wOPO1A'
      }
    }
    await fs.writeFile(DATA_FILE, JSON.stringify(defaultData, null, 2))
  }
}

// Read data from file
async function readData() {
  try {
    const data = await fs.readFile(DATA_FILE, 'utf-8')
    return JSON.parse(data)
  } catch (err) {
    console.warn('⚠️ Gagal membaca data.json lokal:', err.message)
    return {}
  }
}

// Write data to file
async function writeData(data) {
  try {
    if (!process.env.VERCEL) {
      await fs.writeFile(DATA_FILE, JSON.stringify(data, null, 2))
    }
  } catch (err) {
    console.warn('⚠️ Gagal menulis file lokal (read-only filesystem):', err.message)
  }
}

// Routes

// Diagnostic / health check endpoint
app.get('/api/health', async (req, res) => {
  const sbStatus = getSupabaseConfigStatus()
  res.json({
    status: 'ok',
    environment: process.env.VERCEL ? 'vercel_serverless' : 'local',
    supabase: sbStatus,
    timestamp: new Date().toISOString()
  })
})

// Get all content
app.get('/api/content', async (req, res) => {
  try {
    if (isSupabaseConfigured()) {
      try {
        const supabaseData = await getSupabaseAllContent()
        if (supabaseData && Object.keys(supabaseData).length > 0) {
          return res.json(supabaseData)
        }
      } catch (sbError) {
        console.warn('⚠️ Supabase error on /api/content, fallback ke data.json:', sbError.message)
      }
    }
    const data = await readData()
    res.json(data)
  } catch (error) {
    res.status(500).json({ message: 'Error reading data' })
  }
})

// Get specific section
app.get('/api/content/:section', async (req, res) => {
  try {
    const { section } = req.params
    if (isSupabaseConfigured()) {
      try {
        const sectionData = await getSupabaseSection(section)
        if (sectionData !== null) {
          return res.json(sectionData)
        }
      } catch (sbError) {
        console.warn(`⚠️ Supabase error on get /api/content/${section}, fallback ke data.json:`, sbError.message)
      }
    }
    const data = await readData()
    let sectionData = data[section]
    if (!sectionData && section === 'navbar') {
      sectionData = {
        companyName: data.navigation?.companyName || 'PT. ORIGINAL JERNANG ASIA',
        tagline: data.navigation?.tagline || 'INDONESIAN NATURAL BOTANICAL COMMODITIES & TRADE',
        phone: data.topBar?.phone || '+62 812 600 100 28',
        email: data.topBar?.email || 'ptoriginaljernangasia@gmail.com',
        whatsapp: data.topBar?.phone || '+62 812 600 100 28',
        logoUrl: data.navigation?.logo || ''
      }
      return res.json(sectionData)
    }
    if (!sectionData) {
      return res.status(404).json({ message: 'Section not found' })
    }
    res.json(sectionData)
  } catch (error) {
    res.status(500).json({ message: 'Error reading data' })
  }
})

// Update specific section
app.put('/api/content/:section', async (req, res) => {
  try {
    const { section } = req.params
    let savedToSupabase = false
    let sbErrorDetail = null

    if (isSupabaseConfigured()) {
      try {
        await upsertSupabaseSection(section, req.body)
        if (section === 'navbar') {
          // Sync with navigation & topBar in Supabase
          await upsertSupabaseSection('navigation', {
            companyName: req.body.companyName,
            tagline: req.body.tagline,
            logo: req.body.logoUrl || '/assets/logo.png'
          })
          await upsertSupabaseSection('topBar', {
            phone: req.body.phone,
            email: req.body.email
          })
        }
        savedToSupabase = true
      } catch (sbError) {
        console.warn(`⚠️ Supabase error on save /api/content/${section}:`, sbError.message)
        sbErrorDetail = sbError.message
      }
    }

    // Jika bukan di Vercel, simpan juga ke file lokal data.json
    if (!process.env.VERCEL) {
      try {
        const data = await readData()
        data[section] = req.body
        if (section === 'navbar') {
          data.navigation = {
            ...data.navigation,
            companyName: req.body.companyName,
            tagline: req.body.tagline,
            logo: req.body.logoUrl || data.navigation?.logo || '/assets/logo.png'
          }
          data.topBar = {
            ...data.topBar,
            phone: req.body.phone,
            email: req.body.email
          }
        }
        await writeData(data)
      } catch (fileErr) {
        console.warn('⚠️ Gagal simpan ke file lokal:', fileErr.message)
      }
    }

    // Jika di Vercel dan Supabase gagal disimpan:
    if (process.env.VERCEL && !savedToSupabase) {
      return res.status(500).json({ 
        message: 'Gagal menyimpan ke Supabase.',
        error: sbErrorDetail || 'Supabase credentials belum dikonfigurasi di Environment Variables Vercel.'
      })
    }

    res.json({ 
      message: 'Updated successfully', 
      source: savedToSupabase ? 'supabase' : 'local_json',
      data: req.body 
    })
  } catch (error) {
    console.error('Error updating data:', error)
    res.status(500).json({ message: 'Error updating data', error: error.message })
  }
})

// Admin login (simple authentication)
app.post('/api/auth/login', (req, res) => {
  const { username, password } = req.body
  
  const validUser = process.env.ADMIN_USERNAME || 'admin'
  const validPass = process.env.ADMIN_PASSWORD || 'admin123'

  if (username === validUser && password === validPass) {
    res.json({
      token: 'jwt-token-' + Date.now(),
      user: { username: validUser }
    })
  } else {
    res.status(401).json({ message: 'Username atau password salah' })
  }
})

// Serve static files from React build (for local production / VPS)
if (!process.env.VERCEL) {
  app.use(express.static(path.join(__dirname, '../dist')))
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist', 'index.html'))
  })

  // Initialize and start local server
  initializeData().then(() => {
    app.listen(PORT, '0.0.0.0', () => {
      console.log(`🚀 Server running on port ${PORT}`)
      console.log(`📡 API: http://0.0.0.0:${PORT}/api`)
      console.log(`🌐 Frontend: http://0.0.0.0:${PORT}`)
    })
  })
}

export default app

