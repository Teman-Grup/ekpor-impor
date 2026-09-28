import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv'

dotenv.config()

const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY

let supabase = null

if (supabaseUrl && supabaseKey) {
  try {
    supabase = createClient(supabaseUrl, supabaseKey)
    console.log('✅ Supabase Client initialized successfully')
  } catch (error) {
    console.warn('⚠️ Gagal inisialisasi Supabase Client:', error.message)
  }
} else {
  console.log('ℹ️ SUPABASE_URL atau SUPABASE_KEY belum disetel. Menggunakan penyimpanan fallback (data.json).')
}

export const isSupabaseConfigured = () => !!supabase

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
  const { error } = await supabase
    .from('site_content')
    .upsert({
      section_key: sectionKey,
      data: sectionData,
      updated_at: new Date().toISOString()
    }, { onConflict: 'section_key' })

  if (error) {
    console.error(`Error upserting section ${sectionKey} to Supabase:`, error.message)
    throw error
  }

  return sectionData
}

export default supabase
