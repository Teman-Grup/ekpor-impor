# 🚀 Panduan Deployment

Ada **2 opsi deployment** untuk aplikasi ini:

---

## 📦 Opsi 1: Deploy Terpisah (Recommended)

### ✅ Kelebihan:
- Lebih fleksibel dan scalable
- Frontend di CDN global (cepat)
- Gratis: Vercel (frontend) + Railway (backend)

### 🎯 Langkah Deploy:

#### A. Deploy Backend ke Railway/Render

1. **Push ke GitHub** (jika belum):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/USERNAME/REPO.git
   git push -u origin main
   ```

2. **Deploy ke Railway**:
   - Buka https://railway.app
   - Login dengan GitHub
   - New Project → Deploy from GitHub repo
   - Pilih repo Anda
   - Add variables:
     ```
     PORT=5001
     NODE_ENV=production
     ```
   - Railway akan auto-detect `server/index.js`
   - Deploy akan jalan otomatis
   - Copy URL backend: `https://your-app.railway.app`

#### B. Deploy Frontend ke Vercel

1. **Update API URL** di frontend:
   ```bash
   # Buat file .env.production
   echo "VITE_API_URL=https://your-app.railway.app/api" > .env.production
   ```

2. **Update vite.config.js**:
   ```javascript
   // Tambahkan di vite.config.js
   export default defineConfig({
     // ... existing config
     define: {
       'import.meta.env.VITE_API_URL': JSON.stringify(process.env.VITE_API_URL || 'http://localhost:5001/api')
     }
   })
   ```

3. **Update HomePage.jsx** untuk pakai env variable:
   ```javascript
   const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001/api'
   ```

4. **Build dan Deploy**:
   ```bash
   npm run build
   ```

5. **Deploy ke Vercel**:
   - Buka https://vercel.com
   - Login dengan GitHub
   - Import repository
   - Framework preset: **Vite**
   - Build command: `npm run build`
   - Output directory: `dist`
   - Environment variables:
     ```
     VITE_API_URL=https://your-app.railway.app/api
     ```
   - Deploy!

---

## 📦 Opsi 2: Deploy Jadi Satu (Lebih Simpel)

### ✅ Kelebihan:
- Cuma 1 server, lebih mudah maintain
- 1 URL untuk semua (frontend + backend)
- Cocok untuk pemula

### 🎯 Langkah Deploy:

#### 1. Modifikasi `server/index.js`

Tambahkan di **AKHIR file** sebelum `app.listen()`:

```javascript
// Serve static files from React build
app.use(express.static(path.join(__dirname, '../dist')))

// Handle React routing, return all requests to React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist', 'index.html'))
})
```

#### 2. Update `package.json`

Tambahkan script deployment:

```json
{
  "scripts": {
    "dev": "vite",
    "server": "node server/index.js",
    "build": "vite build",
    "start": "node server/index.js",
    "deploy": "npm run build && npm start"
  }
}
```

#### 3. Build Frontend

```bash
npm run build
```

Ini akan generate folder `dist/` dengan file HTML, CSS, JS yang sudah di-bundle.

#### 4. Deploy ke Railway/Render/Heroku

**Railway:**
```bash
# Install Railway CLI
npm i -g @railway/cli

# Login
railway login

# Init dan deploy
railway init
railway up
```

**Render:**
- Buka https://render.com
- New Web Service
- Connect GitHub repo
- Build command: `npm install && npm run build`
- Start command: `npm start`
- Environment: Node
- Deploy!

**Heroku:**
```bash
# Install Heroku CLI
heroku create nama-app-anda
git push heroku main
```

---

## 🔧 Environment Variables yang Dibutuhkan

### Backend (.env atau platform config):
```
PORT=5001
NODE_ENV=production
```

### Frontend (.env.production):
```
VITE_API_URL=https://your-backend-url.railway.app/api
```

---

## ✅ Checklist Sebelum Deploy

- [ ] Test di local: `npm run dev` dan `npm run server` jalan
- [ ] Build berhasil: `npm run build` tanpa error
- [ ] Git commit semua perubahan
- [ ] Update API URL di frontend (jika deploy terpisah)
- [ ] Set environment variables di platform
- [ ] Test admin login: username `admin`, password `admin123`

---

## 🌐 Rekomendasi Platform

| Platform | Frontend | Backend | Harga | Catatan |
|----------|----------|---------|-------|---------|
| **Vercel** | ✅ Excellent | ❌ No | Gratis | CDN global, best untuk React |
| **Netlify** | ✅ Excellent | ❌ No | Gratis | Mirip Vercel |
| **Railway** | ✅ Good | ✅ Excellent | $5/mo | Best untuk fullstack |
| **Render** | ✅ Good | ✅ Good | Gratis tier | Deploy terpisah/gabung |
| **Heroku** | ✅ Good | ✅ Good | $7/mo | Paling populer, stable |

---

## 🎯 Rekomendasi Saya:

**Untuk Pemula:**
→ **Opsi 2** (Deploy jadi satu) ke **Railway** atau **Render**

**Untuk Production:**
→ **Opsi 1** (Deploy terpisah): **Vercel** (frontend) + **Railway** (backend)

---

## 📞 Setelah Deploy

1. **Test website** di URL production
2. **Test admin login** di `/admin/login`
3. **Test edit content** dari dashboard
4. **Test language switcher** (ID/EN)
5. **Check semua section** scroll dari atas ke bawah

---

## 🆘 Troubleshooting

**Error: API tidak connect**
- Cek environment variable `VITE_API_URL` sudah benar
- Cek CORS enabled di backend
- Cek backend server sudah running

**Error: 404 pada refresh page**
- Tambahkan handle React routing di server (lihat Opsi 2)
- Atau configure redirects di Vercel/Netlify

**Error: Build failed**
- Jalankan `npm run build` di local dulu
- Fix semua error sebelum deploy
- Cek dependencies sudah lengkap di `package.json`

---

Butuh bantuan? Tanya aja! 🚀
