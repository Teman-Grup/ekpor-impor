-- ====================================================================
-- SUPABASE SQL SCHEMA: PT. ORIGINAL JERNANG ASIA
-- ====================================================================
-- Petunjuk:
-- 1. Buka dashboard Supabase (https://supabase.com/dashboard)
-- 2. Pilih Project Anda -> Klik menu "SQL Editor" di bilah kiri
-- 3. Klik "New Query", paste seluruh kode di bawah ini, lalu klik "Run"
-- ====================================================================

-- 1. Hapus tabel lama jika sudah pernah dibuat sebelumnya (agar kolomnya sesuai)
drop table if exists site_content cascade;

-- Buat Tabel Konten Website baru
create table site_content (
  section_key text primary key,
  data jsonb not null,
  updated_at timestamp with time zone default timezone('utc'::text, now())
);

-- 2. Beri hak akses (Row Level Security)
alter table site_content enable row level security;

-- Izinkan siapa saja (public / anon) membaca konten website
drop policy if exists "Allow public read access" on site_content;
create policy "Allow public read access"
  on site_content for select
  using (true);

-- Izinkan full access untuk backend / service_role / anon (bisa disesuaikan kebutuhan)
drop policy if exists "Allow full access to site_content" on site_content;
create policy "Allow full access to site_content"
  on site_content for all
  using (true)
  with check (true);

-- 3. Masukkan Data Default Konten Website (Initial Data)
insert into site_content (section_key, data)
values
(
  'hero',
  '{
    "badge": "EST. 2016 • MEDAN, NORTH SUMATRA, INDONESIA",
    "title": "PT. ORIGINAL JERNANG ASIA",
    "subtitle": "Indonesian Natural Commodities Exporter & Trading",
    "image": "https://lh3.googleusercontent.com/aida/AEtjO1Wy8xOQxV2cl4kkPhaPUunsldrBOL4nBfQD1JsV851HV0FGfUq8sfga0bSWtJ1ic3caH4hP2c1PS1ce5UvjxvlJldIqAZNIKJq4r2sk9NrlOgWGCRPZ6rbSmpsw3pOHsXl_pBk56y-_FnFxu8OgFA5BmZ_MJnjuzwjzoEq7msZlnYRGKaZmFHOmS0XW9vcxhymhLpzxOr1OD9lGyBiOWvTOCnAWEcLDKsnkmXL1xmkskYtDoxEVGzVTIQ",
    "established": "2016"
  }'::jsonb
),
(
  'about',
  '{
    "title": "Tentang Kami & Integritas Perdagangan",
    "paragraphs": [
      "PT. Original Jernang Asia merupakan perusahaan yang bergerak di bidang perdagangan besar, pengolahan, serta ekspor dan impor berbagai komoditas hasil alam Indonesia.",
      "Didirikan pada tahun 2016, perusahaan memulai kegiatan usaha dengan fokus pada komoditas jernang dan berkembang dengan memperdagangkan berbagai hasil alam lainnya, seperti kayu gaharu, kemenyan, damar batu, lidi, buah pinang, serta berbagai komoditas hasil alam lainnya.",
      "Dalam perjalanannya, PT. Original Jernang Asia berkembang menjadi salah satu perusahaan yang berfokus pada komoditas jernang di Kota Medan dan telah membangun hubungan perdagangan dengan buyer internasional, termasuk pasar China.",
      "Kami memahami bahwa perdagangan komoditas hasil alam bukan hanya mengenai ketersediaan produk, tetapi juga mengenai kualitas, konsistensi, ketepatan proses, dan kepercayaan. Karena itu, kami terus mengembangkan proses pengolahan dan pengawasan kualitas untuk memastikan produk yang kami hasilkan dapat memenuhi kebutuhan pasar dan menjaga hubungan bisnis jangka panjang dengan buyer.",
      "Dengan fasilitas produksi yang didukung sekitar enam mesin serta laboratorium khusus, kami memiliki kemampuan untuk melakukan proses pengolahan bahan baku secara lebih terstruktur sebelum produk dipasarkan dan diekspor."
    ]
  }'::jsonb
),
(
  'pillars',
  '[
    {
      "id": 1,
      "number": "01",
      "icon": "package-search",
      "title": "Perdagangan Komoditas Hasil Alam",
      "description": "Kami menyediakan berbagai macam komoditas hasil alam Indonesia untuk kebutuhan perdagangan besar dan pasar ekspor (Jernang, Kayu Gaharu, Kemenyan, Damar Batu, Bigar Bambu, Lidi, Buah Pinang).",
      "badge": "Broad Supply Network"
    },
    {
      "id": 2,
      "number": "02",
      "icon": "cog",
      "title": "Pengolahan Modern Mandiri",
      "description": "PT. Original Jernang Asia tidak hanya berperan sebagai perusahaan perdagangan, tetapi juga melakukan proses pengolahan bahan baku, khususnya pada komoditas jernang, proses produksi dan buah hingga menjadi tepung jernang dan blok dengan dukungan 6 mesin produksi.",
      "badge": "6 Mesin Pabrik Aktif"
    },
    {
      "id": 3,
      "number": "03",
      "icon": "flask-conical",
      "title": "Quality Control & Laboratory",
      "description": "Memiliki laboratorium khusus serta fasilitas pengujian untuk menjaga standar kualitas sebelum dipasarkan dan diekspor. Setiap batch diuji kemurnian, kadar air, dan senyawa aktifnya.",
      "badge": "Dedicated Lab Assays"
    },
    {
      "id": 4,
      "number": "04",
      "icon": "globe",
      "title": "Export & International Trading",
      "description": "Pengalaman perdagangan dan pengiriman komoditas ke pasar internasional (termasuk China dan India) mulai dari perijinan, packing, karantina resmi, hingga ekspor transportasi kepelabuhan.",
      "badge": "China & India Verified"
    }
  ]'::jsonb
),
(
  'commodities',
  '[
    {
      "id": 1,
      "name": "Jernang (Dragon''s Blood)",
      "description": "Salah satu komoditas utama dalam perjalanan bisnis PT. Original Jernang Asia. Pengolahan mulai dari bahan baku hingga siap dipasarkan: penanganan buah jernang, pengolahan menjadi tepung jernang, hingga proses pembentukan menjadi blok dengan pengawasan laboratorium.",
      "image": "https://lh3.googleusercontent.com/aida/AEtjO1Wy8xOQxV2cl4kkPhaPUunsldrBOL4nBfQD1JsV851HV0FGfUq8sfga0bSWtJ1ic3caH4hP2c1PS1ce5UvjxvlJldIqAZNIKJq4r2sk9NrlOgWGCRPZ6rbSmpsw3pOHsXl_pBk56y-_FnFxu8OgFA5BmZ_MJnjuzwjzoEq7msZlnYRGKaZmFHOmS0XW9vcxhymhLpzxOr1OD9lGyBiOWvTOCnAWEcLDKsnkmXL1xmkskYtDoxEVGzVTIQ",
      "featured": true,
      "grade": "Super / Murni",
      "hsCode": "1301.90",
      "forms": "Buah, Tepung & Blok"
    },
    {
      "id": 2,
      "name": "Kayu Gaharu",
      "description": "Komoditas hasil alam bernilai tinggi yang menjadi bagian dari portofolio perdagangan dan pengiriman perusahaan.",
      "image": "https://lh3.googleusercontent.com/aida/AEtjO1Wy8xOQxV2cl4kkPhaPUunsldrBOL4nBfQD1JsV851HV0FGfUq8sfga0bSWtJ1ic3caH4hP2c1PS1ce5UvjxvlJldIqAZNIKJq4r2sk9NrlOgWGCRPZ6rbSmpsw3pOHsXl_pBk56y-_FnFxu8OgFA5BmZ_MJnjuzwjzoEq7msZlnYRGKaZmFHOmS0XW9vcxhymhLpzxOr1OD9lGyBiOWvTOCnAWEcLDKsnkmXL1xmkskYtDoxEVGzVTIQ",
      "featured": false,
      "grade": "Ekspor Terpilih",
      "destination": "Export to China"
    },
    {
      "id": 3,
      "name": "Kemenyan",
      "description": "Komoditas hasil alam yang telah menjadi bagian dari aktivitas perdagangan perusahaan, termasuk jejak pengiriman ke pasar China.",
      "image": "https://lh3.googleusercontent.com/aida/AEtjO1Wy8xOQxV2cl4kkPhaPUunsldrBOL4nBfQD1JsV851HV0FGfUq8sfga0bSWtJ1ic3caH4hP2c1PS1ce5UvjxvlJldIqAZNIKJq4r2sk9NrlOgWGCRPZ6rbSmpsw3pOHsXl_pBk56y-_FnFxu8OgFA5BmZ_MJnjuzwjzoEq7msZlnYRGKaZmFHOmS0XW9vcxhymhLpzxOr1OD9lGyBiOWvTOCnAWEcLDKsnkmXL1xmkskYtDoxEVGzVTIQ",
      "featured": false,
      "destination": "Export to China"
    },
    {
      "id": 4,
      "name": "Damar Batu",
      "description": "Komoditas hasil alam yang telah diperdagangkan dan dikirim secara berulang untuk pasar ekspor China.",
      "image": "https://lh3.googleusercontent.com/aida/AEtjO1Wy8xOQxV2cl4kkPhaPUunsldrBOL4nBfQD1JsV851HV0FGfUq8sfga0bSWtJ1ic3caH4hP2c1PS1ce5UvjxvlJldIqAZNIKJq4r2sk9NrlOgWGCRPZ6rbSmpsw3pOHsXl_pBk56y-_FnFxu8OgFA5BmZ_MJnjuzwjzoEq7msZlnYRGKaZmFHOmS0XW9vcxhymhLpzxOr1OD9lGyBiOWvTOCnAWEcLDKsnkmXL1xmkskYtDoxEVGzVTIQ",
      "featured": false,
      "destination": "Export to China"
    },
    {
      "id": 5,
      "name": "Lidi",
      "description": "Komoditas portofolio perdagangan dengan pengalaman dan rekam jejak pengiriman kontainer ekspor ke India.",
      "image": "https://lh3.googleusercontent.com/aida/AEtjO1Wy8xOQxV2cl4kkPhaPUunsldrBOL4nBfQD1JsV851HV0FGfUq8sfga0bSWtJ1ic3caH4hP2c1PS1ce5UvjxvlJldIqAZNIKJq4r2sk9NrlOgWGCRPZ6rbSmpsw3pOHsXl_pBk56y-_FnFxu8OgFA5BmZ_MJnjuzwjzoEq7msZlnYRGKaZmFHOmS0XW9vcxhymhLpzxOr1OD9lGyBiOWvTOCnAWEcLDKsnkmXL1xmkskYtDoxEVGzVTIQ",
      "featured": false,
      "destination": "Export to India"
    },
    {
      "id": 6,
      "name": "Buah Pinang",
      "description": "Hasil alam pilihan yang telah diperdagangkan dengan rekam jejak ekspor subtansial berbagai pelabuhan utama di India.",
      "image": "https://lh3.googleusercontent.com/aida/AEtjO1Wy8xOQxV2cl4kkPhaPUunsldrBOL4nBfQD1JsV851HV0FGfUq8sfga0bSWtJ1ic3caH4hP2c1PS1ce5UvjxvlJldIqAZNIKJq4r2sk9NrlOgWGCRPZ6rbSmpsw3pOHsXl_pBk56y-_FnFxu8OgFA5BmZ_MJnjuzwjzoEq7msZlnYRGKaZmFHOmS0XW9vcxhymhLpzxOr1OD9lGyBiOWvTOCnAWEcLDKsnkmXL1xmkskYtDoxEVGzVTIQ",
      "featured": false,
      "destination": "Export to India"
    },
    {
      "id": 7,
      "name": "Bigar Bambu & Hasil Alam Lainnya",
      "description": "Diperdagangkan dan disortir secara presisi sesuai spesifikasi teknis dan permintaan buyer internasional.",
      "image": "https://lh3.googleusercontent.com/aida/AEtjO1Wy8xOQxV2cl4kkPhaPUunsldrBOL4nBfQD1JsV851HV0FGfUq8sfga0bSWtJ1ic3caH4hP2c1PS1ce5UvjxvlJldIqAZNIKJq4r2sk9NrlOgWGCRPZ6rbSmpsw3pOHsXl_pBk56y-_FnFxu8OgFA5BmZ_MJnjuzwjzoEq7msZlnYRGKaZmFHOmS0XW9vcxhymhLpzxOr1OD9lGyBiOWvTOCnAWEcLDKsnkmXL1xmkskYtDoxEVGzVTIQ",
      "featured": false,
      "grade": "Kustomisasi Spesifikasi Buyer"
    }
  ]'::jsonb
),
(
  'contact',
  '{
    "phone": "+62 812 600 100 28",
    "email": "ptoriginaljernangasia@gmail.com",
    "address": "Jl. Contoh Alamat, Medan",
    "location": "Medan, ID (GMT+7)",
    "socialMedia": {
      "facebook": "",
      "instagram": "",
      "linkedin": ""
    }
  }'::jsonb
),
(
  'topBar',
  '{
    "location": "Medan, ID (GMT+7)",
    "phone": "+62 812 600 100 28",
    "email": "ptoriginaljernangasia@gmail.com"
  }'::jsonb
),
(
  'navigation',
  '{
    "companyName": "PT. ORIGINAL JERNANG ASIA",
    "tagline": "INDONESIAN NATURAL BOTANICAL COMMODITIES & TRADE",
    "logo": "https://lh3.googleusercontent.com/aida/AEtjO1X2rg3ru0z-WwE_z1dhWflRfkkKBXCbRUzd4ce4bx4G6xhUp8TeV2fvsW90EDaLo1mlSbSyVP8P89lQmNjvnjKBMC1KEilpv2lACFtjij9aTo-R73gbcNwJdj4YDMQLNOYTQIB004GdX8oBUxvT7GN9nrKAjvhvq30w9zQerKu1Pb7LcZ4oyj7w00F2S6SKOAdGXA_1TP8YloMUbJf_pElQZlRsXF10x-JdXs1Zfu0qRMQ8GL07wOPO1A"
  }'::jsonb
),
(
  'navbar',
  '{
    "companyName": "PT. ORIGINAL JERNANG ASIA",
    "tagline": "INDONESIAN NATURAL BOTANICAL COMMODITIES & TRADE",
    "phone": "+62 812 600 100 28",
    "email": "ptoriginaljernangasia@gmail.com",
    "whatsapp": "+62 812 600 100 28",
    "logoUrl": ""
  }'::jsonb
),
(
  'portfolio',
  '{
    "title": "Portfolio Ekspor",
    "subtitle": "Komoditas kami telah menembus pasar internasional",
    "countries": [
      { "id": 1, "name": "China", "flag": "🇨🇳", "commodity": "Jernang, Gaharu", "volume": "±20 Ton/Tahun" },
      { "id": 2, "name": "India", "flag": "🇮🇳", "commodity": "Jernang, Kopal", "volume": "±15 Ton/Tahun" },
      { "id": 3, "name": "Malaysia", "flag": "🇲🇾", "commodity": "Berbagai Komoditas", "volume": "±10 Ton/Tahun" }
    ]
  }'::jsonb
),
(
  'operational',
  '{
    "title": "Alur Operasional",
    "subtitle": "Proses bisnis yang terstruktur dan profesional",
    "steps": [
      { "id": 1, "step": "01", "title": "Pengumpulan Bahan Baku", "description": "Pengumpulan komoditas dari petani dan supplier terpercaya di seluruh Sumatera." },
      { "id": 2, "step": "02", "title": "Sortasi & Quality Control", "description": "Pemilahan dan pengecekan kualitas di laboratorium internal sesuai standar ekspor." },
      { "id": 3, "step": "03", "title": "Pengolahan & Produksi", "description": "Proses pengolahan dengan 6 unit mesin produksi modern." },
      { "id": 4, "step": "04", "title": "Pengemasan & Labeling", "description": "Pengemasan sesuai standar internasional dengan label lengkap sesuai regulasi." },
      { "id": 5, "step": "05", "title": "Ekspor & Distribusi", "description": "Pengiriman ke buyer internasional dengan dokumen ekspor lengkap." }
    ]
  }'::jsonb
),
(
  'legalitas',
  '{
    "title": "Legalitas & Perizinan",
    "subtitle": "Beroperasi dengan legalitas lengkap dan terpercaya",
    "documents": [
      { "id": 1, "name": "NIB (Nomor Induk Berusaha)", "number": "1234567890", "issuer": "OSS - Kementerian Investasi", "year": "2016", "status": "Aktif" },
      { "id": 2, "name": "SIUP (Surat Izin Usaha Perdagangan)", "number": "SIUP-XXX/MEDAN/2016", "issuer": "Dinas Perdagangan Kota Medan", "year": "2016", "status": "Aktif" },
      { "id": 3, "name": "SKA (Surat Keterangan Asal)", "number": "-", "issuer": "Dinas Perindustrian & Perdagangan", "year": "2016", "status": "Aktif" },
      { "id": 4, "name": "NPWP Perusahaan", "number": "XX.XXX.XXX.X-XXX.XXX", "issuer": "Direktorat Jenderal Pajak", "year": "2016", "status": "Aktif" }
    ]
  }'::jsonb
)
on conflict (section_key) 
do update set 
  data = excluded.data,
  updated_at = timezone('utc'::text, now());
