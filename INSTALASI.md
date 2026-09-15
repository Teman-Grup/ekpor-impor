# 📋 Panduan Instalasi & Menjalankan Project

## Prerequisites

Pastikan sudah terinstall:
- Node.js (v18 atau lebih baru) ✅ Sudah terinstall v20.14.0
- npm (biasanya sudah include dengan Node.js)

## Langkah-langkah Instalasi

### 1. Install Dependencies

Buka terminal/PowerShell di folder project ini, kemudian jalankan:

```powershell
npm install
```

Proses ini akan menginstall semua package yang dibutuhkan (React, Express, Tailwind, dll). Tunggu hingga selesai (mungkin beberapa menit tergantung koneksi internet).

### 2. Jalankan Backend Server

Buka terminal/PowerShell pertama dan jalankan:

```powershell
npm run server
```

Anda akan melihat output seperti:
```
🚀 Server running on port 5001
📡 API: http://localhost:5001/api
```

**Biarkan terminal ini tetap berjalan!**

### 3. Jalankan Frontend (React)

Buka terminal/PowerShell **KEDUA** (terminal baru) di folder yang sama, lalu jalankan:

```powershell
npm run dev
```

Anda akan melihat output seperti:
```
VITE ready in ... ms
➜  Local:   http://localhost:3000/
```

**Biarkan terminal ini juga tetap berjalan!**

### 4. Akses Aplikasi

Buka browser dan kunjungi:

- **Website Utama:** http://localhost:3000
- **Admin Dashboard:** http://localhost:3000/admin/login

## Login ke Dashboard Admin

```
Username: admin
Password: admin123
```

## Troubleshooting

### Error: "Cannot find module"

Jalankan ulang:
```powershell
npm install
```

### Error: "Port 3000 already in use"

Ada aplikasi lain yang menggunakan port 3000. Tutup aplikasi tersebut atau edit `vite.config.js` untuk mengubah port.

### Error: "Port 5001 already in use"

Ada aplikasi lain yang menggunakan port 5001. Tutup aplikasi tersebut atau edit `server/index.js` untuk mengubah PORT.

### Frontend tidak bisa connect ke Backend

Pastikan:
1. Backend server berjalan (cek terminal pertama)
2. URL di browser benar: http://localhost:3000 (bukan 127.0.0.1)
3. Kedua terminal tetap berjalan

## Cara Menghentikan Server

Tekan `Ctrl + C` di kedua terminal untuk menghentikan server.

## Build untuk Production

Jika ingin build untuk production (deploy):

```powershell
npm run build
```

File hasil build akan ada di folder `dist/`.

## Deploy ke Server

### Backend (Express):
1. Upload folder `server/` ke VPS/hosting
2. Install dependencies: `npm install`
3. Jalankan: `node server/index.js`

### Frontend (React):
1. Build: `npm run build`
2. Upload folder `dist/` ke hosting (Vercel, Netlify, dll)
3. Configure untuk SPA (Single Page Application)

## Struktur Folder Penting

```
d:\project1\ekpor_impor\
├── src/                    # Source code React
│   ├── components/         # Komponen UI
│   ├── pages/             # Halaman-halaman
│   └── App.jsx            # Root component
├── server/                # Backend API
│   ├── index.js           # Server Express
│   └── data.json          # Database (otomatis dibuat)
├── package.json           # Dependencies
└── vite.config.js         # Config Vite
```

## Tips

1. **Jangan tutup kedua terminal** saat development
2. **Simpan perubahan di dashboard** sebelum reload page
3. **Backup file `server/data.json`** jika ada data penting
4. **Gunakan Git** untuk version control

## Bantuan

Jika ada masalah, periksa:
1. Console browser (F12) untuk error frontend
2. Terminal backend untuk error API
3. Pastikan kedua server berjalan

---

Selamat menggunakan! 🎉
