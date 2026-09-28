import { isSupabaseConfigured, getSupabaseAllContent } from './supabase.js'

console.log('🔍 Memeriksa koneksi Supabase...')
if (!isSupabaseConfigured()) {
  console.log('⚠️ SUPABASE_URL atau SUPABASE_ANON_KEY belum disetel di file .env')
  console.log('ℹ️ Server saat ini berjalan dengan local data.json.')
} else {
  console.log('✅ Konfigurasi ditemukan. Menguji query ke tabel site_content...')
  try {
    const data = await getSupabaseAllContent()
    console.log(`✅ Berhasil terhubung ke Supabase! Ditemukan ${Object.keys(data).length} sections.`)
  } catch (err) {
    console.error('❌ Gagal membaca dari Supabase:', err.message)
  }
}
