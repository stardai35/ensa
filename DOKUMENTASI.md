# 📚 Ensiklopedia Sastra - Dokumentasi Lengkap

## 🎯 Ringkasan Proyek

Aplikasi web fullstack untuk manajemen ensiklopedia sastra Indonesia dengan fitur public browsing dan admin panel management.

---

## 🗂️ Struktur Project

```
ensisa2/
├── backend/                    # REST API (Node.js + Express)
│   ├── src/
│   │   ├── config/
│   │   │   └── database.js    # MySQL connection pool
│   │   ├── models/
│   │   │   ├── Category.js    # Category model
│   │   │   └── Content.js     # Content model
│   │   ├── controllers/
│   │   │   ├── CategoryController.js
│   │   │   └── ContentController.js
│   │   ├── routes/
│   │   │   ├── category.js
│   │   │   └── content.js
│   │   └── server.js          # Main server file
│   ├── package.json
│   ├── .env.example
│   └── database.sql
│
├── frontend/                   # React SPA
│   ├── src/
│   │   ├── components/        # Shared components
│   │   │   ├── Header.js
│   │   │   ├── SearchBar.js
│   │   │   ├── CategoryList.js
│   │   │   └── ContentCard.js
│   │   ├── pages/             # Public pages
│   │   │   ├── Home.js
│   │   │   └── Detail.js
│   │   ├── admin/             # Admin pages
│   │   │   ├── components/
│   │   │   │   └── AdminNav.js
│   │   │   └── pages/
│   │   │       ├── AdminDashboard.js
│   │   │       └── AdminCategories.js
│   │   ├── api/
│   │   │   └── axiosConfig.js # API client
│   │   ├── App.js
│   │   └── index.js
│   ├── public/
│   │   ├── index.html
│   │   └── manifest.json
│   └── package.json
│
├── README.md
├── QUICKSTART.md
└── .gitignore
```

---

## 🚀 Cara Menjalankan

### Opsi 1: Instalasi Manual

#### Backend
```bash
cd backend
npm install
cp .env.example .env
# Edit .env dengan konfigurasi database
npm run dev
```

#### Frontend (Terminal Baru)
```bash
cd frontend
npm install
npm start
```

### Opsi 2: Menggunakan Setup Script

**Windows:**
```bash
setup.bat
```

**Linux/Mac:**
```bash
chmod +x setup.sh
./setup.sh
```

---

## 📋 Fitur Aplikasi

### 👥 Public Side
- ✅ Halaman utama dengan daftar kategori
- ✅ Search konten ensiklopedia
- ✅ Filter by kategori
- ✅ Halaman detail konten lengkap
- ✅ Responsive design
- ✅ Modern UI dengan gradient

### 🛠️ Admin Side
- ✅ Dashboard content management
- ✅ CRUD Content (Create, Read, Update, Delete)
- ✅ CRUD Category
- ✅ Table view dengan sorting
- ✅ Form validation
- ✅ Success/error notifications

---

## 🔌 API Endpoints

### Content Endpoints
| Method | Endpoint | Deskripsi |
|--------|----------|-----------|
| GET | `/api/content` | Get all contents |
| GET | `/api/content/:id` | Get content by ID |
| GET | `/api/content/slug/:slug` | Get content by slug |
| GET | `/api/content/category/:catId` | Get by category |
| GET | `/api/content/search?q=query` | Search contents |
| POST | `/api/content` | Create new content |
| PUT | `/api/content/:id` | Update content |
| DELETE | `/api/content/:id` | Delete content |

### Category Endpoints
| Method | Endpoint | Deskripsi |
|--------|----------|-----------|
| GET | `/api/category` | Get all categories |
| GET | `/api/category/:id` | Get category by ID |
| POST | `/api/category` | Create category |
| PUT | `/api/category/:id` | Update category |
| DELETE | `/api/category/:id` | Delete category |

---

## 💾 Database Schema

### Tabel: category
```sql
CREATE TABLE category (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  slug VARCHAR(255) NOT NULL
);
```

### Tabel: content
```sql
CREATE TABLE content (
  id INT PRIMARY KEY AUTO_INCREMENT,
  cat_id INT NOT NULL,
  title_id INT NOT NULL,
  year VARCHAR(50) NOT NULL,
  text LONGTEXT NOT NULL,
  slug VARCHAR(255) NOT NULL,
  FOREIGN KEY (cat_id) REFERENCES category(id)
);
```

---

## ⚙️ Konfigurasi

### Backend (.env)
```
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=suzzxrkz_ensisa
JWT_SECRET=your_jwt_secret_key
NODE_ENV=development
```

### Frontend (.env.local)
```
REACT_APP_API_URL=http://localhost:5000/api
```

---

## 📱 URL Aplikasi

| Halaman | URL |
|---------|-----|
| Home | http://localhost:3000 |
| Detail | http://localhost:3000/detail/:slug |
| Admin Dashboard | http://localhost:3000/admin/dashboard |
| Admin Categories | http://localhost:3000/admin/categories |

---

## 🛠️ Tech Stack Details

### Backend
- **Framework**: Express.js 4.18.2
- **Database**: MySQL with mysql2
- **Security**: CORS enabled
- **Authentication**: JWT ready (for future)

### Frontend
- **Library**: React 18.2.0
- **Router**: React Router DOM 6.18.0
- **HTTP Client**: Axios 1.5.0
- **Styling**: CSS3 with gradients & flexbox

---

## 📝 Catatan Penting

1. **Database Setup**
   - Import `backend/database.sql` ke MySQL
   - Update credentials di `.env`

2. **CORS Configuration**
   - Backend sudah mengizinkan CORS dari localhost:3000
   - Untuk production, update CORS settings

3. **File Uploads**
   - Setup sudah siap untuk multer
   - Implementasi dapat ditambahkan nanti

4. **Authentication**
   - JWT setup sudah ready
   - Implementasi login dapat ditambahkan

---

## 🐛 Troubleshooting

### Backend error: Cannot connect to database
```bash
# Check MySQL service
sudo service mysql status

# Or create database manually
mysql -u root -p
CREATE DATABASE suzzxrkz_ensisa;
SOURCE backend/database.sql;
```

### Port 5000 atau 3000 sudah terpakai
```bash
# Linux/Mac - Find process
lsof -i :5000
kill -9 <PID>

# Windows - Find process
netstat -ano | findstr :5000
taskkill /PID <PID> /F
```

### Module not found
```bash
# Reinstall dependencies
npm install
npm cache clean --force
```

---

## 🎨 Customization

### Mengubah Warna
Edit file CSS atau components:
- Main color: `#667eea` (purple)
- Secondary: `#764ba2` (darker purple)

### Menambah Fitur
1. Buat model baru di `backend/src/models/`
2. Buat controller di `backend/src/controllers/`
3. Buat routes di `backend/src/routes/`
4. Create React components di `frontend/src/`

---

## 🚢 Deployment

### Backend Deployment (Heroku/Railway)
```bash
# Add Procfile
echo "web: npm start" > Procfile

# Deploy
git push heroku main
```

### Frontend Deployment (Vercel/Netlify)
```bash
# Build
npm run build

# Deploy via Vercel CLI
vercel
```

---

## 📚 Resources

- [Express.js Docs](https://expressjs.com/)
- [React Docs](https://react.dev/)
- [MySQL Docs](https://dev.mysql.com/doc/)
- [Axios Docs](https://axios-http.com/)

---

## 📞 Support

Untuk bantuan:
1. Check console browser (F12) untuk errors
2. Check terminal backend untuk logs
3. Test API dengan Postman
4. Baca error messages dengan seksama

---

**Created**: January 2026
**License**: MIT
**Version**: 1.0.0
