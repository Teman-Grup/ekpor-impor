# PT. Original Jernang Asia - Company Profile & Dashboard

Website company profile dengan dashboard admin untuk mengelola konten website secara dinamis.

## 🚀 Fitur

- ✅ Company Profile Website yang responsive
- ✅ Admin Dashboard untuk mengelola konten
- ✅ Edit Hero Section
- ✅ Kelola Tentang Kami
- ✅ Manage Pilar Bisnis
- ✅ CRUD Komoditas
- ✅ Update Informasi Kontak
- ✅ API Backend dengan Express.js
- ✅ Data tersimpan dalam file JSON

## 📦 Tech Stack

**Frontend:**
- React 18
- React Router DOM
- Tailwind CSS
- Axios

**Backend:**
- Node.js
- Express.js
- CORS

## 🛠️ Instalasi

### 1. Install Dependencies

```bash
npm install
```

### 2. Jalankan Development Server

**Terminal 1 - Backend API:**
```bash
npm run server
```

**Terminal 2 - Frontend:**
```bash
npm run dev
```

### 3. Akses Aplikasi

- **Website:** http://localhost:3000
- **Admin Login:** http://localhost:3000/admin/login
- **API:** http://localhost:5001/api

## 🔐 Login Admin

```
Username: admin
Password: admin123
```

## 📁 Struktur Project

```
ekpor_impor/
├── src/
│   ├── components/          # Komponen React
│   │   ├── TopBar.jsx
│   │   ├── Navigation.jsx
│   │   ├── HeroSection.jsx
│   │   ├── AboutSection.jsx
│   │   ├── PillarsSection.jsx
│   │   ├── CommoditiesSection.jsx
│   │   └── Footer.jsx
│   ├── pages/
│   │   ├── HomePage.jsx     # Halaman utama
│   │   └── admin/           # Halaman admin
│   │       ├── AdminLogin.jsx
│   │       ├── AdminDashboard.jsx
│   │       ├── DashboardHome.jsx
│   │       ├── EditHero.jsx
│   │       ├── EditAbout.jsx
│   │       ├── EditPillars.jsx
│   │       ├── EditCommodities.jsx
│   │       └── EditContact.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── server/
│   ├── index.js             # Express API server
│   └── data.json            # Database (auto-generated)
├── index.html
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## 🎨 Customization

### Warna Brand

Edit file `tailwind.config.js` untuk mengubah warna brand:

```javascript
colors: {
  brand: {
    crimson: '#8a2410',
    sienna: '#b43b18',
    // ... dst
  }
}
```

### API Endpoints

- `GET /api/content` - Get all content
- `GET /api/content/:section` - Get specific section
- `PUT /api/content/:section` - Update specific section
- `POST /api/auth/login` - Admin login

## 🚀 Deployment

### Build untuk Production

```bash
npm run build
```

File hasil build akan ada di folder `dist/`

### Deploy Backend

Backend bisa di-deploy ke:
- Heroku
- Railway
- DigitalOcean
- VPS

### Deploy Frontend

Frontend bisa di-deploy ke:
- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages

## 📝 Todo / Future Features

- [ ] Upload gambar ke cloud storage
- [ ] Authentication dengan JWT yang proper
- [ ] Database MySQL/PostgreSQL
- [ ] Email notification
- [ ] Analytics dashboard
- [ ] Multi-language support
- [ ] SEO optimization

## 📞 Support

Untuk pertanyaan atau dukungan, hubungi:
- Email: ptoriginaljernangasia@gmail.com
- Phone: +62 812 600 100 28

## 📄 License

© 2024 PT. Original Jernang Asia. All rights reserved.
