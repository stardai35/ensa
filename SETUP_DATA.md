# Setup Data - Ensiklopedia Sastra Indonesia

## Status ✅
- **40 Data Dummy** telah ditambahkan ke `sample-data.sql`
- **Tampilan Home** telah diupdate dengan desain modern dan responsif
- **Fitur Search & Filter** sudah terintegrasi

## Data Distribution
```
Total: 40 Data
├── Pengarang: 7 data
├── Karya Sastra: 10 data
├── Media Penyebar/Penerbit: 8 data
├── Hadiah/Sayembara: 8 data
├── Lembaga Sastra: 5 data
└── Gejala Sastra: 2 data
```

---

## Step-by-Step Setup Guide

### 1️⃣ Setup Database

#### Cara 1: Menggunakan MySQL Command Line
```bash
# Buka terminal dan login ke MySQL
mysql -u root -p

# Masukkan password Anda
```

#### Kemudian jalankan:
```sql
-- Load database schema
SOURCE c:\Users\Faradila\Downloads\ensisa2\backend\database.sql;

-- Load sample data (40 data dummy)
SOURCE c:\Users\Faradila\Downloads\ensisa2\backend\sample-data.sql;

-- Verify data
SELECT COUNT(*) as total FROM content;
SELECT cat_id, COUNT(*) as jumlah FROM content GROUP BY cat_id;
```

#### Cara 2: Menggunakan MySQL Workbench atau PhpMyAdmin
1. Buat database baru: `suzzxrkz_ensisa`
2. Import file `database.sql` (untuk schema)
3. Import file `sample-data.sql` (untuk data)

---

### 2️⃣ Setup Backend

```bash
# Buka terminal di folder backend
cd c:\Users\Faradila\Downloads\ensisa2\backend

# Install dependencies (jika belum)
npm install

# Jalankan server
npm run dev
# atau
npm run start

# Server akan berjalan di: http://localhost:5000
```

**Verifikasi Backend:**
```
Buka browser: http://localhost:5000/api/health
Response: { "status": "Backend is running" }
```

---

### 3️⃣ Setup Frontend

```bash
# Buka terminal baru di folder frontend
cd c:\Users\Faradila\Downloads\ensisa2\frontend

# Install dependencies (jika belum)
npm install

# Jalankan frontend development server
npm start

# Frontend akan berjalan di: http://localhost:3000
```

---

## API Endpoints yang Tersedia

### Content API
```
GET  /api/content              - Dapatkan semua content
GET  /api/content/:id          - Dapatkan content by ID
GET  /api/content/slug/:slug   - Dapatkan content by slug
GET  /api/content/category/:catId - Dapatkan content by kategori
GET  /api/content/search?q=... - Search content
GET  /api/content/media/:type  - Dapatkan content dengan media (image/video)
POST /api/content              - Buat content baru
PUT  /api/content/:id          - Update content
DELETE /api/content/:id        - Hapus content
```

### Category API
```
GET  /api/category       - Dapatkan semua kategori
GET  /api/category/:id   - Dapatkan kategori by ID
POST /api/category       - Buat kategori baru
PUT  /api/category/:id   - Update kategori
DELETE /api/category/:id - Hapus kategori
```

---

## Fitur-Fitur Home Page

### ✨ Header
- Logo dan judul aplikasi
- Search bar untuk mencari content
- Placeholder search yang user-friendly

### 📚 Hero Section
- Judul dan deskripsi aplikasi
- Gradient background yang menarik
- Typography yang jelas

### 🎭 Sidebar Kategori
- List semua kategori dengan icon
- Counter untuk jumlah content per kategori
- Filter aktif dengan highlight
- Statistics box (Total konten dan kategori)
- Sticky position saat scroll

### 📖 Content Grid
- Card layout yang responsif
- Default emoji saat tidak ada image
- Category badge dengan emoji
- Tahun publikasi
- Preview teks content
- "Baca Selengkapnya" button
- Hover effect yang smooth
- Animasi loading

### 🔍 Search & Filter
- Real-time search functionality
- Filter by kategori
- Display hasil pencarian
- Clear button di search
- Reset filter button

---

## Responsive Design

### Desktop (1200px+)
- Sidebar + Content area side by side
- Full grid 3-4 columns

### Tablet (768px - 1024px)
- Sidebar + Content area still visible
- Grid 2-3 columns

### Mobile (< 768px)
- Sidebar above content
- Grid 1-2 columns
- Touch-friendly buttons
- Optimized spacing

---

## Database Schema

### Categories Table
```sql
CREATE TABLE category (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  slug VARCHAR(255) NOT NULL
);
```

### Content Table
```sql
CREATE TABLE content (
  id INT PRIMARY KEY AUTO_INCREMENT,
  cat_id INT NOT NULL (FK),
  title_id VARCHAR(255) NOT NULL,
  year VARCHAR(50),
  text LONGTEXT,
  description TEXT,
  image_url VARCHAR(255),
  video_url VARCHAR(255),
  slug VARCHAR(255) UNIQUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

---

## Troubleshooting

### ❌ Data tidak tampil

**Solution:**
1. ✅ Pastikan database sudah ter-setup dengan benar
2. ✅ Jalankan: `SOURCE sample-data.sql` di MySQL
3. ✅ Restart backend server
4. ✅ Buka DevTools > Network tab > periksa response dari `/api/content`
5. ✅ Periksa console untuk error messages

### ❌ Backend error / Connection refused

**Solution:**
1. ✅ Pastikan MySQL server running
2. ✅ Cek database credentials di `.env`
3. ✅ Restart backend: `npm run dev`
4. ✅ Cek port 5000 tidak terpakai

### ❌ Frontend tidak bisa konek ke backend

**Solution:**
1. ✅ Pastikan backend sudah running di `:5000`
2. ✅ Cek `.env` di frontend: `REACT_APP_API_URL=http://localhost:5000/api`
3. ✅ Clear browser cache: `Ctrl+Shift+Del`
4. ✅ Restart frontend: `npm start`

---

## Features yang Sudah Diimplementasikan

✅ 40 Data Dummy untuk semua kategori
✅ Home page dengan design modern
✅ Sidebar kategori dengan filter
✅ Search functionality
✅ Responsive design (desktop, tablet, mobile)
✅ Card layout yang menarik
✅ Loading state dengan spinner
✅ Empty state dengan helpful message
✅ Icon dan emoji untuk setiap kategori
✅ Hover effect dan animasi smooth
✅ Statistics display
✅ API integration

---

## Next Steps

- [ ] Setup database dengan data
- [ ] Jalankan backend server
- [ ] Jalankan frontend
- [ ] Test semua fitur di home page
- [ ] Tambahkan data lebih banyak jika diperlukan
- [ ] Customize warna dan styling sesuai brand
- [ ] Setup authentication untuk admin panel
- [ ] Optimasi performance

---

## Contact & Support
Jika ada pertanyaan atau masalah, silakan hubungi tim development.

**Last Updated:** January 22, 2026
