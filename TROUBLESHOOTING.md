# 🔧 Troubleshooting Guide

## ❌ Error: "listen EACCES: permission denied 0.0.0.0:5000"

### Penyebab:
- Port 5000 sudah digunakan oleh aplikasi lain (biasanya oleh AirPlay di Windows)
- Permission issue untuk binding ke port

### Solusi:
✅ **Sudah diperbaiki!** Server sekarang menggunakan port **5001** (bukan 5000)

### Jika masih ada masalah:

**Opsi 1: Ubah Port Backend**

Edit file `server/index.js`:
```javascript
const PORT = process.env.PORT || 5002  // Ganti ke port lain
```

Jangan lupa update juga `vite.config.js`:
```javascript
proxy: {
  '/api': {
    target: 'http://localhost:5002',  // Sesuaikan dengan port baru
    changeOrigin: true,
  }
}
```

**Opsi 2: Cek Port yang Digunakan**

```powershell
# Cek aplikasi yang pakai port 5001
netstat -ano | findstr :5001

# Kill process (ganti PID dengan nomor dari command di atas)
taskkill /PID [nomor_pid] /F
```

---

## ❌ Error: "Cannot find module"

### Solusi:
```powershell
# Hapus node_modules dan install ulang
Remove-Item -Recurse -Force node_modules
Remove-Item package-lock.json
npm install
```

---

## ❌ Frontend tidak bisa akses API

### Gejala:
- Website loading tapi data tidak muncul
- Error di console: "Failed to fetch"

### Solusi:

1. **Pastikan Backend Running**
   ```powershell
   # Di terminal backend, harus ada tulisan:
   🚀 Server running on port 5001
   ```

2. **Cek URL di Browser**
   - Gunakan: `http://localhost:3000` ✅
   - Bukan: `http://127.0.0.1:3000` ❌

3. **Clear Browser Cache**
   - Tekan `Ctrl + Shift + R` di browser

4. **Test API langsung**
   Buka di browser: http://localhost:5001/api/content
   - Jika muncul JSON data, API berjalan normal ✅
   - Jika tidak muncul, backend bermasalah ❌

---

## ❌ Error: "Port 3000 already in use"

### Solusi:

**Opsi 1: Tutup aplikasi yang pakai port 3000**
```powershell
netstat -ano | findstr :3000
taskkill /PID [nomor_pid] /F
```

**Opsi 2: Ubah port Vite**

Edit `vite.config.js`:
```javascript
server: {
  port: 3001,  // Ganti ke port lain
  // ...
}
```

---

## ❌ Perubahan di Dashboard tidak tersimpan

### Solusi:

1. **Cek Terminal Backend**
   - Harus ada log request saat klik "Simpan"
   
2. **Cek file `server/data.json`**
   - Buka file ini, pastikan data berubah setelah save

3. **Clear Cache**
   - Refresh browser dengan `Ctrl + Shift + R`

4. **Cek Console Browser**
   - Tekan F12
   - Tab "Console" - cek error
   - Tab "Network" - cek request API berhasil (status 200)

---

## ❌ Gambar tidak muncul

### Solusi:

1. **Pastikan URL gambar valid**
   - Test buka URL gambar di browser baru
   - URL harus dimulai dengan `http://` atau `https://`

2. **Gunakan placeholder sementara**
   ```
   https://via.placeholder.com/800x600?text=Your+Image
   ```

3. **Upload ke cloud storage**
   - ImgBB: https://imgbb.com
   - Cloudinary: https://cloudinary.com
   - Imgur: https://imgur.com

---

## ❌ npm install lambat

### Solusi:

**Gunakan mirror regional:**
```powershell
npm config set registry https://registry.npmmirror.com
npm install
```

**Atau gunakan pnpm (lebih cepat):**
```powershell
npm install -g pnpm
pnpm install
pnpm run dev
```

---

## ❌ Build error

### Solusi:

1. **Clean install**
   ```powershell
   Remove-Item -Recurse -Force node_modules
   Remove-Item -Recurse -Force dist
   npm install
   npm run build
   ```

2. **Cek versi Node.js**
   ```powershell
   node --version
   # Harus v18 atau lebih baru
   ```

---

## 🆘 Masalah Lain?

### Langkah Debug:

1. **Cek Terminal Backend**
   - Ada error message? Screenshot dan cari solusinya

2. **Cek Console Browser (F12)**
   - Tab Console: cek error JavaScript
   - Tab Network: cek API request failed

3. **Restart Everything**
   ```powershell
   # Tutup semua terminal
   # Buka terminal baru
   npm run server
   # Buka terminal kedua
   npm run dev
   ```

4. **Restart Komputer**
   - Kadang Windows perlu restart untuk release port

---

## 📞 Butuh Bantuan?

Jika masih ada masalah:

1. Screenshot error message
2. Copy paste full error dari terminal
3. Jelaskan langkah yang sudah dilakukan
4. Cek dokumentasi: README.md dan INSTALASI.md

---

## ✅ Checklist Normal Operation

Pastikan semua ini OK:

- [ ] Terminal backend running (port 5001)
- [ ] Terminal frontend running (port 3000)
- [ ] Browser buka: http://localhost:3000
- [ ] Bisa login admin
- [ ] Bisa edit content
- [ ] Perubahan tersimpan dan muncul di homepage

Jika semua checklist di atas ✅, maka project berjalan normal! 🎉
