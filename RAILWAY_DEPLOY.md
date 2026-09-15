# 🚀 Deploy ke Railway - Panduan Lengkap

## Persiapan

✅ File sudah ready:
- `package.json` dengan script `"start": "node server/index.js"`
- `railway.json` untuk konfigurasi build
- `dist/` folder akan di-generate otomatis saat deploy
- `server/index.js` sudah serve static files

## Langkah Deploy

### 1. Push ke GitHub

```bash
# Inisialisasi git (kalau belum)
git init

# Add semua file
git add .

# Commit
git commit -m "Ready for Railway deployment"

# Create repo di GitHub, lalu:
git remote add origin https://github.com/USERNAME/REPO.git
git branch -M main
git push -u origin main
```

### 2. Deploy di Railway

1. Buka https://railway.app
2. Klik **Login** → Login dengan GitHub
3. Klik **New Project**
4. Pilih **Deploy from GitHub repo**
5. Pilih repository Anda
6. Railway akan auto-detect Node.js dan deploy!

### 3. Tunggu Deploy Selesai

Railway akan:
- ✅ Install dependencies (`npm install`)
- ✅ Build frontend (`npm run build`)
- ✅ Start server (`npm start`)
- ✅ Assign public URL

### 4. Akses Website

Setelah deploy selesai, Railway kasih URL seperti:
```
https://ekpor-impor-production.up.railway.app
```

Akses:
- **Website**: https://your-app.up.railway.app
- **Admin**: https://your-app.up.railway.app/admin/login
  - Username: `admin`
  - Password: `admin123`

## Environment Variables (Opsional)

Railway biasanya auto-set `PORT`, tapi kalau perlu set manual:

1. Klik project di Railway
2. Settings → Variables
3. Add variable:
   ```
   PORT=5001
   NODE_ENV=production
   ```

## Troubleshooting

**Build gagal?**
- Check logs di Railway dashboard
- Pastikan `package.json` punya script `"start"`

**Website blank?**
- Check apakah `dist/` folder ter-generate
- Pastikan `server/index.js` serve static files

**API tidak jalan?**
- Check PORT environment variable
- Check logs: `railway logs`

## Update Website

Setiap kali push ke GitHub:
```bash
git add .
git commit -m "Update content"
git push
```

Railway auto-deploy ulang! 🚀

## Custom Domain (Opsional)

1. Railway dashboard → Settings → Domains
2. Add custom domain
3. Update DNS records di domain provider
4. Tunggu propagasi (~10 menit)

---

**Status:** ✅ Ready to deploy!
