# Ensiklopedia Sastra - Quick Start Guide

## Persyaratan
- Node.js v14+ 
- npm atau yarn
- MySQL Server
- Git (optional)

## Instalasi Cepat

### 1. Setup Database
```bash
# Masuk ke MySQL
mysql -u root -p

# Import database
SOURCE backend/database.sql;
```

### 2. Backend Setup
```bash
cd backend
npm install
cp .env.example .env

# Edit .env dengan konfigurasi database Anda
# PORT=5000
# DB_HOST=localhost
# DB_USER=root
# DB_PASSWORD=
# DB_NAME=suzzxrkz_ensisa

npm run dev
```

Backend akan berjalan di: **http://localhost:5000**

### 3. Frontend Setup (terminal baru)
```bash
cd frontend
npm install
cp .env.example .env.local

npm start
```

Frontend akan berjalan di: **http://localhost:3000**

## Mengakses Aplikasi

### Halaman Utama
- URL: http://localhost:3000
- Fitur: Browse kategori, search konten, lihat detail

### Admin Panel
- URL: http://localhost:3000/admin/dashboard
- Fitur: Manage content, manage categories, edit/delete

## API Testing

Gunakan Postman atau curl untuk test API:

```bash
# Get semua content
curl http://localhost:5000/api/content

# Get semua category
curl http://localhost:5000/api/category

# Search content
curl http://localhost:5000/api/content/search?q=pengarang

# Create content
curl -X POST http://localhost:5000/api/content \
  -H "Content-Type: application/json" \
  -d '{
    "cat_id": 1,
    "title_id": "Contoh Karya",
    "year": "2024",
    "text": "Isi konten...",
    "slug": "contoh-karya"
  }'
```

## Struktur Folder

```
ensisa2/
├── backend/              # API Backend
│   ├── src/
│   │   ├── config/      # Database config
│   │   ├── models/      # Data models
│   │   ├── controllers/ # Business logic
│   │   └── routes/      # API endpoints
│   └── database.sql     # Database schema
├── frontend/            # React App
│   ├── src/
│   │   ├── components/  # Reusable components
│   │   ├── pages/       # Page components
│   │   ├── admin/       # Admin pages
│   │   └── api/         # API client
│   └── public/          # Static files
└── README.md
```

## Troubleshooting

### Backend error: "ECONNREFUSED"
- Pastikan MySQL server running
- Check database name di .env file

### Frontend blank page
- Check browser console untuk errors
- Ensure backend running di port 5000
- Clear cache browser (Ctrl+Shift+Delete)

### Port already in use
```bash
# Linux/Mac
lsof -i :5000    # Check port 5000
kill -9 <PID>

# Windows
netstat -ano | findstr :5000
taskkill /PID <PID> /F
```

## Next Steps

1. Customize design sesuai Figma mockup
2. Add authentication/login
3. Add image upload feature
4. Add pagination
5. Implement caching
6. Deploy ke server

## Support

Untuk bantuan lebih lanjut, cek:
- Backend issues: Lihat console backend
- Frontend issues: Lihat browser console (F12)
- API issues: Use Postman untuk debug
