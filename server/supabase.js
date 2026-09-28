import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv'

dotenv.config()

function sanitizeEnv(val, varName) {
  if (!val) return ''
  let s = String(val).trim()
  if (varName && s.startsWith(`${varName}=`)) {
    s = s.substring(varName.length + 1).trim()
  }
  s = s.replace(/^['"`]+|['"`]+$/g, '').trim()
  return s
}

const rawUrl = sanitizeEnv(process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL, 'SUPABASE_URL')
let supabaseUrl = rawUrl
if (supabaseUrl && !supabaseUrl.startsWith('http://') && !supabaseUrl.startsWith('https://')) {
  supabaseUrl = `https://${supabaseUrl}`
}
if (supabaseUrl) {
  supabaseUrl = supabaseUrl.replace(/\/+$/, '')
}

let supabaseKey = sanitizeEnv(
  process.env.SUPABASE_SERVICE_ROLE_KEY || 
  process.env.SUPABASE_ANON_KEY || 
  process.env.VITE_SUPABASE_ANON_KEY,
  'SUPABASE_ANON_KEY'
)
if (!supabaseKey && process.env.SUPABASE_SERVICE_ROLE_KEY) {
  supabaseKey = sanitizeEnv(process.env.SUPABASE_SERVICE_ROLE_KEY, 'SUPABASE_SERVICE_ROLE_KEY')
}

let supabase = null

if (supabaseUrl && supabaseKey) {
  try {
    supabase = createClient(supabaseUrl, supabaseKey, {
      auth: {
        persistSession: false,
        autoRefreshToken: false
      }
    })
    console.log('✅ Supabase Client initialized successfully with URL:', supabaseUrl)
  } catch (error) {
    console.warn('⚠️ Gagal inisialisasi Supabase Client:', error.message)
  }
} else {
  console.log('ℹ️ SUPABASE_URL atau SUPABASE_KEY belum disetel. Menggunakan penyimpanan fallback (data.json).')
}

export const isSupabaseConfigured = () => !!supabase

export const getSupabaseConfigStatus = () => ({
  configured: !!supabase,
  urlHost: supabaseUrl ? supabaseUrl.replace(/https?:\/\//, '').split('/')[0] : 'not-set',
  keyPrefix: supabaseKey ? supabaseKey.substring(0, 8) + '...' : 'not-set',
  keyLength: supabaseKey ? supabaseKey.length : 0
})

/**
 * Mengambil semua konten dari tabel `site_content`
 */
export async function getSupabaseAllContent() {
  if (!supabase) return null
  const { data, error } = await supabase
    .from('site_content')
    .select('section_key, data')

  if (error) {
    console.error('Error fetching all from Supabase:', error.message)
    throw error
  }

  // Ubah baris tabel [{ section_key: 'hero', data: {...} }] menjadi format object: { hero: {...} }
  const result = {}
  data.forEach((row) => {
    result[row.section_key] = row.data
  })
  return result
}

/**
 * Mengambil satu bagian (section) konten
 */
export async function getSupabaseSection(sectionKey) {
  if (!supabase) return null
  const { data, error } = await supabase
    .from('site_content')
    .select('data')
    .eq('section_key', sectionKey)
    .single()

  if (error) {
    if (error.code === 'PGRST116') {
      // Row not found
      return null
    }
    console.error(`Error fetching section ${sectionKey} from Supabase:`, error.message)
    throw error
  }

  return data ? data.data : null
}

/**
 * Menyimpan / memperbarui satu bagian (section) konten
 */
export async function upsertSupabaseSection(sectionKey, sectionData) {
  if (!supabase) return null
  try {
    const { error } = await supabase
      .from('site_content')
      .upsert({
        section_key: sectionKey,
        data: sectionData,
        updated_at: new Date().toISOString()
      }, { onConflict: 'section_key' })

    if (error) {
      console.error(`Error upserting section ${sectionKey} to Supabase:`, error.message)
      throw new Error(error.message)
    }

    return sectionData
  } catch (err) {
    const causeMsg = err.cause ? (err.cause.message || err.cause.code || String(err.cause)) : null
    const finalMsg = causeMsg ? `${err.message} (${causeMsg})` : err.message
    console.error(`Supabase upsert error for ${sectionKey}:`, finalMsg)
    throw new Error(finalMsg)
  }
}

export default supabase
